/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './resources/**/*.{js,jsx,ts,tsx}',
    './node_modules/@headlessui/react/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
        surface: {
          DEFAULT: '#0a0a0a',
          lighter: '#141414',
          darker: '#050505',
        },
        gold: {
          500: '#d4af37',
        },
        'etalase-red': '#460008',
        text: {
          main: '#e5e5e5',
          muted: '#737373',
        },
        border: {
          main: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
