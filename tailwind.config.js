/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['"Exo 2"', "sans-serif"],
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        red: {
          100: "#fe3a26",
          200: "#ca1e1c",
          300: "#f53f3f",
          400: "#980e02",
        },
        yellow: {
          100: "#8E983F",
          300: "#EDFF66",
        },
        darkred: "#6D0000FF",
      },
    },
  },
  plugins: [],
};
