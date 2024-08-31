<template>
    <div class="layout">
        <DiscountInfo />
        <AppHeader />
        <slot></slot>
        <AppFooter />
        <AuthModal />
    </div>
</template>

<script setup lang="ts">
import AuthModal from '../Auth/AuthModal.vue'
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader/AppHeader.vue'
import DiscountInfo from './DiscountInfo.vue'
</script>

<style scoped></style>
