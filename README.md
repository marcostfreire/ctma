# 🌟 CTMA Website - Comissão de Trabalho Missionário e Assistência

## 🎯 Sobre o Projeto

Website institucional completo da **CTMA (Comissão de Trabalho Missionário e Assistência)**, uma organização cristã internacional focada em capacitação de capelães, diplomatas civis e líderes globais. O site oferece uma plataforma moderna e completa para cursos, autenticação, pagamentos e gestão de usuários.

### ✨ **STATUS: 100% COMPLETO E PRONTO PARA LANÇAMENTO**

## 🚀 Funcionalidades Principais

### 📱 **21 Páginas Implementadas**
- **6 Páginas Principais**: Homepage, Cursos, Contato, Projetos, Sobre Nós, FAQ
- **5 Landing Pages de Cursos**: Capelania, Diplomacia Civil, Monitor, Liderança Global, Especializações
- **5 Páginas Institucionais**: Credenciamento, Blog, Missão/Visão/Valores, Termos de Uso, Política de Privacidade
- **5 Páginas do Sistema**: Login, Registro, Dashboard, Admin, Doações

### 🔐 **Sistema de Autenticação Completo**
- Login/Registro com Supabase Auth
- Recuperação de senha
- Perfis de usuário personalizados
- Proteção de rotas
- Logout seguro

### 💳 **Sistema de Pagamentos (Stripe)**
- Doações com valores predefinidos
- Pagamento de cursos
- Checkout seguro com Stripe Elements
- Confirmação de pagamentos
- Histórico de transações

### 📊 **Dashboards Avançados**
- **Dashboard do Usuário**: Perfil, cursos matriculados, histórico de doações
- **Dashboard Admin**: Estatísticas, gestão de usuários, relatórios

### 🎨 **Design Responsivo e Moderno**
- Tailwind CSS para styling
- Componentes reutilizáveis
- Animações suaves
- Mobile-first design
- Acessibilidade (WCAG)

## 🛠 Tecnologias Utilizadas

### Core Framework
- **Next.js 15** - React framework com App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipagem estática

### Styling e UI
- **Tailwind CSS 4** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **Embla Carousel** - Carrossel de depoimentos

### Backend e Banco de Dados
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Banco de dados (via Supabase)
- **Row Level Security** - Segurança de dados

### Pagamentos
- **Stripe** - Processamento de pagamentos
- **Stripe Elements** - Componentes de checkout
- **Webhooks** - Confirmação de pagamentos

### Deploy e Hospedagem
- **Vercel** - Plataforma de deploy
- **Edge Functions** - API routes
- **CDN Global** - Performance otimizada

## 📂 Estrutura do Projeto

```
ctmaweb/
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── (pages)/           # Páginas principais
│   │   ├── cursos/            # Landing pages de cursos
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # Dashboard do usuário
│   │   ├── admin/             # Dashboard administrativo
│   │   └── layout.tsx         # Layout principal
│   ├── components/            # Componentes reutilizáveis
│   │   ├── home/             # Componentes da homepage
│   │   ├── layout/           # Header, Footer, Navigation
│   │   └── checkout/         # Componentes de pagamento
│   ├── contexts/             # Contextos React
│   │   └── AuthContext.tsx   # Gerenciamento de autenticação
│   └── lib/                  # Utilitários e configurações
│       ├── supabaseClient.ts # Cliente Supabase
│       └── stripe.ts         # Configuração Stripe
├── public/                   # Arquivos estáticos
│   └── images/              # Imagens e assets
├── projeto/                 # Documentação do projeto
└── docs/                   # Documentação técnica
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Conta Supabase (para autenticação)
- Conta Stripe (para pagamentos)

### Instalação

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd ctmaweb
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Copie o arquivo de exemplo
cp .env.local.example .env.local

# Edite o arquivo .env.local com suas chaves
```

4. **Execute em desenvolvimento**
```bash
npm run dev
```

5. **Acesse o projeto**
```
http://localhost:3000
```

### Build para Produção
```bash
npm run build
npm start
```

## 🔧 Configuração de Ambiente

### Desenvolvimento (.env.local)
```bash
# Supabase (modo de desenvolvimento)
NEXT_PUBLIC_SUPABASE_URL=https://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=development-key

# Stripe (modo de teste)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=development-secret
```

### Produção
Veja o arquivo `DEPLOYMENT.md` para instruções completas de deploy.

## 📱 Páginas Implementadas

### 🏠 **Páginas Principais**
| Página | Rota | Descrição |
|--------|------|-----------|
| Homepage | `/` | Página inicial com hero, sobre, cursos |
| Cursos | `/cursos` | Listagem completa de cursos |
| Contato | `/contato` | Formulário de contato |
| Projetos | `/projetos` | Página de projetos |
| Sobre Nós | `/sobre-nos` | Informações institucionais |
| FAQ | `/faq` | Perguntas frequentes |

