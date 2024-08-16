/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        primary : '#6851ff',
      secondary : "rgb(104, 81, 255)"
},
        backgroundImage: {
          'custom-gradient': 'linear-gradient(106.43deg, #522fd4, #6bdcff 95.12%)',
        },
      
    },
    
  },
  plugins: [],
}