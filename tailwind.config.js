/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        verdeva: '#4E741F',
        verdeclaro: '#B4CC93',
        blancova: '#ECEDDF',
      },
    },
  },
  plugins: [],
}

