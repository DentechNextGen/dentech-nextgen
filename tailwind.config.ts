import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          base: 'rgb(var(--accent-base))',
          100: 'rgb(var(--accent-100))',
          500: 'rgb(var(--accent-500))',
          600: 'rgb(var(--accent-600))',
          800: 'rgb(var(--accent-800))',
        },
        primary: {
          base: 'rgb(var(--primary-base))',
          100: 'rgb(var(--primary-100))',
          200: 'rgb(var(--primary-200))',
          800: 'rgb(var(--primary-800))',
          900: 'rgb(var(--primary-900))',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        display: ["var(--font-poppins)"],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
