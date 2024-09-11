<template>
    <div class="layout__container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.layout__container {
    max-width: var(--layout-max-width);
    width: 100%;
    margin: 0 auto;
    padding: var(--layout-paddings);
}
</style>