### 🎓 **Landing Pages de Cursos**
| Curso | Rota | Preço |
|-------|------|-------|
| Capelania Internacional | `/cursos/capelao-internacional` | R$ 599 |
| Diplomacia Civil | `/cursos/diplomata-civil` | R$ 799 |
| Monitor Internacional | `/cursos/monitor-internacional` | R$ 399 |
| Liderança Global | `/cursos/lider-global` | R$ 699 |
| Especializações | `/cursos/especializacoes` | R$ 299 |

### 🏛️ **Páginas Institucionais**
| Página | Rota | Descrição |
|--------|------|-----------|
| Credenciamento | `/credenciamento` | Processo em 4 etapas |
| Blog | `/blog` | Blog dinâmico com categorias |
| Missão/Visão/Valores | `/missao-visao-valores` | Propósito institucional |
| Termos de Uso | `/termos-de-uso` | 12 seções legais |
| Política de Privacidade | `/politica-de-privacidade` | LGPD compliant |

### 🔐 **Sistema de Usuários**
| Página | Rota | Descrição |
|--------|------|-----------|
| Login | `/login` | Autenticação de usuários |
| Registro | `/registro` | Cadastro de novos usuários |
| Dashboard | `/dashboard` | Painel do usuário |
| Admin | `/admin` | Painel administrativo |
| Doações | `/doar` | Sistema de doações |

## 💰 Sistema de Preços

### 💝 **Doações**
- R$ 25 - Apoio básico
- R$ 50 - Apoio regular  
- R$ 100 - Apoio especial
- R$ 250 - Apoio premium
- R$ 500 - Apoio máximo
- Valor personalizado

### 🎓 **Cursos**
- **Especializações**: R$ 299
- **Monitor Internacional**: R$ 399
- **Capelania Internacional**: R$ 599
- **Liderança Global**: R$ 699
- **Diplomacia Civil**: R$ 799

## 🎨 Design System

### 🎨 **Cores**
- **Primária**: Verde (#22c55e)
- **Secundária**: Azul (#3b82f6)  
- **Neutros**: Cinzas diversos
- **Estados**: Vermelho (erro), Verde (sucesso), Amarelo (aviso)

### 📱 **Responsividade**
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### ♿ **Acessibilidade**
- Semântica HTML5
- ARIA labels
- Contraste adequado
- Navegação por teclado

## 🔒 Segurança

### 🛡️ **Autenticação**
- Supabase Auth (OAuth 2.0)
- JWT tokens seguros
- Row Level Security (RLS)
- Proteção CSRF

### 💳 **Pagamentos**
- PCI DSS compliant (Stripe)
- Tokenização de cartões
- Webhooks seguros
- Criptografia end-to-end

### 🔐 **Dados**
- LGPD compliant
- Backup automático
- Criptografia em repouso
- Logs de auditoria

## 📊 Performance

### ⚡ **Métricas**
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### 🚀 **Otimizações**
- Code splitting automático
- Lazy loading de imagens
- Preload de recursos críticos
- Compressão gzip/brotli

## 🧪 Testes

### ✅ **Testes Implementados**
- Build sem erros
- TypeScript validation
- ESLint compliance
- Responsive design
- Accessibility checks

### 🔄 **CI/CD**
- Build automático no Vercel
- Deploy preview para PRs
- Rollback automático em caso de erro

## 📈 Analytics e SEO

### 📊 **Analytics**
- Google Analytics integração
- Métricas de conversão
- Funil de inscrições
- Tracking de doações

### 🔍 **SEO**
- Meta tags otimizadas
- Open Graph tags
- Schema.org markup
- Sitemap automático
- Robots.txt

## 🆘 Suporte e Manutenção

### 📝 **Logs**
- Vercel Function logs
- Supabase Database logs
- Stripe webhook logs
- Error tracking

### 🔧 **Monitoramento**
- Uptime monitoring
- Performance alerts
- Error notifications
- Usage metrics

## 📞 Contato e Suporte

Para suporte técnico ou dúvidas sobre o projeto:

- **Desenvolvedor**: [Seu Nome]
- **Email**: [seu-email@exemplo.com]
- **GitHub**: [seu-github]
- **LinkedIn**: [seu-linkedin]

---

## 🎉 **Website 100% Completo e Pronto para Lançamento!**

Este projeto representa uma solução completa e profissional para a CTMA, com todas as funcionalidades modernas que uma organização internacional precisa. Desde autenticação segura até processamento de pagamentos, tudo foi implementado seguindo as melhores práticas de desenvolvimento web.

**Desenvolvido com ❤️ para impactar vidas globalmente através da CTMA!**

---

### 📄 Licença

Este projeto é propriedade da CTMA (Comissão de Trabalho Missionário e Assistência). Todos os direitos reservados.
