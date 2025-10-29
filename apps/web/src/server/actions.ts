'use server';

import { auth } from 'next-auth';
import { authConfig } from '@design-system/auth';
import { appRouter } from '@design-system/api';
import { prisma } from '@design-system/db';
import { revalidatePath } from 'next/cache';

export async function createProjectAction(data: { organizationId: string; name: string; description?: string }) {
  const session = await auth(authConfig);
  if (!session) {
    throw new Error('Not authenticated');
  }
  const caller = appRouter.createCaller({ session, prisma });
  await caller.projects.create(data);
  revalidatePath('/');
}
