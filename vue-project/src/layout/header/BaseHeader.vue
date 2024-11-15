<template>
  <v-app-bar
    location="top"
    width="100%"
    color="#555555"
    :height="isHoverMenu ? maxMenuHeight : '16'"
    density="prominent"
  >
    <template #default>
      <v-row align="center" class="justify-space-between">
        <v-col cols="12">
          <!-- 👉 메뉴 -->
          <v-col @mouseleave="isHoverMenu = false">
            <v-row>
              <template v-for="item in props.menuTree" :key="item.id">
                <v-col class="pa-0 header-menu">
                  <v-btn
                    rounded="0"
                    elevation="0"
                    width="100%"
                    @mouseover="isHoverMenu = true"
                    class="menu-item"
                    @click="onHeaderMenuClick(item)"
                  >
                    <!-- 👉 메인 매뉴 -->
                    <h4 class="font-weight-regular text-normal ma-auto">
                      {{ item.menuNm }}
                    </h4>
                  </v-btn>
                  <v-card
                    rounded="0"
                    elevation="0"
                    width="100%"
                    height="100%"
                    color="#555555"
                    card-class="pa-0 text-center py-5"
                  >
                    <!-- 👉 서브 메뉴 -->
                    <template #default>
                      <v-list v-if="isHoverMenu" density="compact" class="pa-0">
                        <v-row
                          no-gutters
                          v-for="sub_item in item.childMenu"
                          :key="sub_item.id"
                          justify="center"
                          align="center"
                          @click="onMenuClick(sub_item)"
                          class="menu-item"
                        >
                          <span>{{ sub_item.menuNm }}</span>
                          <svg-icon
                            v-if="sub_item.svcType === 'A'"
                            name="link-external"
                            class="ml-1"
                            :height="11"
                            :width="14"
                          ></svg-icon>
                        </v-row>
                      </v-list>
                    </template>
                  </v-card>
                </v-col>
              </template>
            </v-row>
          </v-col>
        </v-col>
      </v-row>
    </template>
  </v-app-bar>
</template>
<script setup>
import BaseView from '@/components/base/BaseView'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiApple, mdiMagnify, mdiCart } from '@mdi/js'
import { defineProps, defineEmits, onMounted } from 'vue'

const { ref, router, watch } = BaseView()

// 👉 Props 정의
const props = defineProps({
  menuTree: Array,
})

// 👉 Emit 정의
const emit = defineEmits(['goHome', 'route'])

// 👉 홈 으로 (대시보드 / dashboard)
const goHome = () => {
  emit('goHome')
}

/**
 * 👉 메뉴 클릭 / 이동 이벤트 처리
 */
const onHeaderMenuClick = (route) => {
  if (route.routerName !== '') {
    const getMenu = route.childMenu.filter((item) => item.routerName === route.routerName)
    onMenuClick(getMenu[0])
  }
}

// 👉 메뉴 클릭 시 호출되는 함수
const isHoverMenu = ref(false)
const hoveredItem = ref(null)

const ChildmenuTree = (item) => {
  hoveredItem.value = item
  isHoverMenu.value = true
}

const onMenuClick = (route) => {
  console.log('BaseHeader[onMenuClick]', route)
  emit('route', route)
}

const maxMenuHeight = ref(0)
const handleMaxHeaderHeight = () => {
  let maxMenuLength = 0
  for (let menu of props.menuTree) {
    if (menu.childMenu !== null && menu.childMenu.length > maxMenuLength) {
      maxMenuLength = menu.childMenu.length
    }
  }
  maxMenuHeight.value = String(maxMenuLength * 17.5)
  console.log('handleMaxHeaderHeight', maxMenuHeight.value)
}

// 👉 컴포넌트가 마운트될 때 실행되는 함수
onMounted(() => {
  handleMaxHeaderHeight()
  console.log('BaseHeader[menuTree]', props.menuTree)
})
</script>

<style scoped>
/* 🎨 헤더 스타일 */
.v-app-bar {
  background-color: #5555;
  border-bottom: 1px solid #555555;
}

/* 📋 메뉴 아이템 스타일 */
.menu-item {
  background-color: #555555;
  font-weight: 200;
  font-size: 9px;
  min-width: 60px;
  padding: 0 10px;
  color: white;
}

/* 🌐 아이콘 스타일 */
.v-icon,
.svg-icon {
  color: white;
  width: 17px;
  height: 17px;
}
</style>
