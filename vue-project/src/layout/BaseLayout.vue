<!-- BaseLayout.vue -->
<template>
  <v-app>
    <BaseHeader />
  </v-app>
</template>

<script setup>
import BaseView from '@/components/base/BaseView'
import BaseHeader from './header/BaseHeader.vue'

const { ref, computed } = BaseView()
</script>
