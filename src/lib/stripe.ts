import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

// Client-side Stripe instance
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

// Donation types
export interface DonationItem {
  id: string;
  name: string;
  amount: number; // in cents
  description: string;
  category: 'course' | 'general' | 'mission';
}

// Predefined donation amounts
export const DONATION_AMOUNTS: DonationItem[] = [
  {
    id: 'donation-25',
    name: 'Contribuição Básica',
    amount: 2500, // R$ 25,00
    description: 'Ajude a manter nossos cursos acessíveis',
    category: 'general'
  },
  {
    id: 'donation-50',
    name: 'Contribuição Padrão',
    amount: 5000, // R$ 50,00
    description: 'Apoie o desenvolvimento de novos cursos',
    category: 'course'
  },
  {
    id: 'donation-100',
    name: 'Contribuição Especial',
    amount: 10000, // R$ 100,00
    description: 'Patrocine bolsas de estudo para estudantes',
    category: 'course'
  },
  {
    id: 'donation-250',
    name: 'Contribuição Premium',
    amount: 25000, // R$ 250,00
    description: 'Apoie missões internacionais',
    category: 'mission'
  },
  {
    id: 'donation-500',
    name: 'Contribuição Empresarial',
    amount: 50000, // R$ 500,00
    description: 'Parceria estratégica para expansão global',
    category: 'mission'
  }
];

// Course enrollment prices
export const COURSE_PRICES: Record<string, DonationItem> = {
  'capelao-internacional': {
    id: 'course-capelao',
    name: 'Curso de Capelão Internacional',
    amount: 49900, // R$ 499,00
    description: 'Formação completa em capelania internacional',
    category: 'course'
  },
  'diplomata-civil': {
    id: 'course-diplomata',
    name: 'Curso de Diplomata Civil',
    amount: 59900, // R$ 599,00
    description: 'Especialização em diplomacia civil',
    category: 'course'
  },
  'monitor-internacional': {
    id: 'course-monitor',
    name: 'Curso de Monitor Internacional',
    amount: 39900, // R$ 399,00
    description: 'Capacitação para monitoria internacional',
    category: 'course'
  },
  'lider-global': {
    id: 'course-lider',
    name: 'Curso de Líder Global',
    amount: 69900, // R$ 699,00
    description: 'Desenvolvimento de liderança global',
    category: 'course'
  },
  'especializacoes': {
    id: 'course-especializacoes',
    name: 'Especializações Diversas',
    amount: 29900, // R$ 299,00
    description: 'Cursos de especialização variados',
    category: 'course'
  }
};

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount / 100);
}
