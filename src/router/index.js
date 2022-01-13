import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "add" */ '../views/Add.vue')
  },
  {
    path: '/active',
    name: 'Active',
    component: () => import(/* webpackChunkName: "active" */ '../views/Active.vue')
  },
  {
    path: '/completed',
    name: 'Completed',
    component: () => import(/* webpackChunkName: "completed" */ '../views/Completed.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
