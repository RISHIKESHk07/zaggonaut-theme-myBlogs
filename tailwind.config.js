/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), plugin(function({ addVariant }) {
    addVariant('dark', '&:where(.dark, .dark *)'); // your custom logic
  })],
}

