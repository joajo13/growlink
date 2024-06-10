/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "screen-without-navbar": "calc(100vh - 64px)",
      },
      maxHeight: {
        "screen-without-navbar": "calc(100vh - 64px)",
      },
      minHeight: {
        "screen-without-navbar": "calc(100vh - 64px)",
      },
      colors: {
        "app-green": "#519872",
        "app-dark-green": "#3b5249",
        "app-white": "#f4f4f9",
        "app-gray": "#f4f4f9",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          "app-green": "#519872",
          "app-dark-green": "#3b5249",
          "app-white": "#f4f4f9",
          primary: "#519872",
          green: "#519872",
        },
        dark: {
          "app-green": "#519872",
          "app-dark-green": "#fff",
          "app-white": "#f4f4f9",
          primary: "#519872",
        },
      }
    }),
  ],
};
