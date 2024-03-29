/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          750: '#333338',
          810: 'rgba(39, 39, 42, 0.6)',
        },
      }

    },
  },
  plugins: [],
}

