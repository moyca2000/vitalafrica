// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  router: {
    base: '/vitalafrica/',  // Cambia por el nombre de tu repositorio en GitHub
  },
  build: {
    filenames: {
      img: '[path][name].[ext]',
    },
  },
  generate:{
    nojekyll: true, //not working on this version
    fallback: '404.html',
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})