<template>안녕</template>

<script setup>
/* 🛠️ BaseView로부터 Composition API 메서드 가져오기 */
import BaseView from '@/components/base/BaseView'

const { ref, computed, onMounted, watchEffect, useRoute, useRouter } = BaseView()

onMounted(() => {
  console.log('🚀 Mac Mounted')
  console.log('📍 Current Route Path:', route.path)
  console.log('📍 Current Route Name:', route.name)
})
</script>

<style lang="scss" scoped></style>
