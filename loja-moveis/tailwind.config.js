/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B88e2f",
        primaryDark:"#a67528",
        font: "#333333",
        redAccents: "#E97171", 
        greenAccents: "#2ec1ac", 
        lightBg: "#F4F5F7", 
        mediumBg: "#F9F1E7", 
        darkBg: "#fff3e3",
        grayLight: "#D9D9D9",
        grayOne: "#9F9F9F", 
        grayTwo: "#666666", 
        grayThree: "#898989", 
        grayFour: "#B0B0B0" 
      },
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif'],
        poppins:['Poppins', 'sans-serif']
      }
    },
  },
        
   plugins: [],
}

