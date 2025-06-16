/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./public/index.html",
    "./public/**/*.html", 
  ],
  theme: {
    extend: {
      colors: {
        'cervant': "#ffbe06",
        'clau': "#549dfd",
      }
    },
  }
}