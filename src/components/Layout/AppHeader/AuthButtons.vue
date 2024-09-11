<template>
    <div class="buttons__wrapper">
        <button v-if="authStore.isLoggedIn" class="profile__btn" @click="onOpen">
            <FontAwesomeIcon :icon="faCircleUser" class="user__icon" />
        </button>
        <CustomButton
            v-else
            theme="bordered"
            @click="authModalStore.openAuthModal(AuthFormTypes.LOGIN)"
            >Login</CustomButton
        >
        <CustomDropDownList v-if="isShow" :closeDropDown="onClose">
            <button class="option" @click="onProfileClick">
                <span>Profile</span>
            </button>
            <button class="option" @click="onLogOutClick">
                <span>Log out</span>
                <FontAwesomeIcon :icon="faArrowRightFromBracket" class="logout__icon" />
            </button>
        </CustomDropDownList>
    </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/UI/CustomButton.vue'
import CustomDropDownList from '@/components/UI/CustomDropDownList.vue'
import useShow from '@/composable/useShow'
import { AppRoutes } from '@/router/routes'
import useAuthStore from '@/stores/auth'
import useAuthModal from '@/stores/authModal'
import { AuthFormTypes } from '@/stores/authModal/types'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons/faCircleUser'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRouter } from 'vue-router'

const router = useRouter()
const authModalStore = useAuthModal()
const authStore = useAuthStore()
const { isShow, onClose, onOpen } = useShow()

const onProfileClick = () => {
    router.push(AppRoutes.PROFILE_PAGE_URL)
    onClose()
}

const onLogOutClick = () => {
    authStore.logOut()
    onClose()
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

.user__icon {
    font-size: 22px;
}

.logout__icon {
    font-size: 20px;
    color: var(--neutral-black-b500);
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
