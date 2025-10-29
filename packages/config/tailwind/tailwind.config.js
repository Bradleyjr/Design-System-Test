/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../apps/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4f46e5',
          foreground: '#ffffff'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
