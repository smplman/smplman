require('dotenv').config()
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'smplman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'smplman project website' },
      { name: 'msapplication-TileColor', content: '#00a300' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0e9e49'},
    ]
  },

  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-fontawesome',
  ],

  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/filters.js'
  ],

  /*
  ** Axios
  */
  axios: {
    // proxyHeaders: false
    rejectUnauthorized: false,
    proxy: true,
    headers: { 'Content-Type': 'application/json' }
  },

  proxy: {
    '/api/projects/': {
      target: process.env.POSTS_URL,
      pathRewrite: { '^/api/projects/': '' }
    },
    '/api/search/': {
      target: process.env.SEARCH_URL,
      pathRewrite: { '^/api/search/': '' }
    }
  },

  /*
  ** Fontawesome
  */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    'highlight.js/styles/dracula.css'
  ],

  /*
  ** Environmnet Vars
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    cockpit: {
      apiUrl: '',
      apiToken: '',
      baseUrl: ''
    }
  },

  /*
  ** Tailwind CSS configuration
  */
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false
  },

  /*
  ** Google Analytics configuration
  */
  googleAnalytics: {
    id: 'UA-18917336-1'
  },

  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/tailwindcss'
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,

    postcss: {
      preset: {
        autoprefixer: { grid: false }
      }
    },

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

      if (!isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            // Specify the locations of any files you want to scan for class names.
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                // Specify the file extensions to include when scanning for
                // class names.
                extensions: ["html", "vue"]
              }
            ],
            whitelist: [
              "html",
              "body",
              "ul",
              "ol",
              "pre",
              "code",
              "blockquote"
            ],
            whitelistPatterns: [/\bhljs\S*/]
          })
        );
      }
    }
  }
};

