import authService, {
    type TCredentials,
    type TCredentialsWithFullName
} from '@/services/Auth/service'
import type { TUser } from '@/services/Auth/types'
import { StatusCodes, StorageKeyNames } from '@/services/Base/constants'
import type { TServerError } from '@/services/Base/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import useAuthModal from './authModal'

const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(false)
    const user = ref<TUser | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)
    const authModalStore = useAuthModal()

    const signIn = async (creadentials: TCredentials) => {
        try {
            loading.value = true
            const { status, payload } = await authService.login(creadentials)

            if (status === StatusCodes.created) {
                isLoggedIn.value = true
                user.value = payload.data
                localStorage.setItem(StorageKeyNames.AUTH_TOKEN, payload.token)
                authModalStore.closeAuthModal()
                return
            }
            error.value = (payload as unknown as TServerError).error
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    const sighUp = async (creadentials: TCredentialsWithFullName) => {
        try {
            loading.value = true
            const { status, payload } = await authService.signUp(creadentials)

            if (status === StatusCodes.created) {
                isLoggedIn.value = true
                user.value = payload.data
                localStorage.setItem(StorageKeyNames.AUTH_TOKEN, payload.token)
                authModalStore.closeAuthModal()
                return
            }

            error.value = (payload as unknown as TServerError).error
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    const logOut = () => {
        isLoggedIn.value = false
        user.value = null
        localStorage.removeItem(StorageKeyNames.AUTH_TOKEN)
    }

    const checkAuth = async () => {
        try {
            const token = localStorage.getItem(StorageKeyNames.AUTH_TOKEN)
            if (!token) return

            loading.value = true
            const { status, payload } = await authService.checkAuth()

            if (status === StatusCodes.ok) {
                isLoggedIn.value = true
                user.value = payload
                return
            }

            logOut()
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    return { isLoggedIn, user, loading, signIn, sighUp, logOut, checkAuth }
})

export default useAuthStore
