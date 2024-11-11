import { createRouter, createWebHistory } from 'vue-router'

import BaseLayout from '@/layout/BaseLayout.vue' // 레이아웃 컴포넌트

const currentRoute = [
  {
    path: '/',
    name: 'Base',
    component: BaseLayout,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: currentRoute,
})

export default router
