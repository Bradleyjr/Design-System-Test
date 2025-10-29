# Design System Monorepo

A Turborepo-powered SaaS starter that demonstrates a shared design system, full-stack tRPC APIs, Prisma/Postgres database, and supporting developer experience tooling.

## Apps

- `apps/web`: Next.js 15 app router experience with auth onboarding, organizations, billing, RBAC dashboards, analytics, feature flags, and notifications.
- `apps/docs`: Living documentation site showcasing shared UI components.
- `apps/storybook`: Visual regression and accessibility playground backed by Storybook 8.

## Packages

- `@design-system/ui`: Tailwind + shadcn-inspired component primitives.
- `@design-system/api`: tRPC routers that orchestrate projects, billing, analytics, and more.
- `@design-system/auth`: Auth.js configuration, organization access helpers, and RBAC enforcement.
- `@design-system/db`: Prisma schema, migrations, Supabase client, and Redis cache wiring.
- `@design-system/emails`: Resend email utilities with React email templates.
- `@design-system/utils`: Zod validators, environment parsing, and RBAC helpers.

## Tooling

- `turbo` orchestrates builds, linting, type-checking, and testing.
- `vitest` for unit tests, `playwright` for end-to-end tests, and `storybook` for component QA.
- Generators in `tools/` accelerate feature scaffolding.

## Getting Started

```bash
pnpm install
pnpm dlx prisma generate --schema packages/db/prisma/schema.prisma
pnpm dev
```

Run database locally via docker compose:

```bash
docker compose up -d
```
