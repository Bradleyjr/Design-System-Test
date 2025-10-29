import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';
import { Redis } from '@upstash/redis';
import { loadEnv } from '@design-system/utils';

const env = loadEnv({ ...process.env, SKIP_ENV_VALIDATION: process.env.SKIP_ENV_VALIDATION ?? 'true' });
const supabaseUrl = env.SUPABASE_URL || 'http://localhost:54321';
const supabaseKey = env.SUPABASE_ANON_KEY || 'public-anon-key';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL ?? 'http://localhost:6379',
  token: process.env.UPSTASH_REDIS_REST_TOKEN ?? 'token'
});
