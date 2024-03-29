import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // app
  app: {
    head: {
      title: 'CMER Smile Line ',
      titleTemplate: '%s | 希瑪微笑矯齒',
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no',
          // 禁止缩放
        },
        {
          name: 'facebook-domain-verification',
          content: '7wgcbipiimb8dvy12hml8jne6l9ytx',
        },
        {
          hid: 'description',
          name: 'description',
          content: '希瑪微笑矯齒描述',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      noscript: [
        // <noscript>Javascript is required</noscript>
        {
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-59MMG6F"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          body: true,
        },
      ],
      script: [
        {
          async: 'async',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-2G80LM1R8F',
        },
        {
          src:'https://www.youtube.com/iframe_api',
        },
        {
          children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2G80LM1R8F');
          `,
          type: 'text/javascript',
        },
        // {
        //   src:
        //     "./plugins/gtm.js",
        //   body:true
        // },
        {
          children: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-59MMG6F');
          `,
          type: 'text/javascript',
        },
      ],
    },
  },
  // css
  css: [
    'virtual:windi-base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    '~/assets/sass/vendor.scss',
    '~/assets/sass/app.scss',
  ],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // modules
  modules: [
    'unplugin-icons/nuxt',
    '@intlify/nuxt3',
    '@pinia/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
    '@nuxtjs/svg',
  ],

  // experimental features
  experimental: {
    reactivityTransform: true,
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'tc',
      fallbackLocale: 'tc',
      availableLocales: ['tc', 'cn', 'en', 'id', 'ja', 'ko'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },

  // content
  content: {
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-light',
    },
  },
})
