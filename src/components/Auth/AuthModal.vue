<template>
    <CustomModal v-model:isOpen="store.isModalOpen">
        <template v-slot:title>
            <h3 class="title">{{ modalTitle }}</h3>
        </template>
        <template v-slot:body>
            <AuthForm />
        </template>
    </CustomModal>
</template>
<script setup lang="ts">
import useAuthModal from '@/stores/authModal'
import CustomModal from '../UI/CustomModal.vue'
import AuthForm from './AuthForm.vue'
import { AuthFormTypes } from '@/stores/authModal/types'
import { computed } from 'vue'
const store = useAuthModal()

const modalTitle = computed(() =>
    store.currentFormType === AuthFormTypes.LOGIN ? 'Login' : 'Sign up'
)
</script>
<style scoped>
.title {
    font-size: 24px;
    font-weight: bold;
    line-height: 24px;
    width: 100%;
}
</style>
