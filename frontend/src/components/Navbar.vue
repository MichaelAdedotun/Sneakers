<script setup lang="ts">

import { ref } from 'vue'
import CartDropdown from './CartDropdown.vue'
import { useCart } from '../composables/useCart'

const isMenuOpen = ref(false)
const isCartOpen = ref(false)

const { cart, removeFromCart } = useCart()
</script>

<template>
  <nav class="bg-white z-10 sticky top-0 md:border-b border-b-gray-200 px-4 py-4 md:mx-36 flex justify-between items-center relative">
    <!-- Left: Logo + Menu -->
    <div class="flex items-center gap-10">
      <div class="flex gap-5">
        <!-- Mobile: Hamburger Icon -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden cursor-pointer">
          <img v-if="!isMenuOpen" src="../assets/icons/icon-menu.svg" alt="menu" class="w-5" />
          <img v-else src="../assets/icons/icon-close.svg" alt="close menu" class="w-5" />
        </button>

        <!-- Logo -->
        <div>
          <img src="../assets/icons/logo.svg" alt="Logo">
        </div>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-10 text-gray-500 text-sm">
        <li><a href="#" class="hover:text-black hover:border-b-2 border-b-orange-500 pb-5">Collections</a></li>
        <li><a href="#" class="hover:text-black hover:border-b-2 border-b-orange-500 pb-5">Men</a></li>
        <li><a href="#" class="hover:text-black hover:border-b-2 border-b-orange-500 pb-5">Women</a></li>
        <li><a href="#" class="hover:text-black hover:border-b-2 border-b-orange-500 pb-5">About</a></li>
        <li><a href="#" class="hover:text-black hover:border-b-2 border-b-orange-500 pb-5">Contact</a></li>
      </ul>
    </div>

    <!-- Right: Cart + Avatar -->
    <div class="flex items-center gap-6">
      <div>
        <button @click="isCartOpen = !isCartOpen" class="relative flex">
          <img src="../assets/icons/icon-cart.svg" alt="cart" />
          <span v-if="cart.length > 0" class="absolute -top-2 -right-2 text-white bg-orange-500 rounded-full text-xs px-1">
            {{ cart.length }}
          </span>
        </button>
        <CartDropdown :isOpen="isCartOpen" :cart="cart" @remove="removeFromCart" />
      </div>
      <div>
        <img src="../assets/image-avatar.png"
             alt="user"
             class="w-8 h-8 rounded-full border-2 border-transparent hover:border-orange-500 cursor-pointer"
        />
      </div>
    </div>

    <!-- Mobile Menu -->
    <section v-if="isMenuOpen" class="bg-black/60 w-full h-screen absolute top-full left-0 ">
      <div class="bg-white w-3/5 h-screen px-6 py-4 md:hidden z-10">
        <ul class="flex flex-col gap-4 text-gray-600 text-sm">
          <li><a href="#" class="hover:text-black hover:border-b border-b-orange-500 pb-1">Collections</a></li>
          <li><a href="#" class="hover:text-black hover:border-b border-b-orange-500 pb-1">Men</a></li>
          <li><a href="#" class="hover:text-black hover:border-b border-b-orange-500 pb-1">Women</a></li>
          <li><a href="#" class="hover:text-black hover:border-b border-b-orange-500 pb-1">About</a></li>
          <li><a href="#" class="hover:text-black hover:border-b border-b-orange-500 pb-1">Contact</a></li>
        </ul>
      </div>
    </section>
  </nav>
</template>

<style scoped>

</style>