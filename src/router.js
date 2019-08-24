import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/home.vue'
import Main from './views/Main.vue'


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
      path: '*',
      redirect: '/home'
    }
  ]
})


router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !sessionStorage.getItem("token")){
    return next('/login')
  }
  next()
})


export default router