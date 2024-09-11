<template>
    <section class="main__page">
        <HeroSection />
        <Advantages />
        <PopularProducts />
    </section>
</template>

<script setup lang="ts">
import HeroSection from './HeroSection.vue'
import Advantages from './Advantages'
import PopularProducts from './PopularProducts/PopularProducts.vue'
</script>

<style scoped>
.main__page {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 180px;
}
</style>
