<template>
    <LayoutContainer>
        <header class="app__header">
            <div class="logo">
                <RouterLink :to="AppRoutes.MAIN_PAGE_URL">
                    <img :src="logo" alt="" width="150" height="80" />
                </RouterLink>
            </div>
            <NavBar />
            <div class="right__section">
                <CartButton />
                <AuthButtons />
            </div>
        </header>
    </LayoutContainer>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'
import { RouterLink } from 'vue-router'
import NavBar from './NavBar/NavBar.vue'
import CartButton from './CartButton.vue'
import AuthButtons from './AuthButtons.vue'
import { AppRoutes } from '@/router/routes'
import LayoutContainer from '../LayoutContainer.vue'
</script>

<style scoped>
.app__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    gap: 40px;
}

.right__section {
    display: flex;
    align-items: center;
    gap: 25px;
    height: 28px;
}
</style>
