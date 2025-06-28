import { ref, onMounted } from 'vue'
import axios from 'axios'

export interface Product {
    title: string
    brand: string
    description: string
    price: number
    discount?: number
    originalPrice?: number
    thumbnail: string
    images: string[]
}

const product = ref<Product | null>(null)
const loading = ref(true)
const error = ref<unknown>(null)

export function useProduct() {
    async function fetchProduct() {
        try {
            loading.value = true
            const res = await axios.get<Product[]>('http://localhost:3000/api/products')
            product.value = {
                ...res.data[0],
                images: res.data[0].images.map(img => `http://localhost:3000${img}`),
                thumbnail: `http://localhost:3000${res.data[0].thumbnail}`
            }
            console.log('Fetched product:', res.data)
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    onMounted(fetchProduct)

    return {
        product,
        loading,
        error
    }
}