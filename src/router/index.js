import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Herowrapper from '../views/Herowrapper.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/buscarvuelo',
    component: Herowrapper
  },
  {
    path: '/notFound(.*)',
    component: null
  }
]

const router = new VueRouter({
  routes
})

export default router
