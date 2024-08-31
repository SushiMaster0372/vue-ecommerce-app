<template>
    <form class="sign__up__form" @submit.prevent="onSubmit">
        <GoogleAuthLink class="sign__up__google" href="https://google.com" />
        <FormDivider />
        <label for="fullName">Full name</label>
        <CustomInput placeholder="Enter your full name" name="fullName" id="fullName" />
        <label for="email">Email</label>
        <CustomInput placeholder="Enter your email" name="email" id="email" />
        <label for="password">Password</label>
        <CustomInput
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
        />
        <span class="policy__text">
            By creating an account you agree with our Terms of {{ '\n' }} Service, Privacy Policy
        </span>
        <CustomButton
            type="submit"
            class="submit__button"
            :disabled="authStore.loading"
            :loading="authStore.loading"
            >Create account</CustomButton
        >
        <span class="sign__in__text"
            >Already have an account?
            <button @click="authModalStore.changeFormType" type="button">Log in</button></span
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
import type { TCredentialsWithFullName } from '@/services/Auth/service'

const authModalStore = useAuthModal()
const authStore = useAuthStore()

const onSubmit = (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement)
    const formDataValues = Object.fromEntries(formData) as TCredentialsWithFullName
    authStore.sighUp(formDataValues)
}
</script>
<style scoped>
.sign__up__form {
    background: transparent;
    display: flex;
    flex-direction: column;
    min-width: 320px;
}

.sign__up__google {
    margin-bottom: 32px;
}

.sign__up__form label {
    font-weight: 600;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-black-b600);
}

.sign__up__form input {
    margin-bottom: 16px;
}

.policy__text {
    font-weight: 500;
    font-size: 12px;
    line-height: 200%;
    color: var(--neutral-black-b600);
    margin-bottom: 24px;
    white-space: pre-line;
}

.submit__button {
    margin-bottom: 24px;
    height: 44px;
}

.sign__in__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-black-b500);
    align-self: center;
}

.sign__in__text button {
    text-decoration: underline;
}
.sign__in__text button:hover {
    opacity: 0.7;
}
</style>
