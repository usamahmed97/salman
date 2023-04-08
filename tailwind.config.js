/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        themeOrange: "#F26101",
        deepBlue: "#0B0B45",
        mattBlack: "#16161D",
        glass: {
          DEFAULT: "rgba(255, 255, 230, 0.15)",
          blur: "backdrop-filter backdrop-blur-sm",
          opacity: "backdrop-opacity-75",
        },
      },
    },
  },
  plugins: [],
};
