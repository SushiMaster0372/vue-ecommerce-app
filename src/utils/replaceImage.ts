import emptyImage from '@/assets/empty-image.png'

const replaceImage = (e: Event) => {
    const currentTarget = e.currentTarget as HTMLImageElement
    if (!currentTarget) return
    currentTarget.onerror = null
    currentTarget.src = emptyImage
}

export default replaceImage
