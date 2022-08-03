/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily:{
        sans: "Roboto, sans-serif"
      },
      colors:{
        red:{
          600: "#FF2625"
        }
      }
    },
    
  },
  plugins: [],
};
