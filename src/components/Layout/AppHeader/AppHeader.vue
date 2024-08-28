<template>
    <header class="app__header">
        <div class="logo">
            <RouterLink :to="HOME_PAGE">
                <img :src="logo" alt="" width="250" height="85" />
            </RouterLink>
        </div>
        <NavBar />
        <div class="right__section">
            <CartButton />
            <AuthButtons />
        </div>
    </header>
</template>

<script setup lang="ts">
import logo from '@/assets/logo-no-background.svg'
import { HOME_PAGE } from '@/router'
import { RouterLink } from 'vue-router'
import NavBar from './NavBar/NavBar.vue'
import CartButton from './CartButton.vue'
import AuthButtons from './NavBar/AuthButtons.vue'
</script>

<style scoped>
.app__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--layout-max-width);
    margin: 0 auto;
    padding: var(--layout-paddings);
    padding-top: 15px;
    padding-bottom: 15px;
    gap: 40px;
}

.right__section {
    display: flex;
    align-items: center;
    gap: 20px;
    height: 28px;
}
</style>
