<template>
    <button class="categories__button" @click="handleOpen">
        <span>Categories</span>
        <FontAwesomeIcon
            :icon="faAngleDown"
            class="icon"
            :rotation="isOpen ? 180 : undefined"
            fixed-width
        />
    </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
    gap: 10px;
}

.icon {
    transition: transform 0.4s ease;
}

.categories__button:hover,
.categories__button:hover .icon {
    color: var(--semantic-red-r800);
}
</style>
