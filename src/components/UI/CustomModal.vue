<template>
    <div class="modal" v-show="isOpen" @click="closeModal">
        <div class="modal-content" @click.stop>
            <div class="header">
                <slot name="title"></slot>
                <button class="close__button" @click="closeModal">
                    <FontAwesomeIcon :icon="faXmark" class="close__icon" />
                </button>
            </div>
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

defineProps<{
    isOpen: boolean
}>()
const emit = defineEmits<{
    (e: 'update:isOpen', value: boolean): void
}>()

const closeModal = () => {
    emit('update:isOpen', false)
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    background: white;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-width: 320px;
    max-width: 50vw;
    box-sizing: border-box;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.close__icon {
    font-size: 18px;
    color: var(--neutral-black-b500);
}

.close__button {
    background: transparent;
    padding: 2px;
    align-self: flex-end;
    width: fit-content;
    display: grid;
    place-items: center;
}
</style>
