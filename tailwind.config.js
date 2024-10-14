/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16a870", // Màu primary
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"], // Font serif
        mono: ["Menlo", "Monaco", "Courier New", "monospace"], // Font mono
        custom: ["Poppins", "sans-serif"], // Font Poppins
        lato: ["Lato", "sans-serif"], // Font Lato
      },
    },
  },
  plugins: [],
};
