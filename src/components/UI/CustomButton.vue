<template>
    <button :class="buttonClasses">
        <slot></slot>
        <FontAwesomeIcon v-if="loading" :icon="faCircleNotch" :spin="true" class="spinner__icon" />
    </button>
</template>

<script setup lang="ts">
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        theme?: 'filled' | 'bordered'
        loading?: boolean
    }>(),
    { theme: 'filled' }
)

const buttonClasses = computed(() => {
    return ['base-button', props.theme === 'bordered' ? 'button-bordered' : 'button-filled']
})
</script>

<style scoped>
.base-button {
    border-radius: 4px;
    padding: 2px 10px;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 175%;
    cursor: pointer;
    transition: all 0.3s;
}

.base-button:active {
    transform: scale(0.95);
}

.button-filled {
    background: var(--neutral-black-b900);
    color: var(--neutral-white-w900);
    border: none;
}

.button-filled:hover {
    background: var(--neutral-black-b700);
}

.button-filled:disabled {
    background-color: var(--neutral-black-b400);
    cursor: not-allowed;
}

.button-bordered {
    background: transparent;
    color: var(--neutral-black-b900);
    border: 1px solid var(--neutral-black-b900);
}

.button-bordered:hover:not(:disabled) {
    background: var(--neutral-black-b900);
    color: #fff;
}

.button-bordered:disabled {
    border-color: var(--neutral-black-b400);
    color: var(--neutral-black-b400);
    cursor: not-allowed;
}

.spinner__icon {
    margin-left: 10px;
}
</style>
