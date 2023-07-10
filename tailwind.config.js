/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1C1D2E',
        'off-white': "#D9D9D9",
        'ocean-blue': "#80D3E5",
        'bright-yellow': "#DFD04A"
      },
      width: {
        '120': '30rem'
      },
      height: {
        '120': '30rem'
      }
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      source: ["var(--font-source)"],
      playfair: ["var(--font-playfair)"],
    }
  },
  plugins: [],
}
