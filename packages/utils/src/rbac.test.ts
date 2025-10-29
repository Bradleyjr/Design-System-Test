import { describe, expect, it } from 'vitest';
import { hasPermission } from './rbac';

describe('RBAC', () => {
  it('allows owners to perform any action', () => {
    expect(hasPermission('OWNER', 'settings:update')).toBe(true);
  });

  it('prevents viewers from modifying projects', () => {
    expect(hasPermission('VIEWER', 'project:create')).toBe(false);
  });
});
