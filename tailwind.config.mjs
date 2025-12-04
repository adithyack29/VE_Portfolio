/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      colors: {
        background: "#05060a",
        surface: "#0b0d16",
        accent: {
          DEFAULT: "#f97316",
          soft: "#f973161a"
        }
      },
      boxShadow: {
        "soft-glow": "0 0 60px rgba(249,115,22,0.32)"
      }
    }
  },
  plugins: []
};

export default config;


