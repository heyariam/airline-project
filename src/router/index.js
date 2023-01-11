
import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';
import SearchWrapper from '@/views/SearchWrapper.vue';
 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: SearchWrapper
  },
  {
    path: '/inicio',
    component: SearchWrapper
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