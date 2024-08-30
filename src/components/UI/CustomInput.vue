<template>
    <input class="input" :value="modelValue" @input="onChange" />
</template>
<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

interface TProps extends /* @vue-ignore */ InputHTMLAttributes {
    modelValue?: string
}

defineProps<TProps>()

const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void
}>()

const onChange = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
<style scoped>
.input {
    border: 1px solid var(--neutral-black-b100);
    border-radius: 6px;
    padding: 10px 15px;
    width: 100%;
    height: 45px;
}
</style>
