<template>
    <DiscountInfo />
    <AppHeader />
    <main class="page__cotainer"><slot></slot></main>
    <AppFooter />
    <AuthModal />
</template>

<script setup lang="ts">
import AuthModal from '../Auth/AuthModal.vue'
import AppFooter from './AppFooter/AppFooter.vue'
import AppHeader from './AppHeader/AppHeader.vue'
import DiscountInfo from './DiscountInfo.vue'
</script>

<style scoped>
.page__cotainer {
    min-height: 50vh;
    height: 100%;
}
</style>
