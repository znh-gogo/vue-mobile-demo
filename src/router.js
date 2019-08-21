import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect:'/home',
      children:[
        {path:'/home',name:'home',component:Home},
        {
          path: '/about',
          name: 'about',
          component: () => import('./views/About.vue')
        }
      ]
    },
  ]
})
