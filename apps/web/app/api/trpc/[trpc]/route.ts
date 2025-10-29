import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter, createContext } from '@design-system/api';
import { auth } from 'next-auth';
import { authConfig } from '@design-system/auth';

const handler = async (req: Request) => {
  const session = await auth(authConfig);
  return fetchRequestHandler({
    req,
    router: appRouter,
    endpoint: '/api/trpc',
    createContext: () => createContext({ session })
  });
};

export { handler as GET, handler as POST };
