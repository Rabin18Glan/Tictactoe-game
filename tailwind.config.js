/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        'my-margin':'100px',
        'my-width':'1300px',
        'my-height':'500px'
      }
    },
  },
  plugins: [require("daisyui")],
}

