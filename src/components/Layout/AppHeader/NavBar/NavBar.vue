<template>
    <nav>
        <ul class="nav__items__wrapper">
            <li v-for="navItem in navItems" :key="navItem.label">
                <RouterLink v-if="!!navItem.link" :to="navItem.link" class="nav__item">{{
                    navItem.label
                }}</RouterLink>
                <component v-else :is="navItem.component" />
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import navItems from './constants'
</script>
<style>
.nav__items__wrapper {
    display: flex;
    align-items: center;
    gap: 32px;
}
.nav__item {
    font-weight: 500;
    font-size: 16px;
    line-height: 175%;
    color: var(--neutral-black-b500);
    transition: all 0.2s ease-in-out;
}

.nav__item:hover {
    color: var(--semantic-red-r800);
}
</style>
