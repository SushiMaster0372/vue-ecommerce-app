<template>
    <div class="layout">
        <AppHeader />
        <slot></slot>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader.vue'
</script>

<style scoped></style>
