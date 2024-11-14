/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width:{
        custom: '550px'
      },
      height:{
        custom: '500px'
      }
    },
  },
  plugins: [],
}

