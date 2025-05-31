-- =============================================
-- CONFIGURAÇÃO DO BANCO DE DADOS SUPABASE
-- Execute estes comandos no SQL Editor do Supabase
-- =============================================

-- 1. Criar tabela de perfis de usuários
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Criar tabela de cursos
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  price INTEGER NOT NULL, -- preço em centavos
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Criar tabela de matrículas
CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  stripe_payment_intent_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- 4. Criar tabela de doações
CREATE TABLE IF NOT EXISTS public.donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  amount INTEGER NOT NULL, -- valor em centavos
  message TEXT,
  stripe_payment_intent_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Criar tabela de posts do blog
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  read_time INTEGER DEFAULT 5, -- tempo de leitura em minutos
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Inserir cursos padrão
INSERT INTO public.courses (name, slug, description, price) VALUES
('Curso de Capelão Internacional', 'capelao-internacional', 'Formação completa em capelania internacional', 49900),
('Curso de Diplomata Civil', 'diplomata-civil', 'Especialização em diplomacia civil', 59900),
('Curso de Monitor Internacional', 'monitor-internacional', 'Capacitação para monitoria internacional', 39900),
('Curso de Líder Global', 'lider-global', 'Desenvolvimento de liderança global', 69900),
('Especializações Diversas', 'especializacoes', 'Cursos de especialização variados', 29900)
ON CONFLICT (slug) DO NOTHING;

-- 6. Criar função para criar perfil automaticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. Criar trigger para novos usuários
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 8. Configurar políticas de segurança (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Remover políticas existentes se houverem
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Anyone can view courses" ON public.courses;
DROP POLICY IF EXISTS "Only admins can modify courses" ON public.courses;
DROP POLICY IF EXISTS "Users can view own enrollments" ON public.enrollments;
DROP POLICY IF EXISTS "Users can create own enrollments" ON public.enrollments;
DROP POLICY IF EXISTS "Admins can view all enrollments" ON public.enrollments;
DROP POLICY IF EXISTS "Only admins can view donations" ON public.donations;
DROP POLICY IF EXISTS "Anyone can view published posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Only admins can modify posts" ON public.blog_posts;

-- Políticas para profiles
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all profiles" ON public.profiles FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Políticas para courses (público para leitura)
CREATE POLICY "Anyone can view courses" ON public.courses FOR SELECT TO authenticated, anon USING (true);
CREATE POLICY "Only admins can modify courses" ON public.courses FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Políticas para enrollments
CREATE POLICY "Users can view own enrollments" ON public.enrollments FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can create own enrollments" ON public.enrollments FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Admins can view all enrollments" ON public.enrollments FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Políticas para donations (admins only)
CREATE POLICY "Only admins can view donations" ON public.donations FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Políticas para blog_posts
CREATE POLICY "Anyone can view published posts" ON public.blog_posts FOR SELECT TO authenticated, anon USING (published = true);
CREATE POLICY "Only admins can modify posts" ON public.blog_posts FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
);

-- Inserir posts de exemplo (execute após criar os perfis de admin)
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, author_name, image_url, featured, read_time) VALUES
('O Papel do Capelão em Situações de Emergência: Lições da Pandemia COVID-19', 
 'capelao-emergencia-covid19',
 'Durante a pandemia, capelães desempenharam um papel fundamental no apoio emocional e espiritual. Analisamos as principais lições aprendidas e como isso moldou a profissão.',
 'Durante a pandemia de COVID-19, capelães ao redor do mundo enfrentaram desafios sem precedentes...', 
 'Capelania', 
 'Dr. Maria Santos', 
 '/images/blog/capelania-emergencia.jpg', 
 true, 
 8),
 
('Diplomacia Civil: Construindo Pontes em Tempos de Polarização',
 'diplomacia-civil-pontes',
 'A diplomacia civil emerge como ferramenta essencial para resolver conflitos locais e promover diálogo entre comunidades divididas.',
 'Em um mundo cada vez mais polarizado, a diplomacia civil surge como uma abordagem inovadora...', 
 'Diplomacia', 
 'Carlos Rodriguez', 
 '/api/placeholder/600/400', 
 false, 
 6),

('CTMA Credencia 50 Novos Profissionais em Programa Internacional',
 'ctma-credencia-50-profissionais',
 'Mais uma turma de capelães, diplomatas civis e monitores recebe credenciamento oficial da CTMA, expandindo nossa rede global de profissionais.',
 'A CTMA tem o orgulho de anunciar a conclusão bem-sucedida de mais um ciclo de credenciamento...', 
 'Notícias', 
 'Equipe CTMA', 
 '/images/blog/credenciamento.jpg', 
 false, 
 4)
ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- COMANDOS FINAIS
-- =============================================

-- Para tornar usuários administradores, execute:
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'seuemail@exemplo.com';
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'marcostamoyofreire@gmail.com';

-- Para verificar se tudo foi criado corretamente:
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
