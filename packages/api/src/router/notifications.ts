import { z } from 'zod';
import { router, protectedProcedure } from '../trpc';

export const notificationsRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.userId!;
    return ctx.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }),
  markRead: protectedProcedure
    .input(z.object({ notificationId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId!;
      const result = await ctx.prisma.notification.updateMany({
        where: { id: input.notificationId, userId },
        data: { readAt: new Date() }
      });
      if (result.count === 0) {
        throw new Error('Notification not found');
      }
      return { success: true };
    })
});
