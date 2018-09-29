export default {
  /*
  ** Head elements
  ** Add Roboto font and Material Icons
  */
  head: {
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  build: {
    extractCSS: true
  },
  /*
  ** Load Vuetify into the app
  */
  plugins: ['~/plugins/vuetify'],
  /*
  ** Load Vuetify CSS globally
  */
  css: ['~/assets/app.styl']
}
