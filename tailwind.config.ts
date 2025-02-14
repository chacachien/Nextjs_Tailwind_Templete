import type { Config } from 'tailwindcss';

export default {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Using modern `hsl`
        bgBase: 'hsl(var(--color-bgBase) / <alpha-value>)',
        content: 'hsl(var(--color-content) / <alpha-value>)',
        bgMain: 'var(--color-bgMain)', // Changed to use CSS variable directly
      },
    },
  },
  plugins: [],
} satisfies Config;
