import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home/Home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../components/WorldMap/WorldMap.vue')
  },
  {
    path: '/our-worlds',
    name: 'Our Worlds',
    component: () => import('../components/OurWorlds/OurWorlds.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../components/Gallery/Gallery.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
