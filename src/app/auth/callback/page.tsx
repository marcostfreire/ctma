'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const code = searchParams.get('code');
        
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          
          if (error) {
            console.error('Erro na confirmação:', error);
            router.push('/login?error=confirmation_failed');
            return;
          }
          
          // Sucesso - redirecionar para dashboard
          router.push('/dashboard?confirmed=true');
        } else {
          // Sem código, redirecionar para login
          router.push('/login');
        }
      } catch (error) {
        console.error('Erro no callback:', error);
        router.push('/login?error=callback_error');
      }
    };

    handleAuthCallback();
  }, [router, searchParams, supabase.auth]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ctma-azul-jeans mx-auto"></div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Confirmando sua conta...
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Aguarde enquanto processamos sua confirmação.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ctma-azul-jeans mx-auto"></div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Carregando...
            </h2>
          </div>
        </div>
      </div>
    }>
      <AuthCallbackContent />
    </Suspense>
  );
}
