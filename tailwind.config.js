/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9fbcaa",

          secondary: "#979E99",

          accent: "#4d4423",

          neutral: "#E8E1D8",

          "base-100": "#513d36",

          info: "#7E4232",

          success: "#646e56",

          warning: "#c4c0b4",

          error: "#9fbcaa",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
