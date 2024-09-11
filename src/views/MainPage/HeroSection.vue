<template>
    <div class="hero">
        <LayoutContainer class="hero__content">
            <div class="hero__decription">
                <h2 class="hero__title">Fresh Arrivals of <br />Men's Collection</h2>
                <span class="hero__subtitle">Discover Our Newest Collection.</span>
                <RouterLink :to="AppRoutes.STORE_CATEGORY_PAGE_URL" class="collection__link">
                    <span>View Collection</span>
                    <FontAwesomeIcon :icon="faArrowRight" />
                </RouterLink>
            </div>
            <div class="hero__image__section">
                <ShineIcon class="shine__icon" />
                <img :src="heroImage" alt="Men's collection image" class="hero__image" />
            </div>
        </LayoutContainer>
    </div>
</template>
<script setup lang="ts">
import LayoutContainer from '@/components/Layout/LayoutContainer.vue'
import { AppRoutes } from '@/router/routes'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import heroImage from '@/assets/hero-image.png'
import ShineIcon from '@/components/Icons/ShineIcon.vue'
</script>
<style scoped>
.hero {
    height: 440px;
    width: 100%;
    background: var(--neutral-white-w100);
    margin-bottom: 88px;
}

.hero__content {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero__image__section {
    width: 340px;
    height: 340px;
    border-radius: 50%;
    background-color: var(--neutral-white-w200);
    display: flex;
    align-self: flex-end;
}

.shine__icon:hover {
    fill: var(--neutral-black-b100);
    color: var(--neutral-black-b100);
}

.hero__image {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    margin-left: auto;
}

.hero__decription {
    display: flex;
    flex-direction: column;
}

.hero__title {
    font-weight: 600;
    font-size: 32px;
    letter-spacing: -0.04em;
    color: var(--neutral-black-b800);
    margin-bottom: 12px;
}

.hero__subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-black-b600);
    margin-bottom: 48px;
}

.collection__link {
    background: var(--neutral-black-b900);
    border-radius: 4px;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    font-weight: 500;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-white-w900);
    transition: background-color 0.3s ease-in;
}
.collection__link:hover {
    background-color: var(--neutral-black-b700);
}
.collection__link:active {
    transform: scale(0.95);
}
</style>
