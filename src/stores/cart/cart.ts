import { StatusCodes } from '@/services/Base/constants'
import cartService from '@/services/Cart/service'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TCartItem } from './types'
import type { TServerError } from '@/services/Base/types'

const useCartStore = defineStore('cart', () => {
    const loading = ref(false)
    const error = ref<null | string>(null)
    const cartItems = ref<TCartItem[]>([])

    const getCartItems = async () => {
        try {
            loading.value = true
            const { status, payload } = await cartService.getCart()

            if (status === StatusCodes.ok) {
                cartItems.value = payload
                return
            }

            error.value = (payload as unknown as TServerError).error
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    return { loading, error, cartItems, getCartItems }
})

export default useCartStore
