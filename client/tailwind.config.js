/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marvelRed: '#E62429',
        marvelDark: '#121212',
        marvelCard: '#1E1E1E',
        marvelBorder: '#2E2E2E'
      }
    },
  },
  plugins: [],
}

