/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom: "0px 39px 100px 0px #193E6C1F",
=======
      fontFamily:{
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
>>>>>>> VanPhuc
      },
    },
  },
  plugins: [],
};
