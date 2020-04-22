import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import routerBranch from './routerBranch'

Vue.use(VueRouter)

const routerArr = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

let routes = routerArr.concat(routerBranch);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
