import { version } from './package.json'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    githubSecret: process.env.GITHUB_TOKEN,

    public: {
      CLIENT_VERSION: version,
      cloudinaryURL:
        'https://res.cloudinary.com/c-io/image/upload/v1/dev-domain/',
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
    '@nuxt/image', // "@nuxt/ui",
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/seo',
  ],

  // Tailwind config
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~~/config/tailwind.config.ts',
    viewer: false,
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/c-io/image/upload/v1/dev-domain',
    },
  },

  // Build Configuration nuxt seo: https://nuxtseo.com/nuxt-seo/guides/configuring-modules
  site: {
    url: 'https://ciaran.foo',
    name: 'Ciaran Toner',
    description:
      'Experienced Software Engineer specializing in Site Reliability Engineering ' +
      '(SRE). Expertise in designing, implementing, and maintaining scalable, highly available systems. ' +
      'Skilled in cloud infrastructure, automation, performance optimization, and incident response. ' +
      'Bridging the gap between development and operations to deliver reliable, efficient solutions that drive business value.',
    defaultLocale: 'en',
  },

  ogImage: {
    fonts: [
      {
        name: 'Lato',
        weight: 400,
        // path must point to a public font file
        path: '/fonts/Lato-Regular.ttf',
      },
    ],
  },

  app: {
    head: {
      templateParams: {
        separator: '•',
      },
      titleTemplate: '%s %separator %siteName',
      meta: [
        { name: 'author', content: 'Ciaran Toner' },
        {
          name: 'keywords',
          content:
            'Site Reliability Engineering, SRE, DevOps, Cloud Infrastructure, ' +
            'Automation, Scalability, Performance Optimization, Incident Response, ' +
            'Monitoring, Kubernetes, CI/CD, Infrastructure as Code, SLOs, SLIs, Observability, ' +
            'Resilience Engineering, Chaos Engineering, Cloud Platforms, Microservices, ' +
            'Distributed Systems',
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
        { rel: 'canonical', href: 'https://ciaran.foo' },
      ],
    },
  },

  compatibilityDate: '2024-07-26',
})
