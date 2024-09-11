<template>
    <ProductsSwiper
        :products="popularProductsStore.products"
        :loading="popularProductsStore.loading"
        title="Popular products"
    />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import usePopularProductsStore from '@/stores/popularProducts'
import ProductsSwiper from '@/components/ProductsSwiper'

const popularProductsStore = usePopularProductsStore()

onMounted(() => {
    popularProductsStore.getProducts()
})
</script>
<style scoped></style>
