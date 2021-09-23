export default {
  rootDir : './',
  srcDir : './',
  
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,400i,700i&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,900,400i,700i&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css' }
    ]
  },
  router: {
    // PREPROD/Learning Services/GT test/ADT-testing-mimetypes → base: '/ProdContent/cninv000000000016765/'
    // PROD/Learning Services/GT test/tdumas/ADT-testing-mimetypes → base: '/ProdContent/cninv000000000017653/'
    // PROD/Learning Services/GT test/ADT_finance/ADT_test → base: '/ProdContent/cninv000000000018107/'
    
    // base: '/ProdContent/cninv000000000016763/'
    // base: 'd2l/le/content/'
    // base: '/ProdContent/cninv000000000017454/'
    // base: '/ProdContent/cninv000000000018107/'
     //base: './',
     mode: "hash"
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
  '@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  '~/plugins/SCORM_API_wrapper.js',
  '~/plugins/fontawesome.js',
   { src: '~plugins/ga.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-i18n', {
  strategy: 'prefix',
  defaultLocale: 'en'
}],
    ['vue-scrollto/nuxt', {container: "#scrollDiv",
     duration: 750,
     easing: "ease",
     offset: -200,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: true,
     y: false }]
  ],
  layoutTransition: {
    name: "layout",
    mode: "out-in"
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  i18n: {
    strategy: 'prefix',
       useCookie: true,
    // Cookie name
    cookieKey: 'i18n_redirected',
    // Set to always redirect to value stored in the cookie, not just once
    vueI18nLoader: true,
    locales: [{
        code: 'en',
        name: 'English',
        iso: 'en-CA',
        file: 'en.js'
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-CA',
        file: 'fr.js'
      }
    ],
    lazy: true,
    loadedLanguages :['en','fr'],
    langDir: 'lang/',
    defaultLocale: "en",
    fallbackLocale: 'en',
    fallbackRoot: true,
    silentTranslationWarn: true,
    silentFallbackWarn: true
  },
  /*
   ** Build configuration
   */
  build: {
    loaders: {
      rules: [{
        test: /\.(ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[ext]'
      }

    }]},
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
       if(!ctx.isDev) {
       config.output.publicPath = '_nuxt/'
     }
      config.module.rules.push({
        test: /\.(pdf|docx|xlsx)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },{
        test: /\.(vtt)$/i,
        use: [{
          loader: 'file-loader'
        }]
      })
      return config
    }
  }
}
