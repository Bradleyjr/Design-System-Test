import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: true
  },
  transpilePackages: [
    '@design-system/ui',
    '@design-system/api',
    '@design-system/utils'
  ]
};

export default withSentryConfig(nextConfig, { silent: true });
