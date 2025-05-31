'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/app/lib/supabaseClient';

interface AdminStats {
  totalUsers: number;
  totalEnrollments: number;
  totalDonations: number;
  totalRevenue: number;
}

interface RecentActivity {
  id: string;
  type: 'enrollment' | 'donation' | 'registration';
  description: string;
  amount?: number;
  date: string;
  user: string;
}

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  created_at: string;
}

interface Course {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  created_at: string;
}

interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  status: string;
  created_at: string;
  profiles: { full_name: string; email: string };
  courses: { name: string; price: number };
}

interface Donation {
  id: string;
  donor_name: string;
  donor_email: string;
  amount: number;
  message: string;
  status: string;
  created_at: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author_name: string;
  author_id?: string;
  image_url?: string;
  featured: boolean;
  published: boolean;
  read_time: number;
  created_at: string;
  updated_at: string;
}

export default function AdminPage() {
  // --- NOVOS STATES PARA CRIAR POST ---
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
    published: true,
    featured: false,
    author_name: '',
    image_url: '',
  });
  const [createError, setCreateError] = useState<string | null>(null);
  const [createSuccess, setCreateSuccess] = useState<string | null>(null);

  // Estados para editar post
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [editPost, setEditPost] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
    published: true,
    featured: false,
    author_name: '',
    image_url: '',
  });
  const [editError, setEditError] = useState<string | null>(null);
  const [editSuccess, setEditSuccess] = useState<string | null>(null);

  // Estados para deletar post
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingPost, setDeletingPost] = useState<BlogPost | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  async function handleCreatePost(e: React.FormEvent) {
    e.preventDefault();
    setCreateError(null);
    setCreateSuccess(null);
    // slug simples baseado no título
    const slug = newPost.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/gi, '-')
      .replace(/(^-|-$)+/g, '');
    try {
      const { error } = await supabase.from('blog_posts').insert([
        {
          ...newPost,
          slug,
          read_time: Math.max(2, Math.round(newPost.content.split(' ').length / 200)),
        },
      ]);
      if (error) throw error;
      setCreateSuccess('Post criado com sucesso!');
      setNewPost({
        title: '',
        category: '',
        excerpt: '',
        content: '',
        published: true,
        featured: false,
        author_name: '',
        image_url: '',
      });
      // Atualiza lista de posts
      loadAdminData();
      setTimeout(() => {
        setShowCreateModal(false);
        setCreateSuccess(null);
      }, 1200);
    } catch (err: unknown) {
      setCreateError(err instanceof Error ? err.message : 'Erro ao criar post');
    }
  }

  // Função para abrir modal de edição
  function openEditModal(post: BlogPost) {
    setEditingPost(post);
    setEditPost({
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      published: post.published,
      featured: post.featured,
      author_name: post.author_name,
      image_url: post.image_url || '',
    });
    setEditError(null);
    setEditSuccess(null);
    setShowEditModal(true);
  }

  // Função para editar post
  async function handleEditPost(e: React.FormEvent) {
    e.preventDefault();
    if (!editingPost) return;
    
    setEditError(null);
    setEditSuccess(null);
    
    // Gerar slug baseado no título
    const slug = editPost.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/gi, '-')
      .replace(/(^-|-$)+/g, '');
    
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({
          ...editPost,
          slug,
          read_time: Math.max(2, Math.round(editPost.content.split(' ').length / 200)),
          updated_at: new Date().toISOString(),
        })
        .eq('id', editingPost.id);
        
      if (error) throw error;
      
      setEditSuccess('Post atualizado com sucesso!');
      
      // Atualizar lista de posts
      loadAdminData();
      
      setTimeout(() => {
        setShowEditModal(false);
        setEditSuccess(null);
        setEditingPost(null);
      }, 1200);
    } catch (err: unknown) {
      setEditError(err instanceof Error ? err.message : 'Erro ao editar post');
    }
  }

  // Função para abrir modal de exclusão
  function openDeleteModal(post: BlogPost) {
    setDeletingPost(post);
    setDeleteError(null);
    setShowDeleteModal(true);
  }

  // Função para deletar post
  async function handleDeletePost() {
    if (!deletingPost) return;
    
    setDeleteError(null);
    
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', deletingPost.id);
        
      if (error) throw error;
      
      // Atualizar lista de posts
      loadAdminData();
      
      // Fechar modal
      setShowDeleteModal(false);
      setDeletingPost(null);
    } catch (err: unknown) {
      setDeleteError(err instanceof Error ? err.message : 'Erro ao deletar post');
    }
  }

  const { user, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'users' | 'courses' | 'donations' | 'content'>('dashboard');
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalEnrollments: 0,
    totalDonations: 0,
    totalRevenue: 0
  });
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]); const [users, setUsers] = useState<User[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loadAdminData = useCallback(async () => {
    try {
      setIsLoadingData(true);
      setError(null);

      // Verificar se o Supabase está configurado
      if (!supabase) {
        // console.log('🔧 Supabase não configurado - usando dados mockados');
        // loadMockData();
        // return;
        setError("Supabase client is not available. Check configuration.");
        setIsLoadingData(false);
        return;
      }

      // Verificar se o usuário é admin
      const { data: userProfile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user?.id)
        .single();

      if (profileError || userProfile?.role !== 'admin') {
        setError('Acesso negado. Usuário não é administrador.');
        router.push('/');
        return;
      }      // Buscar dados reais do Supabase
      const [usersResult, coursesResult, enrollmentsResult, donationsResult, blogPostsResult] = await Promise.all([
        supabase.from('profiles').select('*').order('created_at', { ascending: false }),
        supabase.from('courses').select('*').order('created_at', { ascending: false }),
        supabase
          .from('enrollments')
          .select(`
            *,
            profiles:user_id(full_name, email),
            courses:course_id(name, price)
          `)
          .order('created_at', { ascending: false }),
        supabase.from('donations').select('*').order('created_at', { ascending: false }),
        supabase.from('blog_posts').select('*').order('created_at', { ascending: false })
      ]);      // Verificar erros nas consultas
      if (usersResult.error) throw usersResult.error;
      if (coursesResult.error) throw coursesResult.error;
      if (enrollmentsResult.error) throw enrollmentsResult.error;
      if (donationsResult.error) throw donationsResult.error;
      if (blogPostsResult.error) throw blogPostsResult.error;

      // Atualizar estados com dados reais
      setUsers(usersResult.data || []);
      setCourses(coursesResult.data || []);
      setEnrollments(enrollmentsResult.data || []);
      setDonations(donationsResult.data || []);
      setBlogPosts(blogPostsResult.data || []);

      // Calcular estatísticas
      const completedEnrollments = enrollmentsResult.data?.filter(e => e.status === 'completed') || [];
      const completedDonations = donationsResult.data?.filter(d => d.status === 'completed') || [];

      const enrollmentRevenue = completedEnrollments.reduce((sum, enrollment) => {
        return sum + (enrollment.courses?.price || 0);
      }, 0);

      const donationRevenue = completedDonations.reduce((sum, donation) => {
        return sum + donation.amount;
      }, 0);

      setStats({
        totalUsers: usersResult.data?.length || 0,
        totalEnrollments: completedEnrollments.length,
        totalDonations: completedDonations.length,
        totalRevenue: enrollmentRevenue + donationRevenue
      });

      // Criar atividades recentes
      const activities: RecentActivity[] = [];

      // Adicionar matrículas recentes
      completedEnrollments.slice(0, 3).forEach(enrollment => {
        activities.push({
          id: enrollment.id,
          type: 'enrollment',
          description: `Nova matrícula: ${enrollment.courses?.name}`,
          amount: enrollment.courses?.price,
          date: enrollment.created_at,
          user: enrollment.profiles?.full_name || 'Usuário'
        });
      });

      // Adicionar doações recentes
      completedDonations.slice(0, 2).forEach(donation => {
        activities.push({
          id: donation.id,
          type: 'donation',
          description: 'Nova doação recebida',
          amount: donation.amount,
          date: donation.created_at,
          user: donation.donor_name
        });
      });

      // Adicionar registros recentes
      usersResult.data?.slice(0, 2).forEach(newUser => {
        activities.push({
          id: newUser.id,
          type: 'registration',
          description: 'Novo usuário cadastrado',
          date: newUser.created_at,
          user: newUser.full_name || newUser.email
        });
      });

      // Ordenar por data mais recente
      activities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setRecentActivity(activities.slice(0, 5));
    } catch (error: unknown) {
      console.error('Erro ao carregar dados admin:', error);
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      setError(`Erro ao carregar dados: ${errorMessage}`);

      // Fallback para dados mockados se houver erro de conexão
      // loadMockData();
    } finally {
      setIsLoadingData(false);
    }
  }, [router, user]);

  // const loadMockData = () => {
  //   // Dados mockados como fallback durante desenvolvimento
  //   console.log('🔧 Usando dados mockados - Configure as credenciais do Supabase para dados reais');
  //
  //   setStats({
  //     totalUsers: 1247,
  //     totalEnrollments: 856,
  //     totalDonations: 342,
  //     totalRevenue: 125600
  //   });
  //
  //   setRecentActivity([
  //     {
  //       id: '1',
  //       type: 'enrollment',
  //       description: 'Nova matrícula no curso de Capelão Internacional',
  //       amount: 49900,
  //       date: '2024-01-20T10:30:00Z',
  //       user: 'João Silva'
  //     },
  //     {
  //       id: '2',
  //       type: 'donation',
  //       description: 'Doação recebida',
  //       amount: 10000,
  //       date: '2024-01-20T09:15:00Z',
  //       user: 'Maria Santos'
  //     },
  //     {
  //       id: '3',
  //       type: 'registration',
  //       description: 'Novo usuário cadastrado',
  //       date: '2024-01-20T08:45:00Z',
  //       user: 'Carlos Rodriguez'
  //     }
  //   ]);
  // };

  useEffect(() => {
    if (user) { // Ensure user object is available before loading data
      loadAdminData();
    }
  }, [user, loadAdminData]); // Add user to dependency array

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount / 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'enrollment':
        return (
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        );
      case 'donation':
        return (
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
        );
      case 'registration':
        return (
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Painel Administrativo</h1>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Voltar ao Site
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">A</span>
                </div>
                <span className="text-gray-600">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard'
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span>Dashboard</span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'users'
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <span>Usuários</span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('courses')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'courses'
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>Cursos</span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('donations')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'donations'
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span>Doações</span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('content')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'content'
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span>Conteúdo</span>
                  </div>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total de Usuários</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Matrículas</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.totalEnrollments.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Doações</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.totalDonations.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Receita Total</p>
                        <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats.totalRevenue)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Atividade Recente</h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getActivityIcon(activity.type)}
                          <div>
                            <p className="text-sm font-medium text-gray-800">{activity.description}</p>
                            <p className="text-xs text-gray-500">{activity.user} • {formatDate(activity.date)}</p>
                          </div>
                        </div>
                        {activity.amount && (
                          <div className="text-right">
                            <p className="text-sm font-semibold text-green-600">{formatCurrency(activity.amount)}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}            {activeTab === 'users' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Usuários Cadastrados</h3>
                  {error && (
                    <div className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded">
                      {error}
                    </div>
                  )}
                </div>

                {isLoadingData ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Nome</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Função</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Data de Cadastro</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">{user.full_name || 'N/A'}</td>
                            <td className="py-3 px-4 text-gray-600">{user.email}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${user.role === 'admin'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-blue-100 text-blue-800'
                                }`}>
                                {user.role}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{formatDate(user.created_at)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {users.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        Nenhum usuário encontrado
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Cursos e Matrículas</h3>
                  {error && (
                    <div className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded">
                      {error}
                    </div>
                  )}
                </div>

                {isLoadingData ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Lista de Cursos */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-4">Cursos Disponíveis</h4>
                      <div className="grid gap-4">
                        {courses.map((course) => (
                          <div key={course.id} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-medium text-gray-800">{course.name}</h5>
                              <span className="text-green-600 font-semibold">{formatCurrency(course.price)}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                            <div className="flex justify-between items-center text-xs text-gray-500">
                              <span>Slug: {course.slug}</span>
                              <span>{formatDate(course.created_at)}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {courses.length === 0 && (
                        <div className="text-center py-4 text-gray-500">
                          Nenhum curso cadastrado
                        </div>
                      )}
                    </div>

                    {/* Lista de Matrículas */}
                    <div>
                      <h4 className="font-medium text-gray-800 mb-4">Matrículas Recentes</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Usuário</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Curso</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Valor</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Data</th>
                            </tr>
                          </thead>
                          <tbody>
                            {enrollments.map((enrollment) => (
                              <tr key={enrollment.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4 text-gray-800">{enrollment.profiles?.full_name || enrollment.profiles?.email}</td>
                                <td className="py-3 px-4 text-gray-600">{enrollment.courses?.name}</td>
                                <td className="py-3 px-4">
                                  <span className={`px-2 py-1 rounded text-xs font-medium ${enrollment.status === 'completed'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {enrollment.status}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-gray-600">{formatCurrency(enrollment.courses?.price || 0)}</td>
                                <td className="py-3 px-4 text-gray-600">{formatDate(enrollment.created_at)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {enrollments.length === 0 && (
                          <div className="text-center py-4 text-gray-500">
                            Nenhuma matrícula encontrada
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'donations' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Doações Recebidas</h3>
                  {error && (
                    <div className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded">
                      {error}
                    </div>
                  )}
                </div>

                {isLoadingData ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Doador</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Valor</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Mensagem</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {donations.map((donation) => (
                          <tr key={donation.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-800">{donation.donor_name}</td>
                            <td className="py-3 px-4 text-gray-600">{donation.donor_email}</td>
                            <td className="py-3 px-4 font-semibold text-green-600">{formatCurrency(donation.amount)}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${donation.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {donation.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-600 max-w-xs truncate">{donation.message || 'N/A'}</td>
                            <td className="py-3 px-4 text-gray-600">{formatDate(donation.created_at)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {donations.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        Nenhuma doação encontrada
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}            {activeTab === 'content' && (
              <div className="bg-white rounded-lg shadow-sm p-6">

                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Gestão de Blog</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowCreateModal(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Novo Post
                    </button>
                    <button
                      onClick={() => window.open('/blog', '_blank')}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Ver Blog
                    </button>
                  </div>
                </div>



                {isLoadingData ? (
                  <div className="text-center py-8">
                    <div className="animate-spin w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
                    <p className="text-gray-600 mt-2">Carregando posts...</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-8">
                    <p className="text-red-600">{error}</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Estatísticas dos Posts */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-blue-600">Total de Posts</p>
                        <p className="text-2xl font-bold text-blue-900">{blogPosts.length}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-green-600">Publicados</p>
                        <p className="text-2xl font-bold text-green-900">{blogPosts.filter(p => p.published).length}</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-yellow-600">Rascunhos</p>
                        <p className="text-2xl font-bold text-yellow-900">{blogPosts.filter(p => !p.published).length}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-purple-600">Em Destaque</p>
                        <p className="text-2xl font-bold text-purple-900">{blogPosts.filter(p => p.featured).length}</p>
                      </div>
                    </div>

                    {/* Lista de Posts */}
                    <div className="overflow-x-auto">
                      <table className="w-full table-auto">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Título</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Categoria</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Autor</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Data</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogPosts.map((post) => (
                            <tr key={post.id} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4">
                                <div>
                                  <div className="font-medium text-gray-800">{post.title}</div>
                                  {post.featured && (
                                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Destaque</span>
                                  )}
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                                  {post.category}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-gray-600">{post.author_name}</td>
                              <td className="py-3 px-4">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${post.published
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                                  }`}>
                                  {post.published ? 'Publicado' : 'Rascunho'}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-gray-600">
                                {formatDate(post.created_at)}
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex space-x-2">
                                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium" onClick={() => openEditModal(post)}>
                                    Editar
                                  </button>
                                  <button className="text-red-600 hover:text-red-700 text-sm font-medium" onClick={() => openDeleteModal(post)}>
                                    Excluir
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {blogPosts.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                          <p>Nenhum post encontrado</p>
                          <p className="text-sm mt-2">Execute os comandos SQL do Supabase para adicionar posts de exemplo</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Modal de edição de post */}
            {showEditModal && editingPost && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
                  <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                    onClick={() => setShowEditModal(false)}
                    aria-label="Fechar"
                  >
                    ×
                  </button>
                  <h2 className="text-xl font-bold mb-4">Editar Post</h2>
                  <form onSubmit={handleEditPost} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Título</label>
                      <input 
                        type="text" 
                        className="w-full border rounded px-3 py-2" 
                        required 
                        value={editPost.title} 
                        onChange={e => setEditPost({ ...editPost, title: e.target.value })} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Categoria</label>
                      <input 
                        type="text" 
                        className="w-full border rounded px-3 py-2" 
                        required 
                        value={editPost.category} 
                        onChange={e => setEditPost({ ...editPost, category: e.target.value })} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Resumo (excerpt)</label>
                      <textarea 
                        className="w-full border rounded px-3 py-2" 
                        required 
                        value={editPost.excerpt} 
                        onChange={e => setEditPost({ ...editPost, excerpt: e.target.value })} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Conteúdo</label>
                      <textarea 
                        className="w-full border rounded px-3 py-2 h-32" 
                        required 
                        value={editPost.content} 
                        onChange={e => setEditPost({ ...editPost, content: e.target.value })} 
                      />
                    </div>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 text-sm">
                        <input 
                          type="checkbox" 
                          checked={editPost.published} 
                          onChange={e => setEditPost({ ...editPost, published: e.target.checked })} 
                        />
                        Publicar
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input 
                          type="checkbox" 
                          checked={editPost.featured} 
                          onChange={e => setEditPost({ ...editPost, featured: e.target.checked })} 
                        />
                        Destaque
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Autor</label>
                      <input 
                        type="text" 
                        className="w-full border rounded px-3 py-2" 
                        required 
                        value={editPost.author_name} 
                        onChange={e => setEditPost({ ...editPost, author_name: e.target.value })} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">URL da Imagem (opcional)</label>
                      <input 
                        type="text" 
                        className="w-full border rounded px-3 py-2" 
                        value={editPost.image_url} 
                        onChange={e => setEditPost({ ...editPost, image_url: e.target.value })} 
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <button 
                        type="button"
                        onClick={() => setShowEditModal(false)}
                        className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
                      >
                        Cancelar
                      </button>
                      <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
                      >
                        Atualizar
                      </button>
                    </div>
                    {editError && <div className="text-red-600 text-sm mt-2">{editError}</div>}
                    {editSuccess && <div className="text-green-600 text-sm mt-2">{editSuccess}</div>}
                  </form>
                </div>
              </div>
            )}

            {/* Modal de confirmação de exclusão */}
            {showDeleteModal && deletingPost && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                  <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                    onClick={() => setShowDeleteModal(false)}
                    aria-label="Fechar"
                  >
                    ×
                  </button>
                  <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                      <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Confirmar Exclusão</h3>                    <p className="text-sm text-gray-500 mb-4">
                      Tem certeza que deseja excluir o post &quot;<strong>{deletingPost.title}</strong>&quot;? 
                      Esta ação não pode ser desfeita.
                    </p>
                    {deleteError && (
                      <div className="text-red-600 text-sm mb-4">{deleteError}</div>
                    )}
                    <div className="flex justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setShowDeleteModal(false)}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        onClick={handleDeletePost}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-semibold"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de criação de post */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              onClick={() => setShowCreateModal(false)}
              aria-label="Fechar"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Novo Post do Blog</h2>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Título</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={newPost.title}
                  onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Categoria</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={newPost.category}
                  onChange={e => setNewPost({ ...newPost, category: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Resumo (excerpt)</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  required
                  value={newPost.excerpt}
                  onChange={e => setNewPost({ ...newPost, excerpt: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Conteúdo</label>
                <textarea
                  className="w-full border rounded px-3 py-2 h-32"
                  required
                  value={newPost.content}
                  onChange={e => setNewPost({ ...newPost, content: e.target.value })}
                />
              </div>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={newPost.published}
                    onChange={e => setNewPost({ ...newPost, published: e.target.checked })}
                  />
                  Publicar
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={newPost.featured}
                    onChange={e => setNewPost({ ...newPost, featured: e.target.checked })}
                  />
                  Destaque
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Autor</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={newPost.author_name}
                  onChange={e => setNewPost({ ...newPost, author_name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">URL da Imagem (opcional)</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={newPost.image_url}
                  onChange={e => setNewPost({ ...newPost, image_url: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
                >
                  Salvar
                </button>
              </div>
              {createError && <div className="text-red-600 text-sm mt-2">{createError}</div>}
              {createSuccess && <div className="text-green-600 text-sm mt-2">{createSuccess}</div>}
            </form>
          </div>
        </div>
      )}

      {/* Modal de edição de post */}
      {showEditModal && editingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              onClick={() => setShowEditModal(false)}
              aria-label="Fechar"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Editar Post</h2>
            <form onSubmit={handleEditPost} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Título</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={editPost.title}
                  onChange={e => setEditPost({ ...editPost, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Categoria</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={editPost.category}
                  onChange={e => setEditPost({ ...editPost, category: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Resumo (excerpt)</label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  required
                  value={editPost.excerpt}
                  onChange={e => setEditPost({ ...editPost, excerpt: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Conteúdo</label>
                <textarea
                  className="w-full border rounded px-3 py-2 h-32"
                  required
                  value={editPost.content}
                  onChange={e => setEditPost({ ...editPost, content: e.target.value })}
                />
              </div>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={editPost.published}
                    onChange={e => setEditPost({ ...editPost, published: e.target.checked })}
                  />
                  Publicar
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={editPost.featured}
                    onChange={e => setEditPost({ ...editPost, featured: e.target.checked })}
                  />
                  Destaque
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Autor</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  required
                  value={editPost.author_name}
                  onChange={e => setEditPost({ ...editPost, author_name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">URL da Imagem (opcional)</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  value={editPost.image_url}
                  onChange={e => setEditPost({ ...editPost, image_url: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
                >
                  Salvar
                </button>
              </div>
              {editError && <div className="text-red-600 text-sm mt-2">{editError}</div>}
              {editSuccess && <div className="text-green-600 text-sm mt-2">{editSuccess}</div>}
            </form>
          </div>
        </div>
      )}

      {/* Modal de exclusão de post */}
      {showDeleteModal && deletingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              onClick={() => setShowDeleteModal(false)}
              aria-label="Fechar"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Excluir Post do Blog</h2>
            <p className="mb-4">Tem certeza de que deseja excluir este post?</p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleDeletePost}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
            {deleteError && <div className="text-red-600 text-sm mt-2">{deleteError}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
