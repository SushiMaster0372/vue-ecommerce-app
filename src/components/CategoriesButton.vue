<template>
    <button class="categories__button" @click="handleOpen">
        <span>Categories</span>
        <AngleDownIcon className="anlge__icon" :class="{ open: isOpen }" />
    </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import AngleDownIcon from './Icons/AngleDownIcon.vue'

const isOpen = ref(false)

const handleOpen = () => (isOpen.value = !isOpen.value)
</script>
<style scoped>
.categories__button {
    font-weight: 500;
    font-size: 16px;
    line-height: 175%;
    color: var(--neutral-black-b500);
    display: flex;
    align-items: center;
    gap: 14px;
}
.open {
    transform: rotate(180deg);
}
</style>
