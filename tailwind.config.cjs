/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        'light-black': '#101010',
        grey: '#f1f1f1',
        'light-grey': '#fafafa',
        orange: '#d87d4a',
        'light-orange': '#fbaf85',
      },
    },
  },
  plugins: [],
};
