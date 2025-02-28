/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff8eb',
          100: '#ffecc6',
          200: '#ffd685',
          300: '#ffba45',
          400: '#ff9d1b',
          500: '#ff7b00',
          600: '#e45e00',
          700: '#b94104',
          800: '#96330c',
          900: '#7c2b0e',
          950: '#461404',
        },
      },
    },
  },
  plugins: [],
};