import { defineStore } from 'pinia'
import { ref } from 'vue'
import { StatusCodes } from '@/services/Base/constants'
import productService from '@/services/Product/service'
import type { TProduct } from '../products/types'
import type { TServerError } from '@/services/Base/types'

const usePopularProductsStore = defineStore('popular-products', () => {
    const products = ref<TProduct[]>([])
    const loading = ref(false)
    const error = ref<null | string>(null)

    const getProducts = async () => {
        try {
            loading.value = true

            // mocked big loading time
            await new Promise((res) => {
                setTimeout(() => {
                    res(1)
                }, 2000)
            })

            const { status, payload } = await productService.getPopularProducts()

            if (status === StatusCodes.ok) {
                products.value = payload
                return
            }

            error.value = (payload as unknown as TServerError).error
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    return { products, loading, error, getProducts }
})

export default usePopularProductsStore
