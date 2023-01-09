
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Herowrapper from '../views/Herowrapper.vue';
import Register from '@/views/Register.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/inicio',
    component: HomeView
  },
  {
    path: '/buscar',
    component: Herowrapper
  },
  {
    path: '/registro',
    component: Register
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