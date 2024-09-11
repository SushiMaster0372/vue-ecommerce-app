<template>
    <div class="product__card">
        <div class="image__wrapper">
            <img :src="product.image" :alt="`${product.title} image`" @error="replaceImage" />
            <button
                class="favourites__button"
                @mouseenter="onFavouritesMouseEnter"
                @mouseleave="onFavouritesMouseLeave"
            >
                <FontAwesomeIcon :icon="faHeart" class="favourites__icon" :beat="beatEffect" />
            </button>
        </div>
        <span class="product__title" :title="product.title">
            {{ product.title }}
        </span>
        <div class="product__info">
            <div class="product__status">In stock</div>
            <span class="product__price">${{ product.price }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { TProduct } from '@/stores/products/types'
import replaceImage from '@/utils/replaceImage'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

defineProps<{
    product: TProduct
}>()

const beatEffect = ref(false)

const onFavouritesMouseEnter = () => {
    beatEffect.value = true
}
const onFavouritesMouseLeave = () => {
    beatEffect.value = false
}
</script>
<style scoped>
.product__card {
    padding: 12px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    cursor: pointer;
}

.image__wrapper {
    padding: 24px;
    display: grid;
    place-items: center;
    height: 312px;
    border: 1px solid var(--neutral-black-b900);
    border-radius: 4px;
    margin-bottom: 24px;
    overflow: hidden;
    position: relative;
}

.image__wrapper img {
    object-fit: fill;
    width: 100%;
    height: auto;
}

.favourites__button {
    position: absolute;
    right: 15px;
    top: 10px;
    padding: 4px;
}
.favourites__icon {
    font-size: 20px;
}
.favourites__button:hover .favourites__icon {
    color: var(--semantic-red-r800);
    fill: var(--semantic-red-r800);
}

.product__title {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--neutral-black-b900);
    /* display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; */
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    margin-bottom: 12px;
}

.product__info {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
}

.product__status {
    border: 1px solid var(--neutral-black-b900);
    border-radius: 100px;
    padding: 2px 16px;
    font-weight: 500;
    font-size: 12px;
    line-height: 200%;
    text-transform: capitalize;
    color: var(--neutral-black-b900);
}

.product__price {
    font-weight: 400;
    font-size: 14px;
    line-height: 175%;
    text-align: center;
    color: var(--neutral-black-b600);
}
</style>
