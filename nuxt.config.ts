import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  srcDir: 'app',
  css: ['../assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})