// plugins/vuetify/index.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // mdi 아이콘 패키지 추가
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // 기본 아이콘 세트를 mdi로 설정
  },
})
