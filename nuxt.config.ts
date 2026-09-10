// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'th' },
      bodyAttrs: { class: 'bg-light' },
      title: 'ครัวบ้านดี | อาหารไทยอบอุ่นเหมือนกินที่บ้าน'
    }
  }
})
