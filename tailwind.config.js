/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: { 
          "primary": "#EED023"
        },
        purple: {
          "modal": "#0F0122",
          "oscure": "#070010"
        }
      }
    },
  },
  plugins: [],
}

