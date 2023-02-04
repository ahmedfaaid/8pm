/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      colors: {
        primary: {
          DEFAULT: '#1B1F24',
          100: '#D1D2D3',
          200: '#A4A5A7',
          300: '#76797C',
          400: '#494C50',
          500: '#1B1F24',
          600: '#16191D',
          700: '#101316',
          800: '#0B0C0E',
          900: '#050607'
        },
        'smoky-black': '#100C08'
      }
    }
  },
  plugins: []
};
