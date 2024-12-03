<template>
  <!-- vue-echarts의 v-chart 컴포넌트 사용 -->
  <v-chart
    :option="options"
    :theme="theme"
    :autoresize="autoresize"
    :initOptions="initOptions"
    style="width: 100%; height: 400px"
  />
</template>

<script setup>
/**
 * ECharts 공용 컴포넌트
 * - props를 통해 부모로부터 데이터를 받아 렌더링
 * - 전역 등록된 vue-echarts의 v-chart 사용
 */

const props = defineProps({
  options: {
    // 차트 옵션: ECharts의 필수 옵션
    type: Object,
    required: true, // 반드시 부모 컴포넌트에서 전달해야 함
  },
  theme: {
    // ECharts 테마 (light, dark 등)
    type: [String, Object],
    default: 'light', // 기본값: 'light'
  },
  autoresize: {
    // 창 크기 변경에 따라 차트 크기를 자동으로 조정
    type: Boolean,
    default: true, // 기본값: true
  },
  initOptions: {
    // 초기화 옵션: ECharts 초기화 시 추가 설정 가능
    type: Object,
    default: () => ({}), // 기본값: 빈 객체
  },
})
</script>
