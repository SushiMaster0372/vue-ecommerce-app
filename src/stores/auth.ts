import { defineStore } from 'pinia'
import { ref } from 'vue'

const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(false)
    const user = ref(null)

    const signIn = () => {
        try {
        } catch (e) {
            console.log(e)
        }
    }

    const sighUp = () => {
        try {
        } catch (e) {
            console.log(e)
        }
    }

    const logOut = () => {}

    return { isLoggedIn, user, signIn, sighUp, logOut }
})

export default useAuthStore
