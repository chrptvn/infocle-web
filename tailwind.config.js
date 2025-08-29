/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0D9488', // Teal - Trust + Freshness
        secondary: '#F97316', // Orange - Energy + Creativity
        neutral: '#F3F4F6', // Light Gray - Clean Base
        'dark-neutral': '#1F2937', // Charcoal - Text/Contrast
      },
    },
  },
  plugins: [],
}