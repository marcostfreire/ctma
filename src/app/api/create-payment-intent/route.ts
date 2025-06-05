import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe-server';

export async function POST(req: NextRequest) {
  try {
    // Check if Stripe is properly configured
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_placeholder_for_build') {
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 503 }
      );
    }

    const { amount, donor, userId } = await req.json();

    // Validate amount
    if (!amount || amount < 100) { // Minimum R$ 1.00
      return NextResponse.json(
        { error: 'Valor mínimo de doação é R$ 1,00' },
        { status: 400 }
      );
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency: 'usd',
      metadata: {
        type: 'donation',
        donor_name: donor.name,
        donor_email: donor.email,
        donor_message: donor.message || '',
        user_id: userId || 'anonymous',
      },
      description: `Doação CTMA - ${donor.name}`,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });

  } catch (error) {
    console.error('Payment intent creation error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
