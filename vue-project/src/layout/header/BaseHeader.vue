<!-- BaseHeader.vue -->
<template>
  <v-app-bar flat color="black" height="48">
    <!-- 좌측 아이콘 (Apple 로고) -->
    <v-btn icon @click="navigate('/')">
      <SvgIcon type="mdi" :path="mdiApple" />
    </v-btn>

    <!-- 좌측과 우측 아이콘을 떨어뜨리고 중앙 정렬을 위해 v-spacer 사용 -->
    <v-spacer></v-spacer>

    <!-- 중앙 메뉴 -->
    <v-row class="header-menu" align="center" dense>
      <v-btn
        v-for="item in menuItems"
        :key="item.text"
        text
        @click="navigate(item.link)"
        @mouseenter="isHoverMenu = true"
        @mouseleave="isHoverMenu = false"
        class="menu-item"
      >
        {{ item.text }}
      </v-btn>

      <v-card
        v-if="isHoverMenu"
        class="dropdown-content"
        outlined
        @mouseenter="isHoverMenu = true"
        @mouseleave="isHoverMenu = false"
      >
        <v-list>
          <v-list-item v-for="subItem in subMenuItems" :key="subItem.text">
            <v-list-item-title>{{ subItem.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>

    <!-- 우측 아이콘 (검색, 장바구니) -->
    <v-spacer></v-spacer>
    <v-btn icon>
      <SvgIcon type="mdi" :path="mdiMagnify" />
    </v-btn>
    <v-btn icon>
      <SvgIcon type="mdi" :path="mdiCart" />
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import BaseView from '@/components/base/BaseView'
const { ref, router, watch, onMounted } = BaseView() // router를 BaseView에서 가져옴
import axios from 'axios'

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiApple, mdiMagnify, mdiCart } from '@mdi/js'

const menuItems = ref([
  { text: '스토어', link: '/store' },
  { text: 'Mac', link: '/mac' },
  { text: 'iPad', link: '/ipad' },
  { text: 'iPhone', link: '/iphone' },
  { text: 'Watch', link: '/watch' },
  { text: 'Vision', link: '/vision' },
  { text: 'AirPods', link: '/airpods' },
  { text: 'TV 및 홈', link: '/tv' },
  { text: '엔터테인먼트', link: '/entertainment' },
  { text: '액세서리', link: '/accessories' },
  { text: '고객지원', link: '/support' },
])

const navigate = (link) => {
  router.push(link) // BaseView에서 가져온 router를 사용하여 라우팅
}

const fetchMenuData = async () => {
  try {
    const response = await axios.get('/src/layout/menuTree.json')
    const menuItems = response.data

    // menuNm 값들을 콘솔에 출력
    menuItems.forEach((item) => {
      console.log(item.menuNm)
    })
  } catch (error) {
    console.error('Error loading menu data:', error)
  }
}

onMounted(fetchMenuData)

/**
 * 👉 메뉴 클릭 / 이동
 */
const isHoverMenu = ref(false) // 메뉴 호버 트리거

watch(isHoverMenu, (newValue) => {
  console.log(`isHoverMenu 상태 변경: ${newValue ? '활성화됨' : '비활성화됨'}`)
})
</script>

<style scoped>
.v-app-bar {
  background-color: black;
  border-bottom: 1px solid #555555;
  color: white;
}

.header-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.menu-item {
  color: white;
  font-weight: 400;
  font-size: 14px;
  min-width: 60px;
  padding: 0 10px;
}

.v-icon,
.svg-icon {
  color: white;
  font-size: 20px;
}
</style>
