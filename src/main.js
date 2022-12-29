import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMq from './node_modules/vue-mq'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vueMq: {
    breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
},
  render: h => h(App)
}).$mount('#app')
