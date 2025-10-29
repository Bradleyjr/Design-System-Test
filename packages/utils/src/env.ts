import { z } from 'zod';

type EnvLike = Record<string, string | undefined>;

const baseSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(16),
  STRIPE_SECRET_KEY: z.string().min(10),
  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string().min(10),
  RESEND_API_KEY: z.string().min(5).optional().or(z.literal('')),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  SENTRY_DSN: z.string().optional()
});

export type Env = z.infer<typeof baseSchema>;

export function loadEnv(env: EnvLike = process.env): Env {
  if (env.SKIP_ENV_VALIDATION === 'true') {
    return baseSchema.partial().parse(env) as Env;
  }

  const parsed = baseSchema.safeParse(env);
  if (!parsed.success) {
    console.error('Invalid environment variables', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }
  return parsed.data;
}
