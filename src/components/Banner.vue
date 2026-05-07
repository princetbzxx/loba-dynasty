<template>
  <section class="banner p-10 mt-40 flex items-center gap-6">
    
    <!-- Logo -->
    <img 
      :src="logo"
      alt="Dyasty Logo" 
      class="w-90 h-90 object-contain dark:invert flex-1"
    />
<div class="flex-3">

    <!-- Text -->
    <div class="flex flex-col">
        <div class="banner-title text-3xl font-bold">
            {{ title }}
        </div>
        
        <div class="banner-subtitle text-base opacity-80">
            {{ subtitle }}
        </div>
        
        <button 
        v-if="buttonText"
        class="banner-button mt-4"
        >
        {{ buttonText }}
    </button>
</div>
</div>

  </section>
</template>

<script setup lang="ts">

import logo from '@/assets/dynasty-logo.svg'

defineProps<{
  title: string
  subtitle: string
  buttonText?: string
}>()
</script>

<style scoped>
.banner {
  width: 100%;
  padding: 4rem 1.5rem;
  background: rgb(var(--color-primary-light));
  border-bottom: 4px solid rgb(var(--color-black));
}

.banner-button {
  background: rgb(var(--color-black));
  color: rgb(var(--color-white));
  padding: 0.6rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: none;
}
.banner-title {
  color: var(--color-black)
}
.banner-subtitle {
  color: var(--color-black)
}
</style>