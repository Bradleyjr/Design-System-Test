'use client';

import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import { useMemo } from 'react';
import { trpc } from './trpc';
import { useQueryClient } from '@tanstack/react-query';

export function TrpcProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const client = useMemo(
    () =>
      trpc.createClient({
        transformer: superjson,
        links: [
          httpBatchLink({
            url: '/api/trpc'
          })
        ]
      }),
    []
  );

  return (
    <trpc.Provider client={client} queryClient={queryClient} queryClientConfig={{}}>
      {children}
    </trpc.Provider>
  );
}
