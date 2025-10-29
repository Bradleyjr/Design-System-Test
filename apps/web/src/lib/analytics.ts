'use client';

import posthog from 'posthog-js';
import { useEffect } from 'react';

export function useAnalytics() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || typeof window === 'undefined') return;
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://app.posthog.com'
    });
  }, []);
}
