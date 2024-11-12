/**
 * ============================================================================================================================================================
 * 👉 라우터 스크립트
 * -> 대시보드, 로그인, 로그아웃, 레이아웃, 점검 및 준비중 페이지는 데이터베이스와 연동은 되지 않고 기본 페이지로 컴포넌트를 import한다.
 * -> 동적 라우팅 구현으로 데이터베이스와 연동하여 라우터가 생성된다.
 * ============================================================================================================================================================
 */
import { createRouter, createWebHistory } from 'vue-router'

import BaseLayout from '@/layout/BaseLayout.vue'

// const currentRoute = [
//   {
//     path: '/',
//     name: 'Base',
//     component: BaseLayout,
//   },
// ]
const currentRoute = [
  { path: '/', name: 'Base', component: BaseLayout },
  { path: '/base', name: 'BaseAlternative', component: BaseLayout },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: currentRoute,
})

import { menuByUserList } from '@/stores/api/menuApi'
async function setMenuList() {
  await menuByUserList()
    .then(async (res) => {
      if (res.success) {
        console.log('res', res.data)
      }
    })
    .catch(() => {
      console.log('실패')
    })
}

export default router
