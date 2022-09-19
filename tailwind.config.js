/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'cloud' : "url('./cloud7.png')",
        'sky': "url('../public/sky.png')",
        'hero': "url('../public/hero-image.png')",
        'cirrus': "url('../public/background-2.jpg')"
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography')
  ],
}
