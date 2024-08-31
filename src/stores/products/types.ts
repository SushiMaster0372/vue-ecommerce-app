export type TProduct = {
    id: number
    title: string
    price: number
    description: string
    category: string
    categoryId: number
    image: string
    rating: TProductRating
}

export type TProductRating = {
    rate: number
    count: number
}
