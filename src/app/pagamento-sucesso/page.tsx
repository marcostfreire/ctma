'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'success' | 'error'>('loading');
  useEffect(() => {
    const redirectStatus = searchParams.get('redirect_status');

    if (redirectStatus === 'succeeded') {
      setPaymentStatus('success');
    } else {
      setPaymentStatus('error');
    }
  }, [searchParams]);

  if (paymentStatus === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verificando status do pagamento...</p>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Pagamento Não Realizado</h1>
          <p className="text-gray-600 mb-8">
            Houve um problema com seu pagamento. Tente novamente ou entre em contato conosco.
          </p>
          <div className="space-y-4">
            <Link 
              href="/doar"
              className="block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Tentar Novamente
            </Link>
            <Link 
              href="/contato"
              className="block text-blue-600 hover:text-blue-700 font-medium"
            >
              Entrar em Contato
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-8">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Pagamento Realizado com Sucesso!
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Muito obrigado pela sua generosa contribuição! Sua doação fará uma diferença real na vida de muitas pessoas.
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">O que acontece agora?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Confirmação por E-mail</h3>
                <p className="text-gray-600 text-sm">
                  Você receberá um e-mail de confirmação com o recibo da sua doação em alguns minutos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Certificado de Doação</h3>
                <p className="text-gray-600 text-sm">
                  Um certificado de doação será enviado para fins de declaração de imposto de renda.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Relatórios de Impacto</h3>
                <p className="text-gray-600 text-sm">
                  Você receberá relatórios periódicos sobre como sua contribuição está sendo utilizada.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Comunidade CTMA</h3>
                <p className="text-gray-600 text-sm">
                  Agora você faz parte da nossa comunidade de apoiadores e receberá atualizações exclusivas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all"
          >
            Voltar ao Início
          </Link>
          
          <div className="flex justify-center space-x-6 text-sm">
            <Link 
              href="/cursos"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Conhecer Nossos Cursos
            </Link>
            <Link 
              href="/sobre-nos"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sobre Nossa Missão
            </Link>
            <Link 
              href="/contato"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Entrar em Contato
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Compartilhe Nossa Missão
          </h3>
          <p className="text-gray-600 mb-4">
            Ajude-nos a alcançar mais pessoas compartilhando nossa missão nas redes sociais.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Compartilhar no Facebook
            </button>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-600 transition-colors">
              Compartilhar no Twitter
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
              Compartilhar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}
