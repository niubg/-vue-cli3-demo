import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/index'
import Home from '../views/homo/Home.vue'
import routerBranch from './routerBranch'

Vue.use(Router)

/**
 * mate 对象中属性的说明
 * keepAlive  是否缓存组件 true-缓存 false-不缓存   注：属性不存在等同于false
 * requireAuth 路由页面是否为权限页面 true-权限页面 false-非权限页面 注：属性不存在等同于false
 * loading   全局loading显示  true-显示 false-不显示 注：属性不存在等同于false
 **/

let routerArr = [
  { // 首页
    path: '/',
    name: 'home',
    component: Home,
    meta: { requireAuth: true, keepAlive: true }
  },
  { // 分类
    path: '/classify',
    name: 'Classify',
    meta: { requireAuth: true },
    component: () => import('../views/classify/Classify.vue')
  },
  { // 分类列表
    path: '/classifylist',
    name: 'Classifylist',
    meta: { requireAuth: true },
    component: () => import('../views/classifylist/Classifylist.vue')
  },
  { // 搜索
    path: '/search',
    name: 'Search',
    meta: { requireAuth: true },
    component: () => import('../views/search/Search.vue')
  },
  { // 搜索结果
    path: '/search/searchEnd',
    name: 'SearchEnd',
    meta: { requireAuth: true },
    component: () => import('../views/search/SearchEnd.vue')
  },
  { // 排行
    path: '/rank',
    name: 'Rank',
    meta: { requireAuth: true },
    component: () => import('../views/rank/Rank.vue')
  },
  { // 书吧
    path: '/bookBar',
    name: 'BookBar',
    meta: { requireAuth: true },
    component: () => import('../views/bookBar/BookBar.vue')
  },
  { // 专题
    path: '/special',
    name: 'Special',
    meta: { requireAuth: true },
    component: () => import('../views/special/Special.vue')
  },
  { // 专题详情
    path: '/specialDetails',
    name: 'SpecialDetails',
    meta: { requireAuth: true },
    component: () => import('../views/specialDetails/SpecialDetails.vue')
  },
  { // 个人中心
    path: '/personalCenter',
    name: 'PersonalCenter',
    meta: { requireAuth: true },
    component: () => import('../views/personalCenter/PersonalCenter.vue')
  },
  { // 我的资料
    path: '/personal/myInformation',
    name: 'MyInformation',
    meta: { requireAuth: true },
    component: () => import('../views/personal/myInformation/MyInformation.vue')
  },
  { // 绑定手机号
    path: '/personal/myInformation/bindingPhone',
    name: 'BindingPhone',
    meta: { requireAuth: true },
    component: () => import('../views/personal/myInformation/bindingPhone/BindingPhone')
  },
  { // 修改密码
    path: '/personal/myInformation/changePassword',
    name: 'ChangePassword',
    meta: { requireAuth: true },
    component: () => import('../views/personal/myInformation/changePassword/ChangePassword')
  },
  { // 充值
    path: '/personal/recharge/recharge',
    name: 'Recharge',
    meta: { requireAuth: true },
    component: () => import('../views/personal/recharge/Recharge')
  },
  { // 书籍详情页
    path: '/bookDetails',
    name: 'BookDetails',
    meta: { requireAuth: true },
    component: () => import('../views/bookDetails/BookDetails')
  },
  { // 书籍章节目录列表
    path: '/chapterList',
    name: 'ChapterList',
    meta: { requireAuth: true },
    component: () => import('../views/chapterList/ChapterList')
  },
  { // 书籍阅读
    path: '/book',
    name: 'Book',
    meta: { requireAuth: true },
    component: () => import('../views/book/Book')
  },
  { // 书评
    path: '/bookReview',
    name: 'BookReview',
    meta: { requireAuth: true },
    component: () => import('../views/bookReview/BookReview')
  },
  { // 全部回复
    path: '/replyAll',
    name: 'ReplyAll',
    meta: { requireAuth: true },
    component: () => import('../views/replyAll/ReplyAll')
  },
  { // 作者空间
    path: '/authorSpace',
    name: 'AuthorSpace',
    meta: { requireAuth: true },
    component: () => import('../views/authorSpace/AuthorSpace')
  },
  { // 塔券
    path: '/tacoupon',
    name: 'Tacoupon',
    meta: { requireAuth: true },
    component: () => import('../views/tacoupon/Tacoupon')
  },
  { // 塔券-帮助中心
    path: '/tacoupon/help',
    name: 'TacouponHelp',
    meta: { requireAuth: true },
    component: () => import('../views/tacoupon/help/Help')
  },
  { // 我的任务
    path: '/mymission',
    name: 'Mymission',
    meta: { requireAuth: true },
    component: () => import('../views/mymission/Mymission')
  },
  { // 塔券领取记录
    path: '/couponhistory',
    name: 'Couponhistory',
    meta: { requireAuth: true },
    component: () => import('../views/couponhistory/Couponhistory')
  },
  { // 登录方式选择
    path: '/loginType',
    name: 'LoginType',
    meta: { requireAuth: true },
    component: () => import('../views/loginType/LoginType')
  },
  { // 账号登陆
    path: '/userLogin',
    name: 'UserLogin',
    meta: { requireAuth: true },
    component: () => import('../views/userLogin/UserLogin')
  },
  { // 注册
    path: '/register',
    name: 'Register',
    meta: { requireAuth: true },
    component: () => import('../views/register/Register')
  },
  { // 注册-用户协议
    path: '/agreement',
    name: 'Agreement',
    meta: { requireAuth: true },
    component: () => import('../views/agreement/Agreement')
  },
  { // 注册-用户协议
    path: '/agreement',
    name: 'Agreement',
    meta: { requireAuth: true },
    component: () => import('../views/agreement/Agreement')
  },
  { // 找回密码
    path: '/retrievePassword',
    name: 'RetrievePassword',
    meta: { requireAuth: true },
    component: () => import('../views/retrievePassword/RetrievePassword')
  },
  { // 错误页面
    path: '*',
    name: 'Error',
    meta: { requireAuth: true },
    component: () => import('../views/error/Error')
  }
 
]
let routes = routerArr.concat(routerBranch);
let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 权限拦截
router.beforeEach((to, from, next) => {
  window.scroll(0, 0);
  // 是否显示全局loading加载
  if (to.meta.loading) {
    Store.state.globalLoading = true
  } else {
    Store.state.globalLoading = false
  }

  // 路由权限判断
  if (to.meta.requireAuth) {
    console.log("这是一个权限页面");
  }
  next();
})

export default router;