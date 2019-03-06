import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Ad from '@/components/ads/Ad.vue'
import AdList from '@/components/ads/AdList.vue'
import NewAd from '@/components/ads/NewAd.vue'
import Login from '@/components/auth/Login.vue'
import Reg from '@/components/auth/Reg.vue'
import Orders from '@/components/user/Orders.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      name: 'ad',
      component: Ad
    },
    {
      path: '/list',
      name: 'list',
      component: AdList
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Reg
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
  mode: 'history'
})
