<script setup lang="ts">

import { useCart } from '../composables/useCart'
import { defineProps } from 'vue'

defineProps<{ isOpen: boolean }>()
const { cart, removeFromCart } = useCart()

function resolveThumbnail(path: string) {
  if (path.startsWith('/images/')) {
    return `http://localhost:3000${path}`
  }
  return path
}
</script>

<template>
  <div
      v-if="isOpen"
      class="absolute right-4 top-16 md:right-8 w-80 bg-white rounded-xl shadow-xl z-50"
  >
    <h2 class="px-6 py-4 font-semibold text-sm border-b">Cart</h2>

    <!-- Empty State -->
    <div v-if="Array.isArray(cart) && cart.length === 0" class="px-6 py-16 text-center text-gray-500 text-sm">
      Your cart is empty.
    </div>

    <!-- Cart Items -->
    <div v-else class="px-6 py-4 flex flex-col gap-4">
      <div v-for="(item, index) in cart" :key="index" class="flex items-center gap-4">
        <img :src="resolveThumbnail(item.thumbnail)" class="w-12 h-12 rounded-lg" alt="product" />

        <div class="flex-1 text-sm text-gray-600">
          <p>{{ item.title }}</p>
          <p>
            ${{ item.price.toFixed(2) }} x {{ item.quantity }}
            <span class="font-bold text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}</span>
          </p>
        </div>

        <button @click="removeFromCart(index)">
          <img src="../assets/icons/icon-delete.svg" alt="delete" class="w-4" />
        </button>
      </div>

      <!-- Checkout Button -->
      <button class="bg-orange-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-orange-600">
        Checkout
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>