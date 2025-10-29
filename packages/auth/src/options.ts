import type { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import type { Env } from '@design-system/utils';
import { loadEnv } from '@design-system/utils';
import { prisma } from '@design-system/db';

const env: Env = loadEnv({ ...process.env, SKIP_ENV_VALIDATION: process.env.SKIP_ENV_VALIDATION ?? 'true' });

export const authConfig: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID ?? 'stub-id',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? 'stub-secret'
    })
  ],
  callbacks: {
    session: async ({ session, user }) => {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    }
  },
  events: {
    async createUser(message) {
      await prisma.auditLog.create({
        data: {
          actorId: message.user.id,
          action: 'user.created'
        }
      });
    }
  },
  secret: env.NEXTAUTH_SECRET
};
