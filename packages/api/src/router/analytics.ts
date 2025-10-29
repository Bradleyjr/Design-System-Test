import { router, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const analyticsRouter = router({
  overview: protectedProcedure
    .input(z.object({ organizationId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const events = await ctx.prisma.analyticsEvent.groupBy({
        by: ['name'],
        where: { organizationId: input.organizationId },
        _count: { name: true }
      });
      return events.map((event) => ({ label: event.name, value: event._count.name }));
    })
});
