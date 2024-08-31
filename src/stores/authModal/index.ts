import { defineStore } from 'pinia'
import { ref } from 'vue'
import { AuthFormTypes } from './types'

export const useAuthModal = defineStore('authModal', () => {
    const isModalOpen = ref(false)
    const currentFormType = ref<AuthFormTypes>(AuthFormTypes.LOGIN)

    const openAuthModal = (formType?: AuthFormTypes) => {
        isModalOpen.value = true
        if (formType) currentFormType.value = formType
    }

    const closeAuthModal = () => {
        isModalOpen.value = false
    }

    const changeFormType = () => {
        currentFormType.value === AuthFormTypes.LOGIN
            ? (currentFormType.value = AuthFormTypes.SIGN_UP)
            : (currentFormType.value = AuthFormTypes.LOGIN)
    }

    return { isModalOpen, openAuthModal, closeAuthModal, currentFormType, changeFormType }
})

export default useAuthModal
