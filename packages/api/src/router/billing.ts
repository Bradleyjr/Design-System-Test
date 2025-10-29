import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';
import { assertOrgAccess } from '@design-system/auth';
import { ensureCustomer } from '../stripe';

export const billingRouter = router({
  summary: protectedProcedure
    .input(z.object({ organizationId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.userId!;
      await assertOrgAccess(userId, input.organizationId, 'billing:manage');
      const billing = await ctx.prisma.billing.findUnique({
        where: { organizationId: input.organizationId }
      });
      return (
        billing ?? {
          organizationId: input.organizationId,
          stripeCustomer: '',
          plan: 'starter',
          seats: 1,
          subscriptionId: null
        }
      );
    }),
  updatePlan: protectedProcedure
    .input(
      z.object({
        organizationId: z.string().uuid(),
        plan: z.enum(['starter', 'growth', 'enterprise'])
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId!;
      await assertOrgAccess(userId, input.organizationId, 'billing:manage');
      const organization = await ctx.prisma.organization.findUnique({
        where: { id: input.organizationId },
        select: { slug: true }
      });
      const customer = await ensureCustomer(`${organization?.slug ?? 'org'}@example.com`);
      return ctx.prisma.billing.upsert({
        where: { organizationId: input.organizationId },
        update: { plan: input.plan, stripeCustomer: customer.id },
        create: {
          organizationId: input.organizationId,
          plan: input.plan,
          stripeCustomer: customer.id
        }
      });
    })
});
