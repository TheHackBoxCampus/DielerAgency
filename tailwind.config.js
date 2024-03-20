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
          "primary": "#EED023",
          "secondary": "#FFC107"
        },
        purple: {
          "modal": "#0F0122",
          "oscure": "#070010"
        },
      },
      screens: {
        "xs": "350px",
        "mdx": "1149px",
        "3xl": "1730px"
      }
    },
  },
  plugins: [],
}

