import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import contactView from '../views/contact.vue'
import proposView from '../views/propos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'propos',
    // name: 'home',
    // component: HomeView
    component: proposView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/contact',
    name: 'contact',
    component: contactView
  },

  {
    path: '/propos',
    name: 'propos',
    component: proposView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
