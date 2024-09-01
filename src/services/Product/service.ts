import type { TCategory } from '@/stores/categories/types'
import { BaseService } from '../Base/service'
import { CATEGORIES_API_URL } from './config'

class ProductService extends BaseService {
    getCategories = async () => {
        return await this.fetchExtended({
            url: CATEGORIES_API_URL
        }).then((res) => this.handleResponse<TCategory[]>(res))
    }
}

const productService = new ProductService()

export default productService
