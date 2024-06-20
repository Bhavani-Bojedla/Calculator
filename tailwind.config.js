/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing:{
        85:'22rem',
        98:'29rem',
        100:'35rem'

      },
      screens: {
        'phone': '10px'},
      fontSize: {
        xss: ['0.5rem', { lineHeight: '1rem' }],
        '1xl': ['2rem', { lineHeight: '0.5rem' }]}
    },
    backgroundImage: {
      'hero': "url('img4.jpeg')",
    },
  },
  plugins: [],
}

