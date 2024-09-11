<template>
    <input class="input" v-model="model" />
</template>
<script setup lang="ts">
const model = defineModel<string>()
</script>
<style scoped>
.input {
    border: 1px solid var(--neutral-black-b100);
    border-radius: 6px;
    padding: 10px 15px;
    width: 100%;
    height: 45px;
}

.input:focus {
    border-color: var(--neutral-black-b900);
}
</style>
