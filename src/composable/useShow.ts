import { ref } from 'vue'

const useShow = () => {
    const isShow = ref(false)
    const onOpen = () => (isShow.value = true)
    const onClose = () => (isShow.value = false)

    return { isShow, onOpen, onClose }
}

export default useShow
