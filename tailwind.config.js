const { LOGIN_BG } = require('./src/utils/constants')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg-banner': `url(${LOGIN_BG})`,
      },
      colors: {
        'brand-red': '#e50914',
      },
    },
  },
  plugins: [],
}