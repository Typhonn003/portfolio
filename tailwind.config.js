import { blue, blueDark } from "@radix-ui/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          ...blue,
        },
        dark: {
          ...blueDark,
        },
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
        },
        blinking: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        typeWriter:
          "typing 2s steps(25), blinking 0.5s infinite step-end alternate",
      },
      screens: {
        xs: "520px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
