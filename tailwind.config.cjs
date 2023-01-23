/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {},
      fontSize: {},
      colors: {},
      screens: {
        sm: "300px",
        md: "720px",
        lg: "1020px",
      },
      maxWidth: {
        main: "1375px",
      },
    },
  },
  plugins: [],
};
