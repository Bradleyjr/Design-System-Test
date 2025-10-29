import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';
import { assertOrgAccess } from '@design-system/auth';

export const auditRouter = router({
  list: protectedProcedure
    .input(z.object({ organizationId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.userId!;
      await assertOrgAccess(userId, input.organizationId, 'project:read');
      return ctx.prisma.auditLog.findMany({
        where: { project: { organizationId: input.organizationId } },
        orderBy: { createdAt: 'desc' },
        take: 20
      });
    })
});
