<!-- 
💡 BaseLayout.vue 
====================================================================================
📌 컴포넌트 설명
- 기본 레이아웃 컴포넌트로, 상단 헤더(BaseHeader)를 포함하고 있습니다.
- 이 레이아웃 내에서 `menuTree`를 Vuex store로부터 불러와 사용하는 구조입니다.
====================================================================================
-->

<template>
  <v-app>
    <!-- 🌐 헤더 컴포넌트 추가 -->
    <BaseHeader :menuTree="menuTree" />
  </v-app>
</template>

<script setup>
/* 🛠️ BaseView로부터 Composition API 메서드 가져오기 */
import BaseView from '@/components/base/BaseView'
import BaseHeader from './header/BaseHeader.vue'

const { ref, computed, onMounted, watchEffect } = BaseView()

/* 📂 라우트 관련 Store 가져오기 */
import { useRouteStore } from '@/stores/useRouterStore'
const routeStore = useRouteStore()

/* 🌳 메뉴 트리를 computed로 가져와 menuTree로 정의 */
const menuTree = computed(() => routeStore.menuTree)

/* 🖥️ 컴포넌트가 마운트될 때 메뉴 트리 콘솔 로그 출력 */
onMounted(() => {
  routeStore.handleMenuSort() // menuTree 데이터를 설정
  console.log('BaseLayout[menuTree]', menuTree.value)
})
</script>
