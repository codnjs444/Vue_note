// 📂 stores/useRouteStore.js
// ====================================================================================
// 📌 Route Store 설정
// - Pinia를 이용한 전역 상태 관리로, 라우터 데이터를 트리 구조로 가공하여 관리합니다.
// - 메뉴 데이터를 부모-자식 구조로 정렬하여 메뉴 트리 형태로 제공합니다.
// ====================================================================================

import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export const useRouteStore = defineStore('routeStore', () => {
  // 🌐 Vue Router 인스턴스 생성
  const router = useRouter()

  // 🌳 메뉴 트리를 저장할 반응형 변수
  const menuTree = ref([])

  // 🔄 라우터에서 메뉴 데이터를 가져와 부모-자식 구조로 정렬하는 함수
  const handleMenuSort = () => {
    const menuData = router.options.data.menu // 📥 라우터의 메뉴 데이터 가져오기
    const menuMap = {} // 📌 각 메뉴 항목을 ID로 참조하기 위한 객체
    const tree = [] // 🌲 최종 트리 구조

    // 🔹 모든 항목을 맵에 저장하고, 각 항목에 빈 childMenu 배열 추가
    menuData.forEach((item) => {
      menuMap[item.id] = { ...item, childMenu: [] }
    })

    // 🔸 부모-자식 관계를 설정하여 트리 구조 생성
    menuData.forEach((item) => {
      if (item.parentId === '0') {
        // 🟢 최상위 항목
        tree.push(menuMap[item.id])
      } else if (menuMap[item.parentId]) {
        // 🔵 자식 항목을 부모의 childMenu에 추가
        menuMap[item.parentId].childMenu.push(menuMap[item.id])
      }
    })

    // ✅ 최종 트리 구조를 menuTree에 저장
    menuTree.value = tree
  }

  handleMenuSort()

  // 🛠️ Store에서 반환되는 상태와 함수
  return {
    handleMenuSort,
    menuTree,
  }
})
