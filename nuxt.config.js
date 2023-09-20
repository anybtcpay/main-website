const deploymentDomain = process.env.NUXT_ORIGIN || 'http://localhost:3000';

import {
  locales,
  defaultLocale,
} from './assets/js/locales';

export default defineNuxtConfig({

  site: {
    url: process.env.NUXT_ORIGIN,
    debug: true
  },

  app: {
    head: {
      title: 'AnyBTCPay',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          id: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          id: 'googlebot',
          name: 'googlebot',
          content: 'notranslate'
        },
        {
          id: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          id: 'og:url',
          name: 'og:url',
          content: deploymentDomain
        },
        {
          id: 'og:site_name',
          name: 'og:site_name',
          content: 'AnyBTCPay'
        },
        {
          id: 'og:image',
          name: 'og:image',
          itemprop: 'image primaryImageOfPage',
          content: `${deploymentDomain}/favicon/favicon.png`
        },
        {
          id: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          id: 'twitter:image',
          name: 'twitter:image',
          itemprop: 'image primaryImageOfPage',
          content: `${deploymentDomain}/favicon/favicon.png`
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon/favicon.ico'
        },
      ]
    },
  },
  
  runtimeConfig: {
    shapeshiftKey: process.env.SHAPESHIFT_KEY,
    public: {
      deploymentDomain
    },
  },

  css: [
    '~/assets/scss/main.scss',
  ],

  components: [{
    path: '~/components',
    pathPrefix: false,
    global: true
  }],

  modules: [
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    '@nuxtjs/i18n',
    'nuxt-delay-hydration'
  ],

  sitemap: {
    xsl: false,
    autoI18n: true
  },

  i18n: {
    baseUrl: deploymentDomain,
    locales,
    defaultLocale,
    lazy: true,
    langDir: 'lang',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: false,
      // Those 2 settings are silly
      // but to work the redirect set in the index.vue page the are needed
      // actual strategy is that it redirects only on home page
      redirectOnRoot: true,
      alwaysRedirect: true,
    }
  },

  delayHydration: {
    mode: 'init',
    debug: process.env.NODE_ENV === 'development'
  }
});
