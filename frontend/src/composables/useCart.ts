import { reactive, computed } from 'vue'

export interface CartItem {
    title: string
    price: number
    quantity: number
    thumbnail: string
}

const cart = reactive<CartItem[]>([])

export function useCart() {
    function addToCart(product: CartItem, quantity: number) {
        if (quantity === 0) return
        const index = cart.findIndex(item => item.title === product.title)
        if (index !== -1) {
            cart[index].quantity += quantity
        } else {
            cart.push({
                title: product.title,
                price: product.price,
                quantity,
                thumbnail: product.thumbnail
            })
        }
    }

    function removeFromCart(index: number) {
        cart.splice(index, 1)
    }

    const cartCount = computed(() =>
        cart.reduce((total, item) => total + item.quantity, 0)
    )

    return {
        cart,
        cartCount,
        addToCart,
        removeFromCart
    }
}
