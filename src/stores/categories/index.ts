import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TCategory } from './types'
import productService from '@/services/Product/service'
import { StatusCodes } from '@/services/Base/constants'
import type { TServerError } from '@/services/Base/types'

const useCategoriesStore = defineStore('categories', () => {
    const loading = ref(false)
    const error = ref<string | null>(null)
    const categories = ref<TCategory[]>([])

    const getCategories = async () => {
        try {
            loading.value = true
            const { payload, status } = await productService.getCategories()

            if (status === StatusCodes.ok) {
                categories.value = payload
                return
            }

            error.value = (payload as unknown as TServerError).error
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
    }

    return { loading, error, categories, getCategories }
})

export default useCategoriesStore
