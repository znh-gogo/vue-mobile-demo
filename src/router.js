import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/home.vue'
import Main from './views/Main.vue'
import { Toast } from 'mint-ui'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/login',
      name:'login',
      component: () => import('./views/Login/login.vue'),
      meta:{ isPublic:true}
    },
    {
      path:'/register',
      name:'register',
      component: () => import('./views/Login/register.vue'),
      meta:{ isPublic:true}
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          component:Home,
          redirect:'/home/one',
          children:[
            {
              path: '/home/one',
              name: 'one',
              component: () => import('./views/Home/HomeOne.vue')
            },
            {
              path: '/about',
              name: 'about',
              component: () => import('./views/Home/About.vue')
            }
          ]
        },
        {
          path: '/plan',
          name: 'plan',
          component: () => import('./views/Plan/plan.vue')
        },
        {
          path: '/mine',
          name: 'mine',
          component: () => import('./views/Mine/mine.vue')
        }

      ]
    },
    {
      path:'/mine/myinfo',
      name:'myinfo',
      component: () => import('./views/Mine/myinfo/myinfo.vue')
    },
    {
      path:'/mine/myinfo/changenickname',
      name:'changenickname',
      component: () => import('./views/Mine/myinfo/changenickname.vue')
    },
    {
      path:'/mine/myinfo/changeemail',
      name:'changeemail',
      component: () => import('./views/Mine/myinfo/changeemail.vue')
    },
    {
      path:'/mine/myinfo/changetelephone',
      name:'changetelephone',
      component: () => import('./views/Mine/myinfo/changetelephone.vue')
    },
    {
      path:'/mine/myinfo/changepassword',
      name:'changepassword',
      component: () => import('./views/Mine/myinfo/changepassword.vue')
    },
    {
      path:'/mine/myinfo/changedescription',
      name:'changedescription',
      component: () => import('./views/Mine/myinfo/changedescription.vue')
    },
    {
      path:'/mine/myinfo/changeheadimg',
      name:'changeheadimg',
      component: () => import('./views/Mine/myinfo/changeheadimg.vue')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})


router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !sessionStorage.getItem("token")){
    Toast('请重新登陆')
    return next('/login')
  }
  next()
})


export default router