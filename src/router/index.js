import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Hesabim from '../views/Hesabim.vue'
import Listeler from '../views/Listeler.vue'
import Register from '../views/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/hesabim',
    name: 'hesabim',
    component: Hesabim
  },
  {
    path: '/listeler',
    name: 'listeler',
    component: Listeler
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
