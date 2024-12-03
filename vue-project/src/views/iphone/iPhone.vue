<!-- 오늘 날짜: 2024-11-18 -->
<!-- test.vue: vue-echarts를 사용하여 기본 설정 및 샘플 차트 렌더링 -->

<template>
  <!-- Vuetify의 컨테이너 레이아웃을 정의 -->
  <v-container>
    <!-- 한 줄(row)에 포함될 열(col) 설정 -->
    <v-row>
      <v-col cols="12">
        <!-- vue-echarts를 사용하여 차트 렌더링 -->
        <v-chart
          :option="chartOptions"
          theme="dark"
          :autoresize="true"
          style="width: 100%; height: 400px"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
/* vue-echarts 컴포넌트를 임포트 */
import VChart from 'vue-echarts'

/* vue에서 제공하는 ref를 사용하여 반응형 데이터 선언 */
import { ref } from 'vue'

/* vue-echarts에서 제공하는 차트 테마 제공 */
import 'echarts/theme/dark'

// 차트 옵션 정의
const chartOptions = ref({
  title: {
    text: 'ECharts 샘플 차트', // 차트 제목
    subtext: 'Composition API 기반', // 차트 부제목
    left: 'center', // 제목 위치: 가운데 정렬
  },
  tooltip: {
    trigger: 'axis', // 툴팁 트리거를 축 데이터에 따라 활성화
  },
  xAxis: {
    type: 'category', // X축 데이터 유형: 카테고리(문자형 데이터)
    data: ['월', '화', '수', '목', '금', '토', '일'], // X축에 표시될 데이터(요일)
  },
  yAxis: {
    type: 'value', // Y축 데이터 유형: 수치형 데이터
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130], // Y축 데이터 값 배열
      type: 'bar', // 차트 유형: 막대 차트(bar chart)
    },
  ],
})
</script>
