<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="8" class="text-center">
        <h1>Store Page</h1>
        <h1>Store Page</h1>
        <p>Welcome to the Store section. This is a placeholder content for testing purposes.</p>
        <v-btn color="primary" @click="handleTestClick">Click Me</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const handleTestClick = () => {
  console.log('Test button clicked!')
}
</script>

<style scoped>
h1 {
  color: #1976d2;
  font-weight: bold;
}

p {
  font-size: 18px;
  color: #555;
}

.v-btn {
  margin-top: 20px;
}
</style>
