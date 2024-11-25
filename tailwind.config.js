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
          "300": "#e9e9e9",
          "400": "#dcdfe3",
          "500": "#d8d8d8",
          "500": "#616161",
        },
        deepgray:"#212121",
        dark:"#312522",
        darker:'#3B3E45',

        papayawhip: "#ffebd4",
        darkgray: "#b3b1b7",
        antiquewhite: "#e2dbc1",
        lightgreen: "#EAFFDC",
        mistyrose: "#ffdcdc",
      }
    },
  },
  plugins: [],
}

