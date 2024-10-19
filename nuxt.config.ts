import { version } from './package.json'

export default defineNuxtConfig({
  // Src directory

  srcDir: 'src/',

  devtools: {
    enabled: false,
  },

  runtimeConfig: {
    githubSecret: process.env.GITHUB_TOKEN,

    public: {
      CLIENT_VERSION: version,
    },
  },

  // configuration incorrect see
  // https://github.com/unjs/nitro/discussions/1298
  // nitro: {
  //   storage: {
  //       'db': {
  //         driver: 'localStorage',
  //         localStorage:{}
  //       }
  //   },
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/image',
  ],

  // Tailwind config
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~~/config/tailwind.config.js',
    injectPosition: 0,
    viewer: false,
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/c-io/image/upload/dev-domain',
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
      ],
    },
  },

  compatibilityDate: '2024-10-19',
})