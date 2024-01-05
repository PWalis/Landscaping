/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Playfair Display', 'sans-serif'],
      // Fallbacks will be 'Nunito Sans', 'Century Gothic', and generic 'sans-serif'
      sans2: ['Nunito Sans', 'Century Gothic', 'sans-serif'],
  },
    extend: {
      borderWidth: {
        '30': '30px',
      },
    },
  },
  plugins: [],
};
