// Exemplo de como restringir o painel administrativo apenas para um email específico

// 1. Defina o email do administrador
const ADMIN_EMAIL = 'ctma.usa@gmail.com'; // Email do administrador CTMA

// 2. No arquivo src/app/dashboard/page.tsx, adicione a verificação:

// Função para verificar se o usuário é admin
// Exemplo de uso:
const isAdmin = (userEmail) => {
  return userEmail === ADMIN_EMAIL;
};
// Exemplo de chamada para evitar erro de variável não usada:
isAdmin('test@example.com');

// Na renderização do botão, adicione a verificação:
// Exemplo de uso dentro de um componente React:
/*
function AdminButton({ user, activeTab, setActiveTab }) {
  if (!isAdmin(user?.email)) return null;
  return (
    <button
      onClick={() => setActiveTab('admin')}
      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
        activeTab === 'admin'
          ? 'bg-red-100 text-red-700 font-medium'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center space-x-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Painel Admin</span>
      </div>
    </button>
  );
}
*/

// Na renderização do conteúdo da aba admin:
/*
{activeTab === 'admin' && isAdmin(user?.email) && (
  <div className="bg-white rounded-lg shadow-sm p-6">
    // Conteúdo do painel admin
  </div>
)}
*/

// 3. No arquivo src/app/admin/page.tsx, adicione verificação no useEffect:
/*
useEffect(() => {
  if (!loading && !user) {
    router.push('/login');
    return;
  }

  // Verificar se o usuário é admin por email
  if (user && !isAdmin(user.email)) {
    // Redirecionar para página inicial se não for admin
    router.push('/');
    return;
  }

  if (user && isAdmin(user.email)) {
    loadAdminData();
  }
}, [user, loading, router, isAdmin]);
*/

// 4. Alternativa: Criar um hook personalizado para verificação de admin

// src/hooks/useIsAdmin.ts
/*
import { useAuth } from '@/contexts/AuthContext';

const ADMIN_EMAIL = 'admin@ctma.com';

export const useIsAdmin = () => {
  const { user } = useAuth();
  return user?.email === ADMIN_EMAIL;
};
*/

// Uso do hook nos componentes:
/*
import { useIsAdmin } from '@/hooks/useIsAdmin';

export default function DashboardPage() {
  const isAdmin = useIsAdmin();

  // Renderizar apenas se for admin
  return (
    <>
      {isAdmin && (
        // Conteúdo do painel admin
        <div>Painel Admin</div>
      )}
    </>
  );
}
*/

// 5. Para maior segurança, você também pode verificar no lado do servidor:

// Em um middleware ou função do servidor
/*
export function checkAdminAccess(email) {
  return email === process.env.ADMIN_EMAIL;
}
*/

// E usar variáveis de ambiente (.env.local):
// No arquivo .env.local (NÃO coloque em arquivos .js/.ts):
// ADMIN_EMAIL=seu-email@admin.com
