<template>
    <LoginForm v-if="isLoginForm" @changeFormType="changeFormType" />
    <span v-else class="sign__up__text"
        >Already have an account? <button @click="changeFormType">Login</button></span
    >
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import LoginForm from './LoginForm.vue'
import { AuthFormTypes } from './constants'

const currentFormType = ref<AuthFormTypes>(AuthFormTypes.LOGIN)
const isLoginForm = computed(() => currentFormType.value === AuthFormTypes.LOGIN)

const changeFormType = () => {
    currentFormType.value === AuthFormTypes.LOGIN
        ? (currentFormType.value = AuthFormTypes.SIGN_UP)
        : (currentFormType.value = AuthFormTypes.LOGIN)
}
</script>
<style scoped></style>
