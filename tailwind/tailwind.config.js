// eslint-disable-next-line
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        palevioletred: '#DB7093',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
