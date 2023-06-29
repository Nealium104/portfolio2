/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'navy': '#1C1D2E',
      'off-white': "#D9D9D9"
    },
    extend: {

    },
    fontFamily: {
      montserrat: ['montserrat'],
      source: ['source code pro'],
      playfair: ['playfair display'],
    }
  },
  plugins: [],
}
