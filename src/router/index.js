
import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';
import HomeView from '@/views/HomeView.vue';

 

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
    path: '/registro',
    component: Register
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router