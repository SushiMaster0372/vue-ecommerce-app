<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from '@/components/Layout/AppLayout.vue'
import { onMounted } from 'vue'
import useAuthStore from './stores/auth'
const authStore = useAuthStore()
onMounted(() => {
    authStore.checkAuth()
})
</script>

<template>
    <AppLayout>
        <RouterView />
    </AppLayout>
</template>

<style scoped></style>
