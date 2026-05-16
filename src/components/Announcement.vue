<template>
  <div 
    v-if="visible"
    class="announcement-banner w-full py-2 px-4 flex items-center justify-between"
  >
    <p class="text-sm font-medium">
      {{ message }}
    </p>

    <div class="flex items-center gap-3">
      <!-- Toggleable button -->
      <a 
        v-if="showButton"
        href="https://lobastudios.gumroad.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="banner-a"
      >
        Gumroad
      </a>

      <!-- Dismiss button -->
      <button 
        @click="dismiss"
        class="hover:text-white text-xl banner-close leading-none"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// bump this whenever you change the message
const ANNOUNCEMENT_VERSION = 'v1'

const visible = ref(true)
const showButton = ref(true)

const dismiss = () => {
  visible.value = false
  localStorage.setItem('announcement-dismissed-version', ANNOUNCEMENT_VERSION)
}

onMounted(() => {
  const dismissedVersion = localStorage.getItem('announcement-dismissed-version')

  // hide only if the user dismissed THIS version
  if (dismissedVersion === ANNOUNCEMENT_VERSION) {
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
  color: var(--color-black) !important;
}

.banner-close {
  background: var(--color-black);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  text-decoration: none;
}
.banner-a {
  background: var(--color-white);
  color: var(--color-black);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  text-decoration: none;
  border: 1px solid var(--color-black);
}
.banner-btn:hover {
  opacity: 0.85;
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
