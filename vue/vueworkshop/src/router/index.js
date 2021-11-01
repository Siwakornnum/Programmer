import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import studentPage from '@/components/studentPage'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(axios, VueAxios);

const routes = [
  {
    path: '/',
    name: 'studenPage',
    component: studentPage
  },
  {
    path: '/page1/:id',
    name: 'page1',
    component: page1
  },
  {
    path: '/page2/:id',
    name: 'page2',
    component: page2
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
