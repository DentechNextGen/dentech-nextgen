import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          base: 'rgb(133, 196, 64)',
          100: 'rgb(216, 232, 212)',
          500: 'rgb(119, 176, 57)',
          600: 'rgb(53, 88, 52)',
          800: 'rgb(17, 39, 11)',
        },
        primary: {
          base: 'rgb(37, 53, 108)',
          100: 'rgb(242, 245, 255)',
          200: 'rgb(180, 197, 229)',
          800: 'rgb(29, 41, 79)',
          900: 'rgb(22, 31, 59)',
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
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            'blockquote p:first-of-type::before': {
              content: '""'
            },
            'blockquote p:last-of-type::after': {
              content: '""'
            },
            h1: {
              fontWeight: '700',
            },
            h2: {
              fontWeight: '600',
            },
            h3: {
              fontWeight: '600',
            },
            '--tw-prose-bullets': 'var(--primary-base)',
            '--tw-prose-counters': 'var(--primary-base)',
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
