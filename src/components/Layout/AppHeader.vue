<template>
    <header class="app__header">
        <button class="catalogs">Все каталоги</button>
        <div class="logo">
            <RouterLink :to="HOME_PAGE">
                <img :src="logo" alt="" width="500" height="105" />
            </RouterLink>
        </div>
        <div class="right__section">
            <button class="login__btn">Войти</button>
            <button class="cart__btn">Корзина</button>
        </div>
    </header>
</template>

<script setup lang="ts">
import logo from '@/assets/logo-no-background.svg'
import { HOME_PAGE } from '@/router'
import { RouterLink } from 'vue-router'
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
}
</style>
