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
    },
  },
  darkMode: "class",
  plugins: [],
};
