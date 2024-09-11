<template>
    <div class="skeleton__wrapper">
        <div v-for="item in skeletonItems" :key="item" class="skeleton__card">
            <div class="skeleton__image fast-gradient"></div>
            <div class="skeleton__title fast-gradient"></div>
            <div class="skeleton__info fast-gradient"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
const skeletonItems = Array.from({ length: 4 }).map((_, index) => index)
</script>
<style scoped>
.skeleton__wrapper {
    height: 419px;
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    overflow-x: hidden;
}

.skeleton__card {
    flex: 1;
    padding: 12px;
    display: flex;
    flex-direction: column;
    min-width: 251px;
}

.skeleton__image {
    height: 312px;
    margin-bottom: 24px;
    width: 100%;
}

.skeleton__title {
    width: 100%;
    height: 18px;
    margin-bottom: 12px;
}

.skeleton__info {
    width: 100%;
    height: 29px;
}

.fast-gradient {
    background-color: #ededed;
    background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 60%
        )
        #ededed;
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
    to {
        background-position-x: -20%;
    }
}
</style>
