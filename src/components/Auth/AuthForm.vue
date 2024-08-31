<template>
    <LoginForm v-if="isLoginForm" />
    <SignUpForm v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LoginForm from './LoginForm.vue'
import SignUpForm from './SignUpForm.vue'
import { AuthFormTypes } from '@/stores/authModal/types'
import useAuthModal from '@/stores/authModal'

const store = useAuthModal()

const isLoginForm = computed(() => store.currentFormType === AuthFormTypes.LOGIN)
</script>

<style scoped></style>
