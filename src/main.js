import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Card from "./components/UI/Card.vue";
import Button from "./components/UI/Button.vue";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  Card,
  'v-button': Button,
  render: h => h(App)
}).$mount('#app')
