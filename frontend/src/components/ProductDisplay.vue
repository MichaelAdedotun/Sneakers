<script setup lang="ts">

import {useProduct} from "../composables/useProduct.ts";
import ImageGallery from './ImageGallery.vue'
import ProductDetails from './ProductDetails.vue'

const { product } = useProduct()
</script>

<template>
  <section v-if="product" class="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:px-16 md:py-14">
    <!-- Image Gallery -->
    <div>
      <ImageGallery />
    </div>

    <!-- Product Details -->
    <div class="px-10 py-10 md:px-0">
      <ProductDetails />
    </div>
  </section>
</template>

<style scoped>

</style>