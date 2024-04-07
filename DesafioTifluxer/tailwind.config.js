/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // transparent: 'transparent',
      'text-base': '#afb6c2',
      'text-title': '#d4ccb6',
      'background': '#191816',
      'form-background': '#24221f',
      'primary-color': '#ffc632',
    },
  },
  plugins: [],
}