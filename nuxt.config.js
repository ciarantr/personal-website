import { version } from './package.json'

export default defineNuxtConfig({
  // Src directory
  srcDir: 'src/',
  // Experimental features
  vite: {
    vue: {
      reactivityTransform: true, // Enable Reactivity Transform
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image-edge'],
  // Tailwind config
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~~/tailwind.config.js',
    injectPosition: 0,
    viewer: false,
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/c-io/image/upload/v1667988586',
    },
  },

  app: {
    head: {
      titleTemplate: 'Ciaran Toner | %s ',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'author', content: 'Ciaran Toner' },
        { name: 'keywords', content: 'web developer, web development' },
        { name: 'description', content: 'web developer, web development' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'msapplication-TileColor', content: '#525360' },
        { name: 'theme-color', content: '#525360' },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      CLIENT_VERSION: version,
    },
  },
})
