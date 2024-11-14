<!-- BaseHeader.vue -->
<template>
  <v-app-bar flat color="black" height="48">
    <!-- 🍎 좌측 아이콘 (Apple 로고) -->
    <v-btn icon @click="navigate('/')">
      <SvgIcon type="mdi" :path="mdiApple" />
    </v-btn>

    <!-- 🌐 좌측과 우측 아이콘을 떨어뜨리고 중앙 정렬을 위해 v-spacer 사용 -->
    <v-spacer></v-spacer>

    <!-- 📋 중앙 메뉴 -->
    <v-row class="header-menu" align="center" dense>
      <v-btn
        v-for="item in props.menuTree"
        :key="item.id"
        text
        @click="navigate(item.routerPath)"
        @mouseenter="isHoverMenu = true"
        @mouseleave="isHoverMenu = false"
        class="menu-item"
      >
        {{ item.menuNm }}
      </v-btn>

      <!-- 📑 드롭다운 메뉴 -->
      <v-card
        v-if="isHoverMenu"
        class="dropdown-content"
        outlined
        @mouseenter="isHoverMenu = true"
        @mouseleave="isHoverMenu = false"
      >
        <v-list>
          <v-list-item
            v-for="subItem in props.menuTree.find((i) => i.id === item.id)?.childMenu"
            :key="subItem.id"
          >
            <v-list-item-title>{{ subItem.menuNm }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>

    <!-- 🔍 우측 아이콘 (검색, 장바구니) -->
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
const { ref, router, watch, onMounted } = BaseView()
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiApple, mdiMagnify, mdiCart } from '@mdi/js'
import { defineProps } from 'vue'

const props = defineProps({
  menuTree: Array,
})

onMounted(() => {
  console.log('BaseHeader[menuTree]', props.menuTree)
})

// 🌐 페이지 이동 함수
const navigate = (link) => {
  router.push(link)
}

/**
 * 📌 메뉴 호버 상태
 * - 마우스를 올리면 드롭다운 메뉴가 나타나고, 마우스를 떼면 사라집니다.
 */
const isHoverMenu = ref(false) // 🖱️ 메뉴 호버 트리거

watch(isHoverMenu, (newValue) => {
  console.log(`🖱️ isHoverMenu 상태 변경: ${newValue ? '활성화됨' : '비활성화됨'}`)
})
</script>

<style scoped>
/* 🎨 헤더 스타일 */
.v-app-bar {
  background-color: black;
  border-bottom: 1px solid #555555;
  color: white;
}

/* 📋 중앙 메뉴 스타일 */
.header-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

/* 📋 메뉴 아이템 스타일 */
.menu-item {
  color: white;
  font-weight: 400;
  font-size: 14px;
  min-width: 60px;
  padding: 0 10px;
}

/* 🌐 아이콘 스타일 */
.v-icon,
.svg-icon {
  color: white;
  font-size: 20px;
}
</style>
