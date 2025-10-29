import { hasPermission, type Role } from '@design-system/utils';
import { prisma } from '@design-system/db';

export async function assertOrgAccess(userId: string, organizationId: string, permission: string) {
  const membership = await prisma.membership.findFirst({
    where: { userId, organizationId },
    select: { role: true }
  });

  if (!membership || !hasPermission(membership.role as Role, permission)) {
    throw new Error('Unauthorized');
  }
}
