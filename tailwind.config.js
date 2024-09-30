/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        rotate: {
        '3': '3deg',
        '-3': '-3deg',
      },
    },
  },
  plugins: [],
}

