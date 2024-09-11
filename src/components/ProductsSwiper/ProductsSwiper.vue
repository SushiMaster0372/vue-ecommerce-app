<template>
    <LayoutContainer>
        <h2 v-if="!!title" class="popular__title">{{ title }}</h2>
        <SkeletonProducts v-if="loading" />
        <Swiper
            v-else
            :slides-per-view="4"
            :space-between="20"
            :autoplay="{ delay: 1000 }"
            :breakpoints="{
                1100: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                950: {
                    slidesPerView: 3.5,
                    spaceBetween: 20
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }"
        >
            <SwiperSlide v-for="product in products" :key="product.id">
                <ProductItem :product="product" />
            </SwiperSlide>
        </Swiper>
    </LayoutContainer>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import LayoutContainer from '../Layout/LayoutContainer.vue'
import type { TProduct } from '@/stores/products/types'
import SkeletonProducts from './SkeletonProducts.vue'
import ProductItem from './ProductItem.vue'

defineProps<{
    title?: string
    loading: boolean
    products: TProduct[]
}>()
</script>
<style scoped>
.popular__title {
    font-weight: 700;
    font-size: 24px;
    color: var(--neutral-black-b900);
    text-align: center;
    margin-bottom: 50px;
}
</style>
