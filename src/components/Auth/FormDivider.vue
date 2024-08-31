<template>
    <div class="divider">
        <div class="divier__line" />
        <span class="divider__text">OR</span>
        <div class="divier__line" />
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.divider {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 34px;
}

.divier__line {
    background-color: var(--neutral-black-b100);
    width: 40%;
    height: 2px;
}

.divider__text {
    font-weight: 500;
    font-size: 12px;
    line-height: 200%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--neutral-black-b500);
}
</style>
