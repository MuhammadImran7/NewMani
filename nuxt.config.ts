// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/tailwind.css',  // Include your Tailwind CSS file
    'swiper/swiper-bundle.css',  
    'leaflet/dist/leaflet.css' ,
    '@/assets/css/main.css',    // Include Swiper CSS
    '~/assets/styles/tailwind.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/variables.scss";`,
        },
      },
    },
  },
});
// import { defineNuxtConfig } from 'nuxt3';

// export default defineNuxtConfig({
//   css: [
//     '~/assets/styles/tailwind.css',
//   ],
//   build: {
//     transpile: ['@fortawesome/vue-fontawesome'],
//   },
// });
