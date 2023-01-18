import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JournalView from "@/views/JournalView";
import contactView from "@/views/ContactView";
import clavierView from "@/views/ClavierView";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Journal',
    name: 'Journal',
    component: JournalView
  },
  {
    path: '/contact',
    name: 'contacte',
    component: contactView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: clavierView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
