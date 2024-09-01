<template>
    <div class="newsletter">
        <div class="newsletter__text__section">
            <h3 class="newsletter__title">Join Our Newsletter</h3>
            <p class="newsletter__description">
                We love to surprise our subscribers with occasional gifts.
            </p>
        </div>
        <form class="newsletter__form" @submit.prevent="onSubmit">
            <CustomInput placeholder="Your email address" class="email__input" name="email" />
            <CustomButton class="submit__button" type="submit">Subscribe</CustomButton>
        </form>
    </div>
</template>
<script setup lang="ts">
import CustomButton from '@/components/UI/CustomButton.vue'
import CustomInput from '@/components/UI/CustomInput.vue'

const onSubmit = (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement)
    const formDataValues = Object.fromEntries(formData) as { email: string }
    console.log(formDataValues)
}
</script>
<style scoped>
.newsletter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    margin-bottom: 75px;
}

.newsletter__text__section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    white-space: nowrap;
}

.newsletter__title {
    font-weight: 700;
    font-size: 24px;
}

.newsletter__description {
    font-weight: 400;
    font-size: 14px;
    line-height: 175%;
    text-align: center;
}

.newsletter__form {
    min-width: 200px;
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 45px;
}

.email__input {
    width: 100%;
    border: 1px solid var(--neutral-white-w900);
    border-radius: 6px;
    padding: 10px 15px;
}

.email__input::placeholder {
    color: var(--neutral-white-w900);
}

.email__input:focus {
    border-color: var(--neutral-white-w900);
}

.submit__button {
    border-radius: 4px;
    padding: 12px 24px;
    height: inherit;
    max-width: 114px;
    background-color: var(--neutral-white-w900);
    color: var(--neutral-black-b900);
}

.submit__button:hover {
    background-color: var(--neutral-white-w900);
    color: var(--neutral-black-b900);
}
</style>
