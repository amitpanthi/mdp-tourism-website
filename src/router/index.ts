import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home/Home.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/CompTest.vue')
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
  {
    path: '/about-dlc',
    name: 'About DLC',
    component: () => import('../views/AboutDLC/AboutDLC.vue')
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: () => import('../views/Experiences/Experiences.vue')
  },
  {
    path: '/news-press',
    name: 'News and Press',
    component: () => import('../views/Press/Press.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
