/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#1F2937",
        accent: "#10B981",
        background: "#FFFFFF",
        "background-alt": "#F9FAFB",
      },
      maxWidth: {
        '7xl': '1280px',
      }
    },
  },
  plugins: [],
}

