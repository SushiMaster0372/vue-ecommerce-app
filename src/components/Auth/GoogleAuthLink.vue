<template>
    <a target="_blank" class="google__auth__button">
        <GoogleIcon />
        <span>Continue with Google</span>
    </a>
</template>
<script lang="ts" setup>
import GoogleIcon from '../Icons/GoogleIcon.vue'
</script>
<style scoped>
.google__auth__button {
    border: 1px solid var(--neutral-black-b200);
    border-radius: 4px;
    padding: 12px 24px;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-black-b500);
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
}
</style>
