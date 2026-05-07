
<template>
  <div 
    v-if="visible"
    class="announcement-banner w-full text-[rgb(var(--color-white))] py-2 px-4 flex items-center justify-between"
  >
    <p class="text-sm font-medium">
      {{ message }}
    </p>

    <button 
      @click="visible = false"
      class=" hover:text-white text-xl leading-none"
    >
      ×
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(true)

defineProps<{
    message: string
}>()
</script>
<style scoped>
.announcement-banner {
  background-color: var(--color-primary-light);
}
.announcement-banner button {
  background: none;
  color: var(--color-black);
  border: none;
  cursor: pointer;
}
</style>