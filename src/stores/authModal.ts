import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthModal = defineStore('authModal', () => {
    const isModalOpen = ref(false)

    const openAuthModal = () => {
        isModalOpen.value = true
    }

    const closeAuthModal = () => {
        isModalOpen.value = false
    }

    return { isModalOpen, openAuthModal, closeAuthModal }
})

export default useAuthModal
