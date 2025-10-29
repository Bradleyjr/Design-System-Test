'use client';

import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@design-system/api';

export const trpc = createTRPCReact<AppRouter>();
