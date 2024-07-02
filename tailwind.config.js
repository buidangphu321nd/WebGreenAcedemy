/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      boxShadow: {
        custom: "0px 39px 100px 0px #193E6C1F",
      },
    },
  },
  plugins: [],
};
