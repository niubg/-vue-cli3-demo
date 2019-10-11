let routerArr = [
  {
    path: '/about2',
    name: 'about2',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export default routerArr