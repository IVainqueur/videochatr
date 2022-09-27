/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'purpleshade': {
        500: '#4800FE',
        700: '#3D00D8',
        100: '#E8E1FA'
      },
      'white': {
        default: '#ffffff',
        900: '#ffffff',
        800: '#EDEDED',
        500: '#8B8B8B',
        100: '#D9D9D9'
      }
    }
  },
  plugins: [],
}