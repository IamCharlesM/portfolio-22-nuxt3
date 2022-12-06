// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", '@nuxt/content'],
  postcss: {
    plugins: {
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, height=device-height, initial-scale=1,",
      title: "Charles McGregory's portfolio",
      meta: [{ name: "description", content: "I like to dabble in a lot of software related things." }],
    },
  },
});
