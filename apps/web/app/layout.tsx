import type { Metadata } from 'next';
import './globals.css';
import { ReactQueryProvider } from '../src/lib/react-query-provider';
import { TrpcProvider } from '../src/lib/trpc-provider';
import { Toaster } from '@design-system/ui';
import { AnalyticsProvider } from '../src/components/analytics-provider';

export const metadata: Metadata = {
  title: 'Design System Cloud',
  description: 'Multi-tenant SaaS starter with organizations, billing, and analytics.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider>
          <ReactQueryProvider>
            <TrpcProvider>
              {children}
              <Toaster />
            </TrpcProvider>
          </ReactQueryProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
