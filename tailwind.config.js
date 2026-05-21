/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        anchor: {
          ink: "#201d19",
          muted: "#70675d",
          clay: "#b46f52",
          moss: "#6f7a58",
          sand: "#f4efe7",
          cream: "#fbfaf7",
        },
      },
      boxShadow: {
        soft: "0 24px 70px rgba(32, 29, 25, 0.12)",
      },
    },
  },
  plugins: [],
};
