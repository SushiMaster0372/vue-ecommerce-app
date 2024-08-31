import type { TProduct } from '../products/types'

export type TCartItem = {
    quantity: number
} & TProduct
