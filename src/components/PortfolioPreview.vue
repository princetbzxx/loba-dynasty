<script setup>
import { ref, onMounted } from 'vue'

const images = [
  '/portfolio10.webp',
  '/portfolio16.webp',
  '/portfolio14.webp',
  '/portfolio13.webp',
  '/portfolio2.webp',
  '/portfolio9.webp',
  '/portfolio15.webp',
  '/portfolio12.webp',
  '/portfolio7.webp',
]

// duplicate the array to create seamless loop (marquee)
const loopImages = [...images, ...images]

const offset = ref(0)
const track = ref(null)

onMounted(() => {
  const speed = 1.5 // px per frame

  setInterval(() => {
    offset.value += speed

    const width = track.value.scrollWidth / 2

    // when we reach halfway, reset instantly
    if (offset.value >= width) {
      offset.value = 0
    }
  }, 16) // ~60fps
})
</script>
<template>
  <div class="relative overflow-hidden w-full h-screen">
    <!-- VIEW PORTFOLIO BUTTON -->
    <div class="absolute top-0 left-0 w-full flex justify-center py-8 z-10">
    <router-link
  to="/portfolio"
  class="px-10 py-4 shimmer font-bold rounded-sm shadow-xl border-4 hover:scale-105 hover:shadow-2xl transition-all duration-200 inline-block"
  style="background-color: var(--color-primary-light); color: var(--color-black); border-color: var(--color-black);"
>
  VIEW PORTFOLIO
</router-link>
    </div>

    <!-- INFINITE MARQUEE TRACK -->
    <div
      ref="track"
      class="flex items-center gap-5"
      :style="{ transform: `translateX(-${offset}px)` }"
    >
    <div
      v-for="(img,index) in loopImages"
      :key="index"
      class="h-[70vh] md:h-screen flex items-center"
    >
      <div class="aspect-[1080/1350] w-[70w] md:w-auto h-full">
        <img
          :src="img"
          class="w-full h-full object-cover opacity-55 hover:opacity-100"
        />
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
</style>