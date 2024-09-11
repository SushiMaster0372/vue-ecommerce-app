import type { TCategory } from '@/stores/categories/types'
import { BaseService } from '../Base/service'
import { CATEGORIES_API_URL, POPULAR_PRODUCTS_API_URL } from './config'
import type { TProduct } from '@/stores/products/types'

class ProductService extends BaseService {
    getCategories = async () => {
        return await this.fetchExtended({
            url: CATEGORIES_API_URL
        }).then((res) => this.handleResponse<TCategory[]>(res))
    }

    getPopularProducts = async () => {
        return await this.fetchExtended({
            url: POPULAR_PRODUCTS_API_URL
        }).then((res) => this.handleResponse<TProduct[]>(res))
    }
}

const productService = new ProductService()

export default productService
