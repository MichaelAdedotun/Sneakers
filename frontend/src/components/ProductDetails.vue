<script setup lang="ts">

import { ref } from 'vue'
import { useCart } from '../composables/useCart'
import { useProduct } from '../composables/useProduct'
import type { CartItem } from '../composables/useCart'

const quantity = ref(0)
const { addToCart } = useCart()
const { product } = useProduct()

function increase() {
  quantity.value++
}

function decrease() {
  if (quantity.value > 0) quantity.value--
}

function addToCartHandler() {
  if (!product.value) return

  const item: CartItem = {
    title: product.value.title,
    price: product.value.price,
    quantity: quantity.value,
    thumbnail: product.value.thumbnail
  }

  addToCart(item, quantity.value)
  quantity.value = 0
}
</script>

<template>
  <div v-if="product" class="flex flex-col gap-6 max-w-md">
    <!-- Company Label -->
    <span class="text-orange-500 uppercase text-sm font-semibold tracking-wider">
      {{ product.brand }}
    </span>

    <!-- Title -->
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
      {{ product.title }}
    </h1>

    <!-- Description -->
    <p class="text-gray-500 text-sm leading-relaxed">
      {{ product.description }}
    </p>

    <!-- Price Info -->
    <div class="flex items-center justify-between md:flex-col md:items-start md:gap-2">
      <div class="flex items-center gap-4">
        <span class="text-2xl font-bold text-gray-900">
          ${{ product.price.toFixed(2) }}
        </span>
        <span v-if="product.discount" class="text-sm font-semibold text-orange-500 bg-orange-100 px-2 py-0.5 rounded">
          {{ product.discount }}%
        </span>
      </div>
      <span v-if="product.originalPrice" class="text-sm line-through text-gray-400">
        ${{ product.originalPrice.toFixed(2) }}
      </span>
    </div>

    <!-- Quantity and Add to Cart -->
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Quantity selector -->
      <div class="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 w-full md:w-32">
        <button @click="decrease" class="text-orange-500 font-bold text-xl">-</button>
        <span class="font-semibold">{{ quantity }}</span>
        <button @click="increase" class="text-orange-500 font-bold text-xl">+</button>
      </div>

      <!-- Add to Cart button -->
      <button
          @click="addToCartHandler"
          class="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2"
      >
        <img src="../assets/icons/icon-cart.svg" alt="cart" class="w-5" />
        Add to cart
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>