import { prisma } from '@design-system/db';
import type { Session } from 'next-auth';

export interface Context {
  session: Session | null;
  prisma: typeof prisma;
  userId?: string;
}

export async function createContext(opts: { session: Session | null }): Promise<Context> {
  return {
    session: opts.session,
    prisma
  };
}
