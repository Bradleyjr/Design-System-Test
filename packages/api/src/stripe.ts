import Stripe from 'stripe';
import { loadEnv } from '@design-system/utils';

const env = loadEnv({ ...process.env, SKIP_ENV_VALIDATION: process.env.SKIP_ENV_VALIDATION ?? 'true' });
const secret = env.STRIPE_SECRET_KEY || 'sk_test_placeholder';

export const stripe = new Stripe(secret, {
  apiVersion: '2024-06-20'
});

export async function ensureCustomer(email: string) {
  const existing = await stripe.customers.list({ email, limit: 1 });
  if (existing.data[0]) {
    return existing.data[0];
  }
  return stripe.customers.create({ email });
}
