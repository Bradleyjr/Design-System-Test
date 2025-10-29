import { stripe } from '@design-system/api';
import { prisma } from '@design-system/db';

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return new Response('Missing signature', { status: 400 });
  }
  const event = stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET ?? 'whsec_placeholder');

  if (event.type === 'customer.subscription.updated') {
    const subscription = event.data.object as { id: string; customer: string; items?: { data: Array<{ quantity: number }> } };
    await prisma.billing.updateMany({
      where: { stripeCustomer: subscription.customer },
      data: {
        subscriptionId: subscription.id,
        seats: subscription.items?.data[0]?.quantity ?? 1
      }
    });
  }

  return new Response('ok');
}
