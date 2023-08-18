/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1F1A3A",
        mainDarkest: "#18142F",
        mainLightest: "#282248",
      },
      height: {
        sideH: "calc(100vh - 5rem)",
      },
    },
  },
  plugins: [],
};
