import { z } from 'zod';

export const idSchema = z.string().uuid('Expected a valid UUID');

export const organizationSchema = z.object({
  id: idSchema,
  name: z.string().min(2),
  slug: z.string().regex(/[a-z0-9-]+/),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const projectSchema = z.object({
  id: idSchema,
  name: z.string().min(3),
  description: z.string().optional(),
  organizationId: idSchema,
  createdAt: z.date(),
  updatedAt: z.date()
});

export const featureFlagSchema = z.object({
  key: z.string().min(2),
  enabled: z.boolean(),
  description: z.string().optional()
});

export const onboardingSchema = z.object({
  completed: z.boolean(),
  checklist: z.array(z.object({
    id: z.string(),
    title: z.string(),
    completed: z.boolean()
  }))
});

export type Organization = z.infer<typeof organizationSchema>;
export type Project = z.infer<typeof projectSchema>;
export type FeatureFlag = z.infer<typeof featureFlagSchema>;
export type Onboarding = z.infer<typeof onboardingSchema>;
