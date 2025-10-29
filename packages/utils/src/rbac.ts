export const roles = ['OWNER', 'ADMIN', 'MEMBER', 'BILLING', 'VIEWER'] as const;

export type Role = (typeof roles)[number];

export const permissions: Record<Role, string[]> = {
  OWNER: ['*'],
  ADMIN: ['project:create', 'project:update', 'billing:manage', 'settings:update'],
  MEMBER: ['project:create', 'project:update'],
  BILLING: ['billing:manage'],
  VIEWER: ['project:read']
};

export function hasPermission(role: Role, permission: string) {
  const allowed = permissions[role] ?? [];
  return allowed.includes('*') || allowed.includes(permission);
}
