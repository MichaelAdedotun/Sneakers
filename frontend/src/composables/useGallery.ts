import { ref, computed } from 'vue'

export function useGallery(imageList: string[]) {
    const images = imageList
    const currentIndex = ref(0)
    const currentImage = computed(() => images[currentIndex.value])

    function setCurrentImage(index: number) {
        if (index >= 0 && index < images.length) {
            currentIndex.value = index
        }
    }

    function nextImage() {
        currentIndex.value = (currentIndex.value + 1) % images.length
    }

    function prevImage() {
        currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
    }

    return {
        images,
        currentIndex,
        currentImage,
        setCurrentImage,
        nextImage,
        prevImage
    }
}
