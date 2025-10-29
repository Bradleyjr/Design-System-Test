import type { Config } from 'tailwindcss';
import shared from '@design-system/config/tailwind/tailwind.config';

export default {
  ...shared,
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',
    '../../packages/ui/src/**/*.{ts,tsx,mdx}'
  ]
} satisfies Config;
