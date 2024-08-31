import type { TCartItem } from '@/stores/cart/types'
import { BaseService } from '../Base/service'
import { CART_API_URL } from './config'

class CartService extends BaseService {
    getCart = async () => {
        return await this.fetchExtended({
            url: CART_API_URL,
            isPrivate: true
        }).then((res) => this.handleResponse<TCartItem[]>(res))
    }
}

const cartService = new CartService()

export default cartService
