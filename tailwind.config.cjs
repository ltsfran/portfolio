/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      minHeight: {
        viewport: 'calc(var(--vh, 1vh) * 100)'
      },
      keyframes: {
        logoSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        logoSpin: 'logoSpin infinite 20s linear'
      }
    }
  },
  plugins: []
}
