/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "#FFFFFF",
        "background-secondary": "#F4F4F4",
        "yellow-primary": "#F4B840",
        "black-1": "#000000",
        "black-2": "#181818",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      container: {
        padding: "108px 142px 90px 98px",
        center: true,
      },
      screens: {
        sm: "390px",
        xs: "1366px",
      },
      boxShadow: {
        card: "0px 0px 27px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
