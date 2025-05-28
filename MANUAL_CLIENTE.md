# MANUAL DO CLIENTE - CTMA WEBSITE
# Configuração Simples da Plataforma CTMA

## ⚡ INÍCIO RÁPIDO (3 PASSOS)

### PASSO 1: Instalar o Site
```bash
# Abra o terminal na pasta do projeto e digite:
npm install
npm run dev
```
**Pronto! O site estará rodando em http://localhost:3000**

### PASSO 2: Configurar Serviços Online (SEM INSTALAR NADA)
Você precisa criar 3 contas gratuitas na internet:

#### 🗄️ SUPABASE (Banco de Dados - 100% na nuvem)
1. **Acesse:** https://supabase.com
2. **Clique:** "Start your project" → Crie conta com seu e-mail
3. **Crie projeto:** Nome: "CTMA" → Aguarde 2 minutos
4. **Copie 2 códigos:** Vá em Settings → API → Copie "Project URL" e "anon public"

#### 💳 STRIPE (Pagamentos)
1. **Acesse:** https://dashboard.stripe.com
2. **Crie conta** → Confirme e-mail
3. **Copie 2 códigos:** Developers → API keys → "Publishable key" e "Secret key"

#### 📧 RESEND (E-mails)
1. **Acesse:** https://resend.com
2. **Crie conta** → API Keys → "Create API Key"
3. **Copie 1 código:** A chave que apareceu

### PASSO 3: Colar os Códigos no Site
1. **Renomeie:** `.env.example` para `.env.local`
2. **Cole os códigos** que você copiou nos lugares certos
3. **Reinicie:** Pare o site (Ctrl+C) e rode `npm run dev` novamente

## 🔧 CONFIGURAÇÃO DO BANCO (COPIAR E COLAR)

**No Supabase, vá em "SQL Editor" e cole este código:**

```sql
-- COPIE TUDO ISSO E COLE NO SUPABASE (SQL EDITOR):

-- 1. Criar tabela de perfis de usuários
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Criar tabela de cursos
CREATE TABLE public.courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  price INTEGER NOT NULL, -- preço em centavos
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Criar tabela de matrículas
CREATE TABLE public.enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  stripe_payment_intent_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- 4. Criar tabela de doações
CREATE TABLE public.donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  amount INTEGER NOT NULL, -- valor em centavos
  message TEXT,
  stripe_payment_intent_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Inserir cursos padrão
INSERT INTO public.courses (name, slug, description, price) VALUES
('Curso de Capelão Internacional', 'capelao-internacional', 'Formação completa em capelania internacional', 49900),
('Curso de Diplomata Civil', 'diplomata-civil', 'Especialização em diplomacia civil', 59900),
('Curso de Monitor Internacional', 'monitor-internacional', 'Capacitação para monitoria internacional', 39900),
('Curso de Líder Global', 'lider-global', 'Desenvolvimento de liderança global', 69900),
('Especializações Diversas', 'especializacoes', 'Cursos de especialização variados', 29900);

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
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 8. Configurar políticas de segurança (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

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
```
**Clique em "RUN" → Aguarde aparecer "Success"**

## 👑 CRIAR SEU USUÁRIO ADMINISTRADOR

1. **Acesse seu site:** http://localhost:3000
2. **Clique:** "Registro" → Crie sua conta normalmente
3. **No Supabase:** Authentication → Users → Clique no seu usuário
4. **Cole este código no SQL Editor:**
```sql
UPDATE public.profiles SET role = 'admin' WHERE email = 'SEUEMAIL@AQUI.COM';
```
*(Substitua pelo seu e-mail real)*

**PRONTO! Agora você é admin e pode acessar: http://localhost:3000/admin**

## 🎯 O QUE VOCÊ JÁ TEM FUNCIONANDO

✅ **Site completo** com todas as páginas  
✅ **Sistema de login** e registro  
✅ **Pagamentos** via cartão (Stripe)  
✅ **E-mails** automáticos  
✅ **Painel administrativo** completo  
✅ **Sistema de cursos** e matrículas  
✅ **Sistema de doações**  

## 🚀 OPCIONAL: COLOCAR NO AR (INTERNET)

### Vercel (Recomendado - GRATUITO)
1. **Acesse:** https://vercel.com
2. **Conecte:** Seu GitHub → Importe o projeto
3. **Configure:** As mesmas variáveis do `.env.local`
4. **Deploy!** Seu site estará no ar em 2 minutos

## ❓ SE ALGO NÃO FUNCIONAR

**Site não abre:**
- Rodou `npm install` e `npm run dev`?

**Erro de banco:**
- Executou o código SQL no Supabase?
- As chaves estão no `.env.local`?

**Pagamento não funciona:**
- Conta Stripe está ativada?
- Chaves do Stripe estão corretas?

---
**✨ Parabéns! Sua plataforma CTMA está pronta!**
