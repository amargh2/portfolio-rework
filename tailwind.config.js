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
        'hero': "url('../public/hero-image.png')"
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
