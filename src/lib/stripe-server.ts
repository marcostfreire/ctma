import Stripe from 'stripe';

// Use a default placeholder key during build if not provided
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_for_build';

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-04-30.basil',
});
