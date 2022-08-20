/** @type {import('tailwindcss').Config} */
// import konstaConfig config
const konstaConfig = require("konsta/config")

// wrap config with konstaConfig config
module.exports = konstaConfig({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
})
