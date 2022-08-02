/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Noto Sans", "sans-serif"],
      },
      colors: {
        primary: "#f5f6fa",
        secondary: "#fa983a",
      },
    },
  },
  plugins: [],
};
