import type { Config } from 'tailwindcss';
import shared from '@design-system/config/tailwind/tailwind.config';

export default {
  ...shared,
  content: ['../stories/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx,mdx}']
} satisfies Config;
