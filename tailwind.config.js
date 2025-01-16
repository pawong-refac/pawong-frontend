/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_gray: "var(--dark_gray)",
        gray: "var(--gray)",
        light_gray: "#e3e3e3",
        pastel_gray: "var(--pastel_gray)",
        light_blue: "var(--light_blue)",
        pastel_blue: "var(--pastel_blue)",
        black: "var(--black)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
