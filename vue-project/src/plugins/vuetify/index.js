// src/plugins/vuetify.js
import 'vuetify/styles' // Vuetify의 기본 스타일을 가져옵니다
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Vuetify의 아이콘 설정

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
