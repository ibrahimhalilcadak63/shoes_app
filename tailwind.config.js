/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // yeni renkler
      colors:{
        blue: "#4A69E2",
        yellow: "#FFA52F",
        white: "#FFFFFF",
        fawhite: "#FAFAFA"

        
      },
      gray: {
        DEFAULT: "#E7E7E3",
        main: "#70706E",
        dark: "#232321",
      },

      // yeni fontlar
      fontFamily: {
        rubik: ["rubik", "sans-serif"],
        open: ["open", "sans-serif"],
      },
    },
  },
  plugins: [],
}