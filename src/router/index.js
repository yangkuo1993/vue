import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import {routerMode} from '../config/env'

/*
* 页面懒加载
* 页面详细信息
* */
// app加载页
const homeLoad = () => import(/* webpackChunkName: "homeLoad" */ '@/views/homeLoad/homeLoad')
// 登录
const login = () => import(/* webpackChunkName: "login" */ '@/views/login/login')
// 注册
const register = () => import(/* webpackChunkName: "register" */ '@/views/register/register')
// 首页
const home = () => import(/* webpackChunkName: "home" */ '@/views/home/home')
// 忘记密码
const forgetPassword = () => import(/* webpackChunkName: "forgetPassword" */ '@/views/forgetPassword/forgetPassword')
// 通知公告
const notices = () => import(/* webpackChunkName: "notices" */ '@/views/notices/notices')
// 公告详情
const noticesDetails = () => import(/* webpackChunkName: "noticesDetails" */ '@/views/notices/noticesDetails')
// 新闻详情
const newsDetails = () => import(/* webpackChunkName: "newsDetails" */ '@/views/notices/newsDetails')
// 热门活动
const activities = () => import(/* webpackChunkName: "activities" */ '@/views/activities/activities')
// 活动详情
const activityDetails = () => import(/* webpackChunkName: "activityDetails" */ '@/views/activities/activityDetails')
// 课程列表
const course = () => import(/* webpackChunkName: "course" */ '@/views/course/course')
// 课程详情
const courseDetails = () => import(/* webpackChunkName: "courseDetails" */ '@/views/course/courseDetails')
// 个人中心
const my = () => import(/* webpackChunkName: "my" */ '@/views/my/my')
// 新闻资讯
const news = () => import(/* webpackChunkName: "news" */ '@/views/news/news')
// 课程分类
const courseClassify = () => import(/* webpackChunkName: "courseClassify" */ '@/views/courseClassify/courseClassify')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/homeLoad'
    },
    // app加载页
    {
      path: '/homeLoad',
      name: 'homeLoad',
      component: homeLoad
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 注册
    {
      path: '/register',
      name: 'register',
      component: register
    },
    // 忘记密码
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },
    // 通知公告
    {
      path: '/notices',
      name: 'notices',
      component: notices,
      meta: {
        requiresAuth: true
      }
    },
    // 公告详情
    {
      path: '/noticesDetails',
      name: 'noticesDetails',
      component: noticesDetails,
      meta: {
        requiresAuth: true
      }
    },
    // 新闻资讯
    {
      path: '/news',
      name: 'news',
      component: news,
      meta: {
        requiresAuth: true
      }
    },
    // 新闻详情
    {
      path: '/newsDetails',
      name: 'newsDetails',
      component: newsDetails,
      meta: {
        requiresAuth: true
      }
    },
    // 热门活动
    {
      path: '/activities',
      name: 'activities',
      component: activities,
      meta: {
        requiresAuth: true
      }
    },
    // 活动详情
    {
      path: '/activityDetails',
      name: 'activityDetails',
      component: activityDetails,
      meta: {
        requiresAuth: true
      }
    },
    // 课程列表
    {
      path: '/course',
      name: 'course',
      component: course,
      meta: {
        requiresAuth: true
      }
    },
    // 课程详情
    {
      path: '/courseDetails',
      name: 'courseDetails',
      component: courseDetails,
      meta: {
        requiresAuth: true
      }
    },
    // 课程分类
    {
      path: '/courseClassify',
      name: 'courseClassify',
      component: courseClassify,
      meta: {
        requiresAuth: true
      }
    },
    // 个人中心
    {
      path: '/my',
      name: 'my',
      component: my,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        requiresAuth: true
      }
    }
  ],
  mode: routerMode
})

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isLogin) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
