<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[9999] flex items-center justify-center"
    style="background: rgba(var(--color-black-rgb), 0.85)"
  >
    <Transition name="slide" mode="out-in">
      <div
        :key="current"
        class="grid w-[90vw] max-w-6xl overflow-hidden rounded-[2rem] shadow-2xl md:grid-cols-[1.2fr_1fr]"
        style="background: var(--color-primary-light)"
      >
        <!-- IMAGE -->
        <div class="h-[300px] md:h-[700px]">
          <img
            :src="slides[current].image"
            :alt="slides[current].title"
            class="h-full w-full object-cover"
          />
        </div>

        <!-- CONTENT -->
        <div class="flex flex-col justify-center p-8 md:p-12">
          <span
            class="mb-4 w-fit rounded-full px-4 py-2 text-sm font-semibold"
            style="
              background: rgba(var(--color-black-rgb), 0.05);
              color: var(--color-black);
            "
          >
            {{ slides[current].version }}
          </span>

          <h1
            class="mb-4 text-4xl font-bold"
            style="color: var(--color-black)"
          >
            {{ slides[current].title }}
          </h1>

          <p
            class="mb-8 leading-relaxed"
            style="color: var(--color-text-secondary)"
          >
            {{ slides[current].description }}
          </p>

          <ul class="mb-8 space-y-3">
            <li
              v-for="feature in slides[current].features"
              :key="feature"
              style="color: var(--color-black)"
            >
              {{ feature }}
            </li>
          </ul>

          <!-- DOTS -->
          <div class="mb-8 flex gap-2">
            <div
              v-for="(_, index) in slides"
              :key="index"
              class="h-2.5 w-2.5 rounded-full transition-all"
              :style="
                index === current
                  ? 'background: var(--color-accent-neon)'
                  : 'background: var(--color-gray-light)'
              "
            />
          </div>

          <!-- BUTTONS -->
          <div class="flex gap-4">
  <button
    @click="prevSlide"
    class="rounded-xl px-6 py-3 font-medium transition
           bg-[var(--color-gray-light)] text-[var(--color-black)]
           hover:opacity-80 disabled:opacity-40"
    :disabled="current === 0"
  >
    Back
  </button>

  <button
    @click="nextSlide"
    class="rounded-xl px-6 py-3 font-medium transition
           bg-[var(--color-accent-neon)] text-[var(--color-black)]
           hover:opacity-90"
  >
    {{ current === slides.length - 1 ? "Finish" : "Next" }}
  </button>
</div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { slides } from '@/constants/releaseNotes'

const VERSION = "1.2.0";

const isOpen = ref(
  localStorage.getItem("release-notes") !== VERSION
);

const current = ref(0);


function nextSlide() {
  if (current.value < slides.length - 1) {
    current.value++;
  } else {
    closeModal();
  }
}

function prevSlide() {
  if (current.value > 0) {
    current.value--;
  }
}

function closeModal() {
  localStorage.setItem("release-notes", VERSION);
  isOpen.value = false;
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>