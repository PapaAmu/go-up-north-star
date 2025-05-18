/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.jsx",
    "./Elements/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      colors: {
        primary: '#1D4ED8', // Tailwind's blue-700 or change to your preferred hex
      },
    },
  },
  plugins: [],
}
