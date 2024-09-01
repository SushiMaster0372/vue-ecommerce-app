<!-- DropDown.vue -->
<template>
    <div class="dropdown" ref="dropDownRef" :class="dropdownPositionClass">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import useOutsideClick from '@/composable/useOutsideClick'
import { ref, computed } from 'vue'

const props = withDefaults(
    defineProps<{
        closeDropDown: () => void
        position?: 'bottom-left' | 'bottom-right'
    }>(),
    { position: 'bottom-right' }
)

const dropDownRef = ref<HTMLElement | null>(null)
useOutsideClick({ elementRef: dropDownRef, callback: props.closeDropDown })

const dropdownPositionClass = computed(() => `dropdown-${props.position}`)
</script>

<style scoped>
.dropdown {
    position: absolute;
    min-width: 150px;
    border-radius: 8px;
    padding: 10px 0;
    /* -webkit-box-shadow: -1px 10px 59px -1px rgba(0, 0, 0, 0.59);
    -moz-box-shadow: -1px 10px 59px -1px rgba(0, 0, 0, 0.59);
    box-shadow: -1px 10px 59px -1px rgba(0, 0, 0, 0.59); */
    box-shadow: 0 15px 25px #0003;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.dropdown-bottom-right {
    top: 100%;
    right: 0;
}

.dropdown-bottom-left {
    top: 100%;
    left: 0;
}
</style>
