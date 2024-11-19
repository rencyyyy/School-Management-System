import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        primary: "#ffd500",
        secondary: "#f7fff7",
        leftBg:"#973131",
        rightBg:"#edf2f4",
        darkRed: "#710000",
        dark: "#463f3a",
        whiteBg: "#fdfffc",
        lightGray: "#ced4da",
        darkGray: "#353535",
        aquaBlue: "#48cae4",
        pureBlack: "#000000",

        // CalendarlightBackgrounds
        lesson1st:"#ffba08",
        lesson2nd:"#faa307",
        lesson3rd:"#f48c06",
        lesson4th:"#e85d04",
        lesson5th:"#dc2f02",
        lesson6th:"#d00000",
        lesson7th:"#9d0208",
        lesson8th:"#370617",

        // ACTION BUTTONS
        viewButton: "#8cb369",
        deleteButton: "#d62828",

        // TABLE LIST 
        evenColor: "#fafafa",
        hoverColor: "#fff6cc",

        //TEACHER & STUDENTS VIEW COLORS
        darkOrange: "#cc444b",
        naturalOrange: "#da5552",
        yellowOrange: "#df7373",
        lightOrange: "#e39695",
        Orange: "#e4b1ab",

        //FORM
        errorColor: "#ef233c",
        createButton: "#e09f3e",
      },
    },
  },
  plugins: [],
};
export default config;
