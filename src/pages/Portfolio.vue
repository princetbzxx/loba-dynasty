<template>
  <section class="portfolio-page">
    <transition-group name="fade" tag="div" class="bento-grid">
      <router-link
        v-for="item in paginatedItems"
        :key="item.id"
        :to="`/portfolio/${item.id}`"
        class="bento-item-link"
      >
        <article :class="['bento-item']">
         <div class="item-inner">
          <span v-if="isNew(item)" class="new-badge shimmer small" :style="{ transform: `rotate(${badgeRotation(item.id)})` }">
            NEW
          </span>

          <img :src="item.src" :alt="item.title" loading="lazy" />

          <div class="item-label shimmer">
            <span>Portfolio</span>
            <h3>{{ item.title }}</h3>
          </div>
        </div>
        </article>
      </router-link>
    </transition-group>
  <div class="pagination py-20">
  <button class="page-btn shimmer" @click="prevPage" :disabled="currentPage === 1">
    ← Prev
  </button>

  <span class="page-indicator">
    {{ currentPage }} / {{ totalPages }}
  </span>

  <button class="page-btn shimmer" @click="nextPage" :disabled="currentPage === totalPages">
    Next →
  </button>
</div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { gsap } from 'gsap'
import { portfolioItems } from '@/constants/portfolio'

/* -----------------------------
   SORTED ITEMS
------------------------------ */
const items = computed(() =>
  [...portfolioItems].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
)

/* -----------------------------
   PAGINATION
------------------------------ */
const currentPage = ref(1)
const itemsPerPage = 9

const totalPages = computed(() =>
  Math.ceil(items.value.length / itemsPerPage)
)

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return items.value.slice(start, start + itemsPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

/* -----------------------------
   NEW BADGE (clean + stable)
------------------------------ */
const isNew = (item: any) => {
  const created = new Date(item.createdAt)
  const now = new Date()
  const diffDays = (now.getTime() - created.getTime()) / 86400000
  return diffDays <= 7
}

/* -----------------------------
   FIXED BADGE ROTATION (NO RANDOM IN TEMPLATE)
------------------------------ */
const badgeRotation = (id: number) => {
  return `${(id % 2 === 0 ? -10 : 8)}deg`
}

/* -----------------------------
   GSAP (scoped safer)
------------------------------ */
const animateEntry = () => {
  gsap.fromTo(
    ".bento-item",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.08
    }
  )
}

const animateFloat = () => {
  gsap.to(".bento-item", {
    y: -2,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })
}

onMounted(() => {
  animateEntry()
  animateFloat()
})

/* -----------------------------
   PAGE CHANGE
------------------------------ */
watch(currentPage, async () => {
  await nextTick()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  animateEntry()
})
</script>


<style scoped>
/* PAGE */
.portfolio-page {
  min-height: 100vh;
  padding: 3rem 2rem;
  color: var(--color-white);

  background:
    radial-gradient(circle at top, rgba(var(--color-accent-neon), 0.08) 0%, transparent 60%),
    linear-gradient(180deg, var(--color-bg-dark) 0%, var(--color-bg-overlay) 100%);
}

/* DESKTOP — REAL BENTO GRID */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: minmax(300px, auto);
  gap: 1.2rem;
}

/* MAKE DESKTOP ITEMS BIGGER */
.large {
  grid-column: span 8;
  grid-row: span 2;
}

.wide {
  grid-column: span 12;
}

.tall {
  grid-column: span 4;
  grid-row: span 2;
}

.medium {
  grid-column: span 6;
}

.small {
  grid-column: span 4;
}

/* LINK WRAPPER */
.bento-item-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

/* CARD */
.bento-item {
  border-radius: 1.5rem;
  overflow: hidden;
  background: var(--color-white-4);
  border: 1px solid var(--color-white-8);
  backdrop-filter: blur(4px);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  transform-style: preserve-3d;
  aspect-ratio: 1080 / 1350;
}

.bento-item:hover {
  transform: translateY(-4px) rotateX(4deg) rotateY(-4deg);
  box-shadow: 0 28px 85px rgba(0, 0, 0, 0.45);
}

/* IMAGE */
.item-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.bento-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  transition: transform 0.5s ease;
}

.bento-item:hover img {
  transform: scale(1.05);
}

/* LABEL OVERLAY */
.item-label {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1rem 1.2rem 1.3rem;
  background: linear-gradient(180deg, transparent 0%, rgba(var(--color-primary-dark-hover-rgb), 0.32) 100%);
  color: var(--color-white);
  backdrop-filter: blur(8px);

  opacity: 0;
  transform: translateY(20px);
  transition: 0.35s ease;
}
.pagination {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
}

.page-btn {
  padding: 0.7rem 1.4rem;
  border-radius: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;

  background: rgba(var(--color-white-rgb), 0.08);
  border: 1px solid rgba(var(--color-white-rgb), 0.18);
  backdrop-filter: blur(6px);

  color: var(--color-black); /* ← FIXED */
  cursor: pointer;

  transition: all 0.25s ease;
}

.page-btn:hover:not(:disabled) {
  background: rgba(var(--color-white-rgb), 0.18);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(var(--color-black-rgb), 0.25);
}

.page-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.page-indicator {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-black); /* ← FIXED */

  padding: 0.4rem 0.8rem;

  background: rgba(var(--color-white-rgb), 0.05);
  border-radius: 0.6rem;
  border: 1px solid rgba(var(--color-white-rgb), 0.12);
  backdrop-filter: blur(4px);
}



.bento-item:hover .item-label {
  opacity: 1;
  transform: translateY(0);
}

.item-label span {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent-neon);
  margin-bottom: 0.4rem;
}

.item-label h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}

/* TABLET — SIMPLIFIED BENTO */
@media (max-width: 960px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .large,
  .wide,
  .medium,
  .small,
  .tall {
    grid-column: span 6;
    grid-row: auto;
  }
}

/* MOBILE — UNIFORM GRID (1080×1350) */
@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }

  .large,
  .wide,
  .medium,
  .small,
  .tall {
    grid-column: auto;
    grid-row: auto;
  }

  .bento-item {
    aspect-ratio: 1080 / 1350;
  }

  .bento-item img {
    object-fit: cover;
  }
}

/* FADE-IN ANIMATION */
.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
