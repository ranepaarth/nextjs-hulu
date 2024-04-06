import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.8rem',
        md: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      screens: {
        '3xl': '2000px',
        '5xl': '4000px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
