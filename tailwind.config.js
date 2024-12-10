/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./**/runtimeapp/templates/**/*.html"
    './**/templates/*.html',
    // './**/*.js', 
    './**/**/*.{html,js}'
  ],
  theme: {
      // colors: {
      //   'green' : '#306844'
      // },
    extend: {

      spacing: {
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '48': '24rem'
      },
    },
  },
  plugins: [
    // addIconSelectors(['logos', 'logos--javascript']),
],
  darkMode: 'selector',

}

