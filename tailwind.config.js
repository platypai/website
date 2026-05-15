/** @type {import('tailwindcss').Config} */
// Official Platypai brand palette — sourced from Platypai_Brand_Guide_v1.pdf
// and Platypai-Final-palette.pdf in /From Miniscule.
//
// Primary:    Prussian Blue, Turquoise, Amaranth, Mustard, Pink (light)
// Secondary:  Electric Blue, Byzantium, Black Coffee, Goldenrod, Shadow Blue
// We deliberately do NOT use pure black; brand-coffee (#2F222C) replaces it.
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary brand tokens (keep existing names so we don't refactor every reference)
          navy: '#0F3559',       // Prussian Blue (was #0A192F)
          teal: '#4ECDC4',       // Turquoise (was #00B4D8)
          cyan: '#83F7EF',       // Electric Blue (was #90E0EF)
          pink: '#E01C4A',       // Amaranth (was #FF4D6D)

          // Light backgrounds
          mist: '#F8F9FA',
          gray: '#E9ECEF',

          // Secondary brand tokens
          mustard: '#FFD657',
          gold: '#E0A800',
          byzantium: '#6B3868',
          shadow: '#7D8CA3',
          coffee: '#2F222C',     // Use this instead of pure black
          lightpink: '#F1BFD9',  // Soft pink from primary palette

          // Reserved
          darkBg: '#0F3559',     // Map to Prussian Blue (was #020C1B)
          panel: 'rgba(15, 53, 89, 0.85)',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Comfortaa', 'Poppins', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 10px rgba(78, 205, 196, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(78, 205, 196, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
