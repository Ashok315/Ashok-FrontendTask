/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
        "open-sans": "'Open Sans'",
        poppins: "Poppins",
        "noto-sans": "'Noto Sans'",
      },
      colors:{
        orange:"#FFAD00",
        "submenu-color":"#A8A8A8",
        "light-hover":"#FFFAEF",
        "light-green":"#40BE88",
        lightgray: {
          "100": "#e6e6e6",
          "200": "#e5e5e5",
          "300": "#d8d8d8",
        },
        dark:"#312522"
      }
    },
  },
  plugins: [],
}

