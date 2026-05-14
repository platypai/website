/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A192F',
          teal: '#00B4D8',
          cyan: '#90E0EF',
          pink: '#FF4D6D',
          mist: '#F8F9FA',
          gray: '#E9ECEF',
          darkBg: '#020C1B',
          panel: 'rgba(10, 25, 47, 0.85)'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 10px rgba(0, 180, 216, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 180, 216, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
