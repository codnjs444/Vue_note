<template>
  <!-- 전역 등록된 e-chart를 사용 -->
  <e-chart
    :options="chartOptions"
    theme="dark"
    :autoresize="true"
    style="width: 100%; height: 400px"
  />
</template>

<script setup>
import { ref } from 'vue'

// 차트 옵션 정의
const chartOptions = ref({
  title: {
    text: '간단한 막대 차트',
    left: 'center', // 제목 위치
  },
  tooltip: {
    trigger: 'axis', // 축 데이터에 따라 툴팁 표시
  },
  xAxis: {
    type: 'category', // X축 유형
    data: ['월', '화', '수', '목', '금'], // X축 데이터
  },
  yAxis: {
    type: 'value', // Y축 유형
  },
  series: [
    {
      name: '매출', // 시리즈 이름
      type: 'bar', // 차트 유형: 막대 차트
      data: [120, 200, 150, 80, 70], // 데이터 값
    },
  ],
})
</script>
