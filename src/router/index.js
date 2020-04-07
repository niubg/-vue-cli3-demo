
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import routerBranch from './routerBranch'

Vue.use(Router)

/**
 * mate 对象中属性的说明
 * keepAlive  是否缓存组件 true-缓存 false-不缓存   注：属性不存在等同于false
 * requireAuth 路由页面是否为权限页面 true-权限页面 false-非权限页面 注：属性不攒子啊等同于false
 * loading   全局loading显示  true-显示 false-不显示 注：属性不存在等同于false
 **/

let routerArr = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requireAuth: true }
  },
  {
    path: '/about',
    name: 'about',
    meta: { requireAuth: true },
    component: () => import('../views/home/Home.vue')
  }
]
let routes = routerArr.concat(routerBranch);
console.log(routes)
let router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 权限拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    console.log("这是一个权限页面");
    next();
  }
})

export default router;