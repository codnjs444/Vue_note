import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify/index' // 방금 만든 vuetify 설정 파일을 가져옵니다.

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify) // Vuetify를 Vue 앱에 추가합니다.
app.mount('#app')
