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
      appGreen: "#519872",
      appDarkGreen: "#3b5249",
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
        "app-light-green": "#f4f4f9",
        "app-red": "#bd2d2d",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
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
          "app-light-green": "#f4f4f9",
          "app-white": "#f4f4f9",
          primary: "#519872",
          green: "#519872",
        },
        dark: {
          "app-green": "#519872",
          "app-dark-green": "#fff",
          "app-light-green": "#f4f4f9",
          "app-white": "#f4f4f9",
          primary: "#519872",
        },
      }
    }),
  ],
};
