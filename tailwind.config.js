/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99", // Default accent color
          hover: "#08e187", // Hover state for accent
        },
      },
      fontFamily: {
        primary: "var(--font-jetbrainsMono)", // Use the CSS variable
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};

