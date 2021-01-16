import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: { layout: 'main' }
  },
  {
    path: '/ui-kit',
    name: 'UI-Kit',
    component: () => import('@/views/UI-Kit'),
    meta: { layout: 'empty' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
