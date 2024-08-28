<template>
    <div class="buttons__wrapper">
        <button v-if="isAuth" class="profile__btn" @click="openDropDown"><UserIcon /></button>
        <button v-else @click="handleLogin" class="login__btn">Sign in</button>
        <div v-if="shopDropDown" class="dropdown" ref="dropDownRef">
            <button class="option" @click="onProfileClick">
                <span>Profile</span>
            </button>
            <button class="option" @click="onLogOutClick">
                <span>Log out</span>
                <LogoutIcon />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import LogoutIcon from '@/components/Icons/LogoutIcon.vue'
import UserIcon from '@/components/Icons/UserIcon.vue'
import useOutsideClick from '@/composable/useOutsideClick'
import { AppRoutes } from '@/router/routes'
import { ref, type VNodeRef } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAuth = ref(false)
const shopDropDown = ref(false)
const dropDownRef = ref<VNodeRef | null>(null) // TODO: make Dropdown component reusable and incapsulate some logic inside of it

const handleLogin = () => (isAuth.value = !isAuth.value)

const openDropDown = () => (shopDropDown.value = true)
const closeDropDown = () => (shopDropDown.value = false)

useOutsideClick({ elementRef: dropDownRef, callback: closeDropDown })

const onProfileClick = () => {
    router.push(AppRoutes.PROFILE_PAGE_URL)
    closeDropDown()
}

const onLogOutClick = () => {
    isAuth.value = false
    closeDropDown()
}
</script>

<style scoped>
.buttons__wrapper {
    position: relative;
    height: inherit;
}

.login__btn {
    padding: 0 20px;
    height: inherit;
    border-radius: 5px;
    border: 1px solid #000000;
    font-size: 12px;
    color: #000000;
    font-weight: 500;
    line-height: 20px;
    transition: all 0.2s ease-in;
    white-space: nowrap;
}

.login__btn:hover {
    background-color: #000000;
    color: #fff;
}

.profile__btn {
    display: grid;
    place-items: center;
    height: inherit;
}

.dropdown {
    position: absolute;
    right: 0;
    top: 110%;
    min-width: 150px;
    border-radius: 8px;
    padding: 10px 0;
    -webkit-box-shadow: -1px 10px 59px -1px rgba(0, 0, 0, 0.59);
    -moz-box-shadow: -1px 10px 59px -1px rgba(0, 0, 0, 0.59);
    box-shadow: -1px 10px 59px -1px rgba(0, 0, 0, 0.59);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.option {
    padding: 8px 15px;
    width: 100%;
    text-align: start;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.option:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
</style>
