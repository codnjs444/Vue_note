/**
 * ================================================================================================
 * 👉 Base View Composition Function
 *    Vue Composition API 기능을 공통적으로 사용할 수 있도록 제공하는 함수입니다.
 *
 *    포함된 기능:
 *    - 📌 [Vue Lifecycle Hooks]: Vue 생명주기 훅 제공
 *    - 📌 [Router 기능]: Vue Router를 통한 경로 및 라우터 관리
 *    - 📌 [Reactive State 관리]: 반응형 상태 관리
 *    - 📌 [Utility Functions]: 다국어, 푸쉬알람 등의 유틸리티 함수 추가 가능
 * ================================================================================================
 */

// prettier-ignore
import {
  ref, reactive, shallowRef, provide, inject, onBeforeMount, onMounted, onBeforeUpdate,
  onUpdated, onBeforeUnmount, onUnmounted, watch, watchEffect, computed, mergeProps, defineExpose
} from 'vue'

import { useRouter, useRoute } from 'vue-router' // 🔄 Vue Router 사용을 위한 훅 가져오기
import router from '@/router' // 🌐 전역 라우터 인스턴스 가져오기

// 🔹 BaseView - 공통적으로 사용할 Composition API 함수
export default function useBaseView() {
  /**
   * 🔸 State 선언
   * - `title`: 기본 제목을 담는 상태
   * - `description`: 기본 설명을 담는 상태
   */
  const title = ref('Base View Title')
  const description = ref('This is a simplified description.')

  /**
   * 🔸 Router 사용
   * - `useRouter`: Vue Router 인스턴스 접근
   * - `useRoute`: 현재 경로 정보 접근
   */
  const router = useRouter()
  const route = useRoute()

  /**
   * 🔸 Lifecycle Hook 예시
   * - onMounted: 컴포넌트가 마운트될 때 호출되며 현재 라우트 정보를 콘솔에 출력합니다.
   */
  onMounted(() => {
    console.log('🚀 BaseView Mounted')
    // console.log('📍 Current Route Path:', route.path)
    // console.log('📍 Current Route Name:', route.name)
  })

  /**
   * 🔹 반환 객체
   * - 외부에서 사용할 상태, 함수, Vue Composition API 기능을 반환합니다.
   */
  // prettier-ignore
  return {
    // 🌐 상태
    title, description,

    // 🌐 라우터
    router, route, router,

    // 🌐 Vue Composition API 기능
    ref, reactive, shallowRef, provide, inject, onBeforeMount, onMounted, onBeforeUpdate, 
    onUpdated, onBeforeUnmount, onUnmounted, watch, watchEffect, computed, mergeProps, defineExpose,
  }
}
