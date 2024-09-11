<template>
    <LayoutContainer class="advantages">
        <div
            v-for="advantageItem in advantagesItems"
            :key="advantageItem.title"
            class="advantage__item"
        >
            <div class="icon__wrapper">
                <FontAwesomeIcon :icon="advantageItem.icon" class="icon" />
            </div>
            <span class="title">{{ advantageItem.title }}</span>
            <span class="description">{{ advantageItem.description }}</span>
        </div>
    </LayoutContainer>
</template>
<script setup lang="ts">
import LayoutContainer from '@/components/Layout/LayoutContainer.vue'
import { advantagesItems } from './constants'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<style scoped>
.advantages {
    display: flex;
    justify-content: space-between;
    padding-bottom: 48px;
}
.advantage__item {
    padding: 16px 0 49px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    max-width: 270px;
}
.icon__wrapper {
    display: grid;
    place-items: center;
    width: fit-content;
    border-radius: 100px;
    padding: 12px;
    background: var(--neutral-white-w100);
    margin-bottom: 24px;
}
.icon {
    font-size: 22px;
    color: var(--neutral-black-b700);
    fill: var(--neutral-black-b700);
}
.title {
    font-weight: 600;
    font-size: 16px;
    color: var(--neutral-black-b800);
    margin-bottom: 12px;
}
.description {
    font-weight: 400;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-black-b500);
}
</style>
