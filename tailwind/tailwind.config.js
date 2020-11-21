// eslint-disable-next-line
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./**/*.tsx'],
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
  plugins: [require('@tailwindcss/forms')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
