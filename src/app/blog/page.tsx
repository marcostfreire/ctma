"use client";

import React, { useState } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Capelania",
    "Diplomacia",
    "Direitos Humanos",
    "Notícias",
    "Casos de Sucesso",
  ];

  // Busca posts do Supabase
  interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    created_at: string;
    featured: boolean;
    image_url?: string;
    read_time?: number;
    date: string;
    readTime: string;
    image: string;
  }

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const { supabase } = await import("@/app/lib/supabaseClient");
        const { data, error } = await supabase
          .from("blog_posts")
          .select("id, title, excerpt, category, author, created_at, featured, image_url, read_time")
          .eq("published", true)
          .order("created_at", { ascending: false });
        if (error) throw error;
        setPosts(
          (data || []).map((post) => ({
            ...post,
            date: post.created_at
              ? new Date(post.created_at).toLocaleDateString("pt-BR")
              : "",
            readTime: post.read_time ? `${post.read_time} min` : "",
            image: post.image_url || "/api/placeholder/600/400",
          }))
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao buscar posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts =
    selectedCategory === "Todos"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);
  const featuredPost = posts.find((post) => post.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-gray-500 text-lg">Carregando posts...</span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-red-600 text-lg">{error}</span>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-900/90 to-indigo-800/90 text-white py-20 relative"
        style={{
          backgroundImage: 'url("/images/blog/lider-global.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-800/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Blog CTMA</h1>
            <p className="text-xl mb-8 text-blue-100">
              Insights, experiências e conhecimentos compartilhados por nossa
              comunidade de profissionais certificados ao redor do mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-[#3E567B] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Assinar Newsletter
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Contribuir com Artigo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Artigo em Destaque
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime} de leitura</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-800">{featuredPost.author}</div>
                        <div className="text-sm text-gray-500">{featuredPost.date}</div>
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Ler Artigo
                    </button>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
                  <span className="text-gray-500">Imagem do Artigo</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-blue-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter((post) => !post.featured).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gray-200 aspect-video flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Imagem</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                          <div className="text-sm font-semibold text-gray-800">{post.author}</div>
                          <div className="text-xs text-gray-500">{post.date}</div>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        Ler mais →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mantenha-se Atualizado
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Receba os melhores artigos, notícias e insights diretamente em seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Assinar
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Enviamos no máximo 1 e-mail por semana. Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Tópicos Populares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Capelania Hospitalar</h3>
                <p className="text-sm text-gray-600">Práticas e protocolos para cuidado espiritual</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Mediação de Conflitos</h3>
                <p className="text-sm text-gray-600">Técnicas avançadas de resolução diplomática</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Direitos Humanos</h3>
                <p className="text-sm text-gray-600">Monitoramento e proteção internacional</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Casos Internacionais</h3>
                <p className="text-sm text-gray-600">Experiências e lições aprendidas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Tem uma História para Compartilhar?
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Contribua com a comunidade CTMA compartilhando suas experiências,
            insights e conhecimentos através de nosso blog.
          </p>
          <button className="bg-orange-500 hover:bg-[#3E567B] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Enviar Proposta de Artigo
          </button>
        </div>
      </section>
    </div>
  );
}
