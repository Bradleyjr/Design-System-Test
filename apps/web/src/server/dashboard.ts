'use server';

import { auth } from 'next-auth';
import { authConfig } from '@design-system/auth';
import { appRouter } from '@design-system/api';
import { prisma } from '@design-system/db';
import { loadEnv } from '@design-system/utils';

loadEnv({ ...process.env, SKIP_ENV_VALIDATION: process.env.SKIP_ENV_VALIDATION ?? 'true' });

export async function getDashboardData(organizationId?: string) {
  const session = await auth(authConfig);
  if (!session) {
    return {
      memberships: [],
      activeOrgId: undefined,
      projects: [],
      audit: [],
      featureFlags: [],
      billing: null,
      onboarding: { completed: false, checklist: [] },
      notifications: [],
      analytics: []
    };
  }
  const caller = appRouter.createCaller({ session, prisma });
  const memberships = await caller.organizations.list();
  const activeOrgId = organizationId ?? memberships[0]?.organization.id;

  if (!activeOrgId) {
    return {
      memberships,
      activeOrgId,
      projects: [],
      audit: [],
      featureFlags: [],
      billing: null,
      onboarding: { completed: false, checklist: [] },
      notifications: [],
      analytics: []
    };
  }

  const [projects, audit, featureFlags, billing, onboarding, notifications, analytics] = await Promise.all([
    caller.projects.list({ organizationId: activeOrgId }),
    caller.audit.list({ organizationId: activeOrgId }),
    caller.featureFlags.list({ organizationId: activeOrgId }),
    caller.billing.summary({ organizationId: activeOrgId }),
    caller.organizations.getOnboarding({ organizationId: activeOrgId }),
    caller.notifications.list(),
    caller.analytics.overview({ organizationId: activeOrgId })
  ]);

  return {
    memberships,
    activeOrgId,
    projects,
    audit,
    featureFlags,
    billing,
    onboarding,
    notifications,
    analytics
  };
}
