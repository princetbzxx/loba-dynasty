<template>
  <div class="min-h-screen" style="background-color: var(--color-primary-light)">

    <transition name="fade">
      <div v-if="isLoading" key="loader">
        <Loader />
      </div>

      <div v-else key="site">
        <Navbar />
        <RouterView />
        <Footer />
      </div>
    </transition>

  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Loader from './components/Loader.vue'
import Footer from './components/Footer.vue'

const isLoading = ref(true)

const isDark = ref(false)

onMounted(() => {
  // Load saved theme or use system preference if no saved value exists
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark" || savedTheme === "light") {
    isDark.value = savedTheme === "dark"
  } else {
    isDark.value = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
  }
  document.documentElement.classList.toggle("dark", isDark.value)

  // Loading screen timeout
  setTimeout(() => {
    isLoading.value = false
  }, 4500)
})
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle("dark", isDark.value)
  localStorage.setItem("theme", isDark.value ? "dark" : "light")
}

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
