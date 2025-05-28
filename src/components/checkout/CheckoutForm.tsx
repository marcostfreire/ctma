'use client';

import { useState, useEffect } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Pagamento realizado com sucesso!');
          break;
        case 'processing':
          setMessage('Seu pagamento está sendo processado.');
          break;
        case 'requires_payment_method':
          setMessage('Seu pagamento não foi realizado, tente novamente.');
          break;
        default:
          setMessage('Algo deu errado.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/pagamento-sucesso`,
      },
    });

    if (error) {
      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message || 'Erro no pagamento');
      } else {
        setMessage('Erro inesperado. Tente novamente.');
      }
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'tabs' as const,
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="w-full mt-6 bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        <span id="button-text">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processando...
            </div>
          ) : (
            'Confirmar Pagamento'
          )}
        </span>
      </button>

      {/* Show any error or success messages */}
      {message && (
        <div className={`mt-4 p-4 rounded-lg text-center ${
          message.includes('sucesso') 
            ? 'bg-green-100 text-green-800 border border-green-300' 
            : 'bg-red-100 text-red-800 border border-red-300'
        }`}>
          {message}
        </div>
      )}

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          Ao confirmar o pagamento, você concorda com nossos{' '}
          <a href="/termos-de-uso" className="text-blue-600 hover:underline" target="_blank">
            Termos de Uso
          </a>{' '}
          e{' '}
          <a href="/politica-de-privacidade" className="text-blue-600 hover:underline" target="_blank">
            Política de Privacidade
          </a>
        </p>
      </div>
    </form>
  );
}
