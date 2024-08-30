<template>
    <form class="auth__form" @submit.prevent="onSubmit">
        <a target="_blank" href="https://google.com" class="auth__form__google">
            <GoogleIcon />
            <span>Continue with Google</span>
        </a>
        <div class="divider">
            <div class="divier__line" />
            <span class="divider__text">OR</span>
            <div class="divier__line" />
        </div>
        <label for="email">Email</label>
        <CustomInput placeholder="Enter your email" name="email" />
        <label for="password">Password</label>
        <CustomInput placeholder="Enter your password" type="password" name="password" />
        <button class="forgot__password">Forgot Password?</button>
        <button type="submit" class="submit__button">Login</button>
        <span class="sign__up__text"
            >Don't have an account?
            <button @click="$emit('changeFormType')" type="button">Sign up</button></span
        >
    </form>
</template>
<script lang="ts" setup>
import GoogleIcon from '../Icons/GoogleIcon.vue'
import CustomInput from '../UI/CustomInput.vue'

defineEmits<{
    (e: 'changeFormType'): void
}>()

const onSubmit = (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement)
    const formDataValues = Object.fromEntries(formData)
    console.log(formDataValues) // todo: add sign in request logic
}
</script>
<style scoped>
.auth__form {
    background: transparent;
    display: flex;
    flex-direction: column;
    min-width: 320px;
}

.auth__form__google {
    border: 1px solid var(--neutral-black-b200);
    border-radius: 4px;
    padding: 12px 24px;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-black-b500);
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
}

.divider {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 34px;
}

.divier__line {
    background-color: var(--neutral-black-b100);
    width: 40%;
    height: 2px;
}

.divider__text {
    font-weight: 500;
    font-size: 12px;
    line-height: 200%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--neutral-black-b500);
}

.auth__form label {
    font-weight: 600;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-black-b600);
}

.auth__form input {
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

.submit__button {
    border-radius: 4px;
    padding: 12px 24px;
    width: 100%;
    background: var(--neutral-black-b900);
    font-weight: 500;
    font-size: 14px;
    line-height: 175%;
    color: var(--neutral-white-w900);
    margin-bottom: 24px;
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
</style>
