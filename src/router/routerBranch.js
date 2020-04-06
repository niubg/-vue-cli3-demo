let routerArr = [
    { // 排行列表页
        path: '/ranklist',
        name: 'Ranklist',
        meta: { requireAuth: true },
        component: () => import('../views/ranklist/Ranklist.vue')
    },
    { // 频道页
        path: '/channel',
        name: 'Channel',
        meta: { requireAuth: true },
        component: () => import('../views/channel/Channel.vue')
    },
    { // 书架页
        path: '/bookShelf',
        name: 'BookShelf',
        meta: { requireAuth: true },
        component: () => import('../views/bookShelf/BookShelf.vue')
    },
    { // 最近阅读
        path: '/latelyRead',
        name: 'LatelyRead',
        meta: { requireAuth: true },
        component: () => import('../views/latelyRead/LatelyRead.vue')
    },
    { // 我的购买
        path: '/myBuy',
        name: 'MyBuy',
        meta: { requireAuth: true },
        component: () => import('../views/myBuy/MyBuy.vue')
    }
]

export default routerArr