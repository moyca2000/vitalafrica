// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  target: 'static',
  buildAssetsDir : '',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})