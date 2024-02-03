/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2E0014",
        "primary-2": "#442220",
        secondary: "#B5DEAD",
        "secondary-2": "#809848",
        "secondary-3": "#B0CA87",
      },
    },
  },
  plugins: [],
}
