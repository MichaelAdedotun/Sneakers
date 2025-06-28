<script setup lang="ts">

import {computed } from "vue";
import {useProduct} from "../composables/useProduct.ts";
import { useGallery } from '../composables/useGallery'

const { product } = useProduct()

const images = computed(() => product.value?.images || [])

const {
  currentIndex,
  setCurrentImage,
  nextImage,
  prevImage
} = useGallery(images.value)

const currentImage = computed(() => images.value[currentIndex.value])
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- Main Image -->
    <div class="w-full overflow-hidden relative justify-center flex">
      <img
          :src="currentImage"
           alt="product"
           class="w-full h-full mx-0 object-cover md:w-2/3 h-96 md:rounded-xl"
      />

      <!-- Prev Button -->
      <button
          @click="prevImage"
          class="absolute top-1/2 left-4 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow md:hidden"
      >
        <img src="../assets/icons/icon-previous.svg " alt="prev" class="w-3" />
      </button>

      <!-- Next Button -->
      <button
          @click="nextImage"
          class="absolute top-1/2 right-4 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow md:hidden"
      >
        <img src="../assets/icons/icon-next.svg" alt="next" class="w-3" />
      </button>
    </div>

    <!-- Thumbnails (Desktop only) -->
    <div class="hidden md:flex gap-5 justify-center">
      <button
          v-for="(thumb, index) in images"
          :key="index"
          @click="setCurrentImage(index)"
          class="w-20 h-20 rounded-xl overflow-hidden border-2"
          :class="{
            'border-orange-500': currentImage === thumb,
            'border-transparent': currentImage !== thumb
          }"
      >
        <img :src="thumb" alt="thumbnail" class="w-full h-full object-cover" />
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>