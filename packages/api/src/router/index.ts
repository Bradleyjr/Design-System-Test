import { router } from '../trpc';
import { projectsRouter } from './projects';
import { organizationsRouter } from './organizations';
import { billingRouter } from './billing';
import { featureFlagsRouter } from './feature-flags';
import { notificationsRouter } from './notifications';
import { auditRouter } from './audit';
import { analyticsRouter } from './analytics';

export const appRouter = router({
  projects: projectsRouter,
  organizations: organizationsRouter,
  billing: billingRouter,
  featureFlags: featureFlagsRouter,
  notifications: notificationsRouter,
  audit: auditRouter,
  analytics: analyticsRouter
});

export type AppRouter = typeof appRouter;
