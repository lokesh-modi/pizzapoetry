/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0a0a0a",
        "charcoal-light": "#1a1a1a",
        cream: "#fef3c7",
        "burnt-orange": "#d97706",
        "basil-green": "#16a34a",
      },
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        128: "32rem",
      },
      animation: {
        slowspin: "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
}
