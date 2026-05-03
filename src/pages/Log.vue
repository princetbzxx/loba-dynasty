<template>
  <div class="log-page min-h-screen split-horizontal" style="color: var(--color-gray-dark);">

    <div class="max-w-6xl mx-auto px-4 py-8">
      <Timeline />
      <ComingSoon />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import Timeline from '@/components/Timeline.vue'
import ComingSoon from '@/components/ComingSoon.vue'
</script>

<style scoped>

.split-horizontal {
    min-height: 200px;
    background: linear-gradient(to bottom, var(--color-white) 50%, var(--color-primary-light) 50%);
    z-index: -1;
}
</style>
