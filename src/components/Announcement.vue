
<template>
  <div 
    v-if="visible"
    class="announcement-banner w-full py-2 px-4 flex items-center justify-between"
  >
    <p class="text-sm font-medium">
      {{ message }}
    </p>

    <button 
      @click="dismiss"
      class=" hover:text-white text-xl leading-none"
    >
      ×
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(true)

const dismiss = () => {
  visible.value = false
  localStorage.setItem('announcement-dismissed', 'true')
}

onMounted(() => {
  if (localStorage.getItem('announcement-dismissed') === 'true') {
    visible.value = false
  }
})

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
.announcement-banner p {
  margin: 0;
  color: var(--color-black);
}
</style>