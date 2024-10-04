/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx}'],
  theme: {
    extend: {
      colors: {
        darkGreen: '#8BC969',
        midGreen: '#BDE0A9',
        lightGreen: '#D8EDCD',
        darkBlue: '#108276',
        midBlue: '#6BB3AB',
        lightBlue: '#CAE3E1',
        darkGrey: '#2e2e2e',
      },
      fontFamily: {
        headingAont: ['Geometos', 'sans-ser'],
      },
    },
  },
  plugins: [],
};
