/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        brand: {
          black: '#080808',
          card: '#111111',
          cardHover: '#161616',
          border: '#222222',
          red: '#E50920',
          redDark: '#8A0512',
          crimsonBg: '#7A0915',
          grayMuted: '#8E8E93',
          grayText: '#A1A1AA',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Inter"', 'sans-serif']
      },
      letterSpacing: {
        widestPlus: '0.25em',
        mega: '0.08em'
      }
    },
  },
  plugins: [],
}
