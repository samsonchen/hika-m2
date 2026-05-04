/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf8f0',
          100: '#faefd9',
          200: '#f4dcb0',
          300: '#ecc37e',
          400: '#e2a34a',
          500: '#d98a28',
          600: '#c8731e',
          700: '#a6581b',
          800: '#87461e',
          900: '#6e3a1c',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans TC',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
