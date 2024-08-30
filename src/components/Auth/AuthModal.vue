<template>
    <CustomModal v-model:isOpen="store.isModalOpen">
        <template v-slot:title>
            <h3 class="title">Sign in</h3>
        </template>
        <template v-slot:body>
            <AuthForm />
        </template>
    </CustomModal>
</template>
<script setup lang="ts">
// todo: make the auth modal title changing when the auth modal type changing
import useAuthModal from '@/stores/authModal'
import CustomModal from '../UI/CustomModal.vue'
import AuthForm from './AuthForm.vue'
const store = useAuthModal()
</script>
<style scoped>
.title {
    font-size: 24px;
    font-weight: bold;
    line-height: 24px;
    width: 100%;
}
</style>
