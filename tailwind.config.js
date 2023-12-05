/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      colors: {
        gray1: '#F2F2F2',
        gray2: '#838383',
        primary: '#FF8F52',
      },
    },
  },
};
