// 📂 plugins/vuetify/index.js
// ====================================================================================
// 📌 Vuetify 플러그인 설정
// - Vuetify를 사용하여 프로젝트에 UI 컴포넌트를 추가하고 스타일을 통합합니다.
// - Material Design Icons (mdi) 아이콘 패키지를 포함하여 아이콘을 활용할 수 있도록 설정합니다.
// ====================================================================================

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // 🎨 Material Design Icons 패키지 추가
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components, // 📦 Vuetify 컴포넌트 등록
  directives, // 🔧 Vuetify 디렉티브 등록
  icons: {
    defaultSet: 'mdi', // 🖼️ 기본 아이콘 세트를 Material Design Icons (mdi)로 설정
  },
})
