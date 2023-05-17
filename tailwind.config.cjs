/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jite',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:{
          "light":"#00B37E",
          "default": "#00875f",
          "dark":"#015F43",
        },
        red:{
          "default":"#F03847",
          "dark":"#00875f",
        },
        gray:{
          "700":"#29292E",
          "background":"#121214",
          "elements":"#202024",
          "divider":"#323238",
          "placeholder":"#7C7C8A",
          "label":"#8d8d99",
          "text":"#C4C4CC",
          "title":"#E1E1E6",
        },
        white:"#FFFFFF",
      }
    },
  },
  plugins: [],
}
