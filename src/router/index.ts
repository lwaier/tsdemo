import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
    children:[
      {
        path:'work/index',
        name: 'workIndex',
        component:()=> import('@/views/work/index.vue')
      },
      {
        path:'learning/index',
        name: 'learningIndex',
        component:()=> import('@/views/learning/index.vue')
      },
      {
        path:'sleep/index',
        name: 'sleepIndex',
        component:()=> import('@/views/sleep/index.vue')
      },
      {
        path:'athletic/index',
        name: 'athleticIndex',
        component:()=> import('@/views/athletic/index.vue')
      },
      {
        path:'entertaintment/index',
        name: 'entertaintmentIndex',
        component:()=> import('@/views/entertaintment/index.vue')
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
