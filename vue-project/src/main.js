// 📂 main.js
// ====================================================================================
// 📌 Vue 애플리케이션 설정
// - Vue 앱을 생성하고, 주요 플러그인(Pinia, Router, Vuetify)을 추가합니다.
// - 최종적으로 앱을 DOM에 마운트하여 렌더링합니다.
// ====================================================================================

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify' // 🎨 Vuetify 플러그인 설정 파일 가져오기
import ECharts from 'vue-echarts'

import echartCore from './components/echart/echart-core' // ✏️ ECharts core 설정
/** ✏️ Common Components */
import GlobalComponents from '@/components/index'

// 🚀 Vue 애플리케이션 인스턴스 생성
const app = createApp(App)

// 📦 Pinia 상태 관리 추가
app.use(createPinia())

// 🎨 Vuetify UI 라이브러리 추가
app.use(vuetify)

app.use(GlobalComponents)

// 🌐 Vue Router 추가
app.use(router)

// 📊 ECharts 설정 추가
app.config.globalProperties.$echarts = echartCore
app.component(ECharts)

// 📌 #app 엘리먼트에 앱 마운트
app.mount('#app')
