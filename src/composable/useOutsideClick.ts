import { onMounted, onUnmounted, type Ref } from 'vue'

type TProps = {
    elementRef: Ref<HTMLElement | null>
    callback: (event?: MouseEvent) => void
}

const useOutsideClick = ({ elementRef, callback }: TProps) => {
    const handleClick = (event: MouseEvent) => {
        if (elementRef.value && !elementRef.value.contains(event.target as Node)) {
            callback(event)
        }
    }

    onMounted(() => {
        document.addEventListener('mousedown', handleClick)
    })

    onUnmounted(() => {
        document.removeEventListener('mousedown', handleClick)
    })
}

export default useOutsideClick
