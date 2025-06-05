'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DONATION_AMOUNTS, formatCurrency } from '@/lib/stripe';
import { useAuth } from '@/contexts/AuthContext';

export default function DoarPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { user } = useAuth();
  const router = useRouter();

  const handleDonation = async () => {
    if (!selectedAmount && !customAmount) return;
    
    setIsProcessing(true);
    
    try {
      const amount = selectedAmount || (parseFloat(customAmount) * 100);
      
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(amount),
          donor: donorInfo,
          userId: user?.id
        }),
      });

      const { clientSecret } = await response.json();
      
      // Redirect to Stripe Checkout
      router.push(`/checkout?payment_intent=${clientSecret}`);
      
    } catch (error) {
      console.error('Erro ao processar doação:', error);
      alert('Erro ao processar doação. Tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-green-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Apoie Nossa Missão
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Sua contribuição possibilita que mais pessoas tenham acesso à educação internacional de qualidade
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-blue-200">Alunos Beneficiados</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-200">Países Alcançados</div>
              </div>
              <div>
                <div className="text-3xl font-bold">R$ 100k+</div>
                <div className="text-blue-200">Em Bolsas Concedidas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Escolha o Valor da Sua Contribuição
              </h2>

              {/* Predefined Amounts */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {DONATION_AMOUNTS.map((donation) => (
                  <div
                    key={donation.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedAmount === donation.amount
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => {
                      setSelectedAmount(donation.amount);
                      setCustomAmount('');
                    }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {formatCurrency(donation.amount)}
                      </div>
                      <div className="font-semibold text-gray-800 mb-2">
                        {donation.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {donation.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ou insira um valor personalizado (R$):
                </label>
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="0,00"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                />
              </div>

              {/* Donor Information */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Deixe uma mensagem de apoio..."
                  value={donorInfo.message}
                  onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                />
              </div>

              {/* Payment Button */}
              <div className="text-center">
                <button
                  onClick={handleDonation}
                  disabled={isProcessing || (!selectedAmount && !customAmount) || !donorInfo.name || !donorInfo.email}
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processando...' : 'Contribuir Agora'}
                </button>
                
                <div className="flex justify-center items-center mt-4 space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Pagamento Seguro
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    SSL Criptografado
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Information */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Educação de Qualidade</h3>
                <p className="text-gray-600">Sua contribuição garante acesso a cursos internacionais de excelência</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Bolsas de Estudo</h3>
                <p className="text-gray-600">Apoie estudantes carentes com bolsas parciais e integrais</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expansão Global</h3>
                <p className="text-gray-600">Ajude-nos a alcançar novos países e culturas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
