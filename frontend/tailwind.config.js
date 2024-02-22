/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Playfair Display', 'sans-serif'],
      sans2: ['Assistant', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
