<template>
  <v-container>
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="username" label="Username" outlined required></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            outlined
            required
          ></v-text-field>
          <v-btn @click="handleLogin" color="primary">Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { login } from '../../stores/api/authApi.js'

export default {
  data() {
    return {
      username: '', // 사용자 이름
      password: '', // 비밀번호
    }
  },
  methods: {
    async handleLogin() {
      try {
        const response = await login(this.username, this.password)
        alert(response) // 로그인 성공 메시지
      } catch (error) {
        alert(error) // 오류 메시지
      }
    },
  },
}
</script>
