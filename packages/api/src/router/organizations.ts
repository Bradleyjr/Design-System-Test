import { z } from 'zod';
import { protectedProcedure, router } from '../trpc';
import { organizationSchema, onboardingSchema } from '@design-system/utils';

export const organizationsRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.userId!;
    const memberships = await ctx.prisma.membership.findMany({
      where: { userId },
      include: { organization: true }
    });
    return memberships.map((membership) => ({
      role: membership.role,
      organization: organizationSchema.parse(membership.organization)
    }));
  }),
  getOnboarding: protectedProcedure
    .input(z.object({ organizationId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const onboarding = await ctx.prisma.onboardingState.findUnique({
        where: { organizationId: input.organizationId }
      });
      if (!onboarding) {
        return onboardingSchema.parse({ completed: false, checklist: [] });
      }
      return onboardingSchema.parse({
        completed: onboarding.completed,
        checklist: onboarding.checklist as never
      });
    })
});
