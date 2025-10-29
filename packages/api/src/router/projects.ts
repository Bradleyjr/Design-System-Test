import { z } from 'zod';
import { protectedProcedure, router } from '../trpc';
import { assertOrgAccess } from '@design-system/auth';
import { projectSchema } from '@design-system/utils';

export const projectsRouter = router({
  list: protectedProcedure
    .input(z.object({ organizationId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const userId = ctx.userId!;
      await assertOrgAccess(userId, input.organizationId, 'project:read');
      const projects = await ctx.prisma.project.findMany({
        where: { organizationId: input.organizationId },
        orderBy: { createdAt: 'desc' }
      });
      return projects.map((project) => projectSchema.parse({ ...project, createdAt: project.createdAt, updatedAt: project.updatedAt }));
    }),
  create: protectedProcedure
    .input(
      z.object({
        organizationId: z.string().uuid(),
        name: z.string().min(3),
        description: z.string().optional()
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId!;
      await assertOrgAccess(userId, input.organizationId, 'project:create');
      const project = await ctx.prisma.project.create({
        data: {
          organizationId: input.organizationId,
          name: input.name,
          description: input.description
        }
      });
      await ctx.prisma.auditLog.create({
        data: {
          actorId: userId,
          projectId: project.id,
          action: 'project.created'
        }
      });
      return projectSchema.parse(project);
    })
});
