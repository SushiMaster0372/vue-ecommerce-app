<template>
    <ul class="categories">
        <li v-for="category in categortiesStore.categories" :key="category.id">
            <RouterLink
                :to="`${AppRoutes.STORE_PAGE_URL}/${category.id}`"
                class="category"
                @click="closeDropDown"
            >
                <span>{{ category.name }}</span>
                <FontAwesomeIcon :icon="faAngleRight" />
            </RouterLink>
        </li>
    </ul>
</template>
<script lang="ts" setup>
import { AppRoutes } from '@/router/routes'
import useCategoriesStore from '@/stores/categories'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'

defineProps<{
    closeDropDown: () => void
}>()

const categortiesStore = useCategoriesStore()
</script>
<style scoped>
.categories {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-template-rows: auto;
    background-color: var(--neutral-white-w900);
}

.category {
    padding: 10px;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid var(--neutral-black-b300);
    font-weight: 500;
    font-size: 16px;
    line-height: 175%;
    color: var(--neutral-black-b500);
}

.category:last-child {
    border-bottom-color: transparent;
}

.category:hover {
    background-color: var(--neutral-black-b100);
}
</style>
