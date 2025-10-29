import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';
import { assertOrgAccess } from '@design-system/auth';

export const featureFlagsRouter = router({
  list: protectedProcedure
    .input(z.object({ organizationId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.userId!;
      await assertOrgAccess(userId, input.organizationId, 'settings:update');
      return ctx.prisma.featureFlag.findMany({
        where: { organizationId: input.organizationId }
      });
    }),
  toggle: protectedProcedure
    .input(z.object({ organizationId: z.string().uuid(), key: z.string(), enabled: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId!;
      await assertOrgAccess(userId, input.organizationId, 'settings:update');
      return ctx.prisma.featureFlag.upsert({
        where: { organizationId_key: { organizationId: input.organizationId, key: input.key } },
        update: { enabled: input.enabled },
        create: { organizationId: input.organizationId, key: input.key, enabled: input.enabled }
      });
    })
});
