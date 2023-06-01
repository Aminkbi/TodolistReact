/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'Calibri', 'sans-serif'],
      
    },
    
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

