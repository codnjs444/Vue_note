/**
 * ============================================================================================================================================================
 * 👉 라우터 스크립트
 * -> 대시보드, 로그인, 로그아웃, 레이아웃, 점검 및 준비중 페이지는 데이터베이스와 연동은 되지 않고 기본 페이지로 컴포넌트를 import한다.
 * -> 동적 라우팅 구현으로 데이터베이스와 연동하여 라우터가 생성된다.
 * ============================================================================================================================================================
 */
import { createRouter, createWebHistory } from 'vue-router'

import BaseLayout from '@/layout/BaseLayout.vue'
import BaseLogin from '@/layout/login/BaseLogin.vue'

const baseRoute = [
  { path: '/', name: 'Base', component: BaseLayout },
  { path: '/base', name: 'BaseAlternative', component: BaseLayout },
  { path: '/login', name: 'BaseLogin', component: BaseLogin },
]
const commonRoute = [
  {
    parentNm: '햇나',
    parentEngNm: 'Hatna',
    routerPath: '/myinfo',
    routerUrl: '/myPage',
    routerName: 'BaseMyPage',
    menuNm: '마이페이지',
    menuEngNm: 'My Page',
    svcType: 'I',
    auth: true,
  },
]
const detailRoute = [
  {
    routerPath: '/support/detail',
    parentId: '8001',
    parentNm: 'FAQ',
    svcType: 'I',
    routerName: 'HelpHistoryDetail',
    menuNm: '자주묻는질문',
    menuEngNm: 'FAQ',
    query: '/:id',
    auth: false,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoute,
  data: {
    common: commonRoute,
    menu: [],
    subMenu: detailRoute,
  },
})

import { menuByUserList } from '@/stores/api/menuApi'

// 서버에서 메뉴 데이터를 가져와 라우트를 설정
async function setMenuList() {
  try {
    const list = await menuByUserList()
    setCommonRoute()
    dynamicRoute(list.data)
  } catch (error) {
    console.error('Error fetching menu data:', error)
  }
}

//로그인, 마이페이지 등 공통적으로 사용되는 기본 라우트를 설정
async function setCommonRoute() {
  const modules = import.meta.glob('../layout/**/*.vue')
  for (let i = 0; i < commonRoute.length; i++) {
    const route = commonRoute[i]

    let config = {
      path: route.routerUrl,
      name: route.routerName,
      component: modules[`../layout${route.routerPath}/${route.routerName}.vue`],
    }
    config.meta = { requiresAuth: true }
    router.addRoute('Base', config)
    // if (route.auth) {
    //   config.meta = { requiresAuth: true }
    // }
  }
}

//서버에서 받아온 사용자 메뉴 데이터를 기반으로 동적 라우트를 추가
async function dynamicRoute(list) {
  router.options.data.menu = list
  for (let el of handleRoute(list)) {
    router.addRoute('Base', el)
  }
  for (let el of handleRoute(detailRoute)) {
    router.addRoute('Base', el)
  }
}

//서버에서 받아온 라우트 데이터를 사용해 컴포넌트를 설정하고 필요한 메타 정보를 추가한 뒤, 최종적으로 사용할 라우트 객체 배열을 생성
function handleRoute(list) {
  const modules = import.meta.glob('../views/**/*.vue')
  // modules : 정확한 경로의 컴포넌트가 없을시 undefined
  return list.reduce((acc, item) => {
    const { auth, routerPath, routerName } = item
    if (routerPath !== '' && routerName !== '') {
      let config = {
        path: `/${routerName.charAt(0).toLowerCase() + routerName.slice(1)}`,
        name: routerName,
        component: modules[`../views${routerPath}/${routerName}.vue`],
      }
      if (auth) {
        config.meta = { requiresAuth: true }
      }
      if (item.query) {
        config.path = config.path + item.query
      }
      acc.push(config)
    }
    return acc
  }, [])
}

let isMenuLoaded = false

router.beforeEach(async (to, from, next) => {
  console.log('Index.js[beforeEach]')
  if (!isMenuLoaded) {
    isMenuLoaded = true
    await setMenuList() // 첫 로드 시 메뉴 데이터 가져오기
  }
  next() // 다음 라우트로 이동
})

export default router
