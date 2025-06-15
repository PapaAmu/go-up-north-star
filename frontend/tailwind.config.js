/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './App.jsx',
    './Elements/**/*.{js,jsx,ts,tsx}',
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
        primary: '#FFBF00', // Tailwind's blue-700 or change to your preferred hex
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
