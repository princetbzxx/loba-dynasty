<template>
  <nav class="w-full px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-xl"
     style="background-color: var(--color-primary-light); border: 4px solid var(--color-black);">
     <!-- LEFT: Empty (for perfect centering) -->
    <div class="flex-1"></div>

    <!-- CENTER: Logo -->
    <div class="flex-1 flex justify-center">
      <img :src="logo" alt="Loba Dynasty Logo" class="w-18 h-18 rounded-full object-cover dark:invert">
    </div>

    <!-- RIGHT: Diamond Hamburger Menu -->
      <div class="flex-1 flex justify-end">
    <button
      @click="isOpen = !isOpen"
      class="w-10 h-10 select-none outline-none focus:outline-none transition-all duration-300 rotate-45 rounded-md flex items-center justify-center shadow-lg group"
      :style="{ backgroundColor: 'var(--color-primary-dark)' }"
    >
      <div class="-rotate-45 flex flex-col gap-1 transition-all duration-300">
        <span
          class="w-4 h-0.5 transition-all duration-300 origin-center"
          style="background-color: var(--color-white);"
          :class="isOpen ? 'rotate-90 translate-y-1.5' : ''"
        ></span>
        <span
          class="w-4 h-0.5 transition-all duration-300"
          style="background-color: var(--color-white);"
          :class="isOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="w-4 h-0.5 transition-all duration-300 origin-center"
          style="background-color: var(--color-white);"
          :class="isOpen ? '-rotate-90 -translate-y-1.5' : ''"
        ></span>
      </div>
    </button>
  </div>
    <!-- MENU OVERLAY -->
    <div
      v-if="isOpen"
      class="fixed inset-0 backdrop-blur-sm flex flex-col items-center justify-center gap-8 z-50 animate-fade-in"
      :style="{ backgroundColor: 'var(--color-bg-overlay)', opacity: 'var(--opacity-overlay)' }"
    >
      <!-- Close button -->
      <button
        @click="isOpen = false"
        class="absolute top-6 right-6 text-4xl transition-colors duration-300 w-12 h-12 flex items-center justify-center animate-bounce-in"
        style="color: var(--color-white);"
      >
        ×
      </button>

      <!-- Navigation Links -->
      <RouterLink
        to="/"
        @click="isOpen = false"
        class="text-2xl transition-colors duration-300 font-medium animate-slide-up"
        style="color: var(--color-white);"
        @mouseover="e => e.currentTarget.style.color = 'var(--color-accent-dark-red)'"
        @mouseleave="e => e.currentTarget.style.color = 'var(--color-white)'"
      >
        Home
      </RouterLink>
      
      <RouterLink
        to="/portfolio"
        @click="isOpen = false"
        class="text-2xl transition-colors duration-300 font-medium animate-slide-up"
        style="color: var(--color-white);"
        @mouseover="e => e.currentTarget.style.color = 'var(--color-accent-dark-red)'"
        @mouseleave="e => e.currentTarget.style.color = 'var(--color-white)'"
      >
        Portfolio
      </RouterLink>
     <!-- <RouterLink
        to="/assets"
        @click="isOpen = false"
        class="text-2xl transition-colors duration-300 font-medium animate-slide-up"
        style="color: var(--color-white);"
        @mouseover="e => e.currentTarget.style.color = 'var(--color-accent-dark-red)'"
        @mouseleave="e => e.currentTarget.style.color = 'var(--color-white)'"
      >
        Assets
      </RouterLink> -->
         <RouterLink
        to="/contact"
        @click="isOpen = false"
        class="text-2xl transition-colors duration-300 font-medium animate-slide-up"
        style="color: var(--color-white);"
        @mouseover="e => e.currentTarget.style.color = 'var(--color-accent-dark-red)'"
        @mouseleave="e => e.currentTarget.style.color = 'var(--color-white)'"
      >
       Contact
      </RouterLink>
      <RouterLink
       to="/log"
       @click="isOpen = false"
       class="text-2xl transition-colors duration-300 font-medium animate-slide-up"
       style="color: var(--color-white);"
       @mouseover="e => e.currentTarget.style.color = 'var(--color-accent-dark-red)'"
       @mouseleave="e => e.currentTarget.style.color = 'var(--color-white)'"
     >
       Log
     </RouterLink>
      <RouterLink
        to="/about"
        @click="isOpen = false"
        class="text-2xl transition-colors duration-300 font-medium animate-slide-up"
        style="color: var(--color-white);"
        @mouseover="e => e.currentTarget.style.color = 'var(--color-accent-dark-red)'"
        @mouseleave="e => e.currentTarget.style.color = 'var(--color-white)'"
      >
        About
      </RouterLink>
  
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/dynasty-logo.svg'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(route, () => {
  isOpen.value = false
})

const isOpen = ref(false)
</script>

<style scoped>
/* Fade in animation for overlay */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

/* Bounce in animation for close button */
@keyframes bounce-in {
  0% {
    transform: scale(0) rotate(180deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(90deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

.animate-bounce-in {
  animation: bounce-in 0.5s ease-out;
}

/* Slide up animation for menu links */
@keyframes slide-up {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.4s ease-out forwards;
  opacity: 0;
}
</style>
