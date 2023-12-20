/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      websiteColor: "#ffb633",
      textColor: "#FFFFFF",
    },
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {},
  },
  plugins: [],
};
