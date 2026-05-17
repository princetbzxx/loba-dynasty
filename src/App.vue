<template>
  <div class="app-wrapper" style="background-color: var(--color-primary-light)">

    <transition name="fade">
      <div v-if="isLoading" key="loader">
        <Loader />
      </div>

      <div v-else key="site" class="site-wrapper">
        <Navbar />

        <!-- This grows and pushes footer down -->
        <div class="content-wrapper">
          <RouterView />
        </div>

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
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark" || savedTheme === "light") {
    isDark.value = savedTheme === "dark"
  } else {
    isDark.value = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
  }
  document.documentElement.classList.toggle("dark", isDark.value)

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
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ⭐ Layout Fix */
html,
body,
#app {
  min-height: 100%;
  margin: 0;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100dvh; /* mobile-safe full height */
}

.site-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

.content-wrapper {
  flex: 1 0 auto; /* grows and pushes footer down */
  min-height: 0;
}

footer {
  flex-shrink: 0; /* footer stays at bottom */
}
</style>
