<template>
    <form class="login__form" @submit.prevent="onSubmit">
        <GoogleAuthLink class="login__google" href="https://google.com" />
        <FormDivider />
        <label for="email">Email</label>
        <CustomInput placeholder="Enter your email" name="email" id="email" />
        <label for="password">Password</label>
        <CustomInput
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
        />
        <button class="forgot__password">Forgot Password?</button>
        <CustomButton
            type="submit"
            class="submit__button"
            :disabled="authStore.loading"
            :loading="authStore.loading"
            >Login</CustomButton
        >
        <span class="sign__up__text"
            >Don't have an account?
            <button @click="authModalStore.changeFormType" type="button">Sign up</button></span
        >
    </form>
</template>
<script lang="ts" setup>
import useAuthModal from '@/stores/authModal'
import CustomInput from '../UI/CustomInput.vue'
import GoogleAuthLink from './GoogleAuthLink.vue'
import FormDivider from './FormDivider.vue'
import CustomButton from '../UI/CustomButton.vue'
import useAuthStore from '@/stores/auth'
import type { TCredentials } from '@/services/Auth/service'

const authModalStore = useAuthModal()
const authStore = useAuthStore()

const onSubmit = (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement)
    const formDataValues = Object.fromEntries(formData) as TCredentials
    authStore.signIn(formDataValues)
}
</script>
<style scoped>
.login__form {
    background: transparent;
    display: flex;
    flex-direction: column;
    min-width: 320px;
}

.login__google {
    margin-bottom: 32px;
}

.login__form label {
    font-weight: 600;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-black-b600);
}

.login__form input {
    margin-bottom: 16px;
}

.forgot__password {
    font-weight: 500;
    font-size: 12px;
    line-height: 200%;
    text-transform: capitalize;
    color: var(--neutral-black-b600);
    margin-bottom: 24px;
    align-self: flex-end;
}

.forgot__password:hover {
    opacity: 0.7;
}

.submit__button {
    margin-bottom: 24px;
    height: 44px;
}

.sign__up__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-black-b500);
    align-self: center;
}

.sign__up__text button {
    text-decoration: underline;
}
.sign__up__text button:hover {
    opacity: 0.7;
}
</style>
