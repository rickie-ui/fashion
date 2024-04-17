/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E6C744",
        secondary: "#F4F6F5",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
