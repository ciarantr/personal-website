import { version } from './package.json'

export default defineNuxtConfig({
  // Src directory
  srcDir: 'src/',

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
      baseURL: 'https://res.cloudinary.com/c-io/image/upload/v1675258978',
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
        {
          name: 'keywords',
          content:
            'web developer, web development, vuejs developer, full-stack, web developer, front-end developer ',
        },
        {
          name: 'description',
          content:
            "Hi, i'm Ciaran a full-stack web developer from Ireland." +
            'I design & build websites using the latest web technologies that deliver blazingly fast responsive sites.',
        },
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
          type: 'image/svg+xml',
          sizes: '32x32',
          href: '/favicon.svg',
        },
        {
          rel: 'mask-icon',
          type: 'image/svg+xml',
          sizes: '32x32',
          href: '/mask-icon.svg',
          color: '#525360',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
          media: 'print',
          onload: "this.onload=null;this.removeAttribute('media');", // load font asynchronously
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      CLIENT_VERSION: version,
    },
  },
})
