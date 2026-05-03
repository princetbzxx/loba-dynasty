<template>
  <section class="portfolio-page">
    <transition-group name="fade" tag="div" class="bento-grid">
      <router-link
        v-for="item in items"
        :key="item.id"
        :to="`/portfolio/${item.id}`"
        class="bento-item-link"
      >
        <article :class="['bento-item']">
         <div class="item-inner">
          <span v-if="isNew(item)" class="new-badge shimmer small" :style="{
    transform: `rotate(${Math.random() * 10 - 15}deg)`
  }">
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
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { portfolioItems } from '@/constants/portfolio'

const items = computed(() =>
  [...portfolioItems].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
)
onMounted(() => {
  gsap.from(".bento-item", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15
  });

  gsap.to(".bento-item", {
    y: -0.2,
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
})
type PortfolioItem = {
  id: number
  title: string
  src: string
  tags: string[]
  description: string
  createdAt: string
}

const isNew = (item: PortfolioItem) => {
  const created = new Date(item.createdAt)
  const now = new Date()

  const diffDays =
    (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24)

  return diffDays <= 7
}
</script>

<style scoped>
/* PAGE */
.portfolio-page {
  min-height: 100vh;
  padding: 3rem 2rem;
  color: var(--color-white);
  background: linear-gradient(180deg, var(--color-primary-light) 0%, var(--color-primary-dark) 100%);
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
.new-badge {
  position: absolute;
  top: 12px;
  left: 12px;

  padding: 6px 14px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.15em;

  transform: rotate(-12deg) scale(1.05);


  background: linear-gradient(135deg, var(--color-white), var(--color-accent-neon), var(--color-accent-neon));
  color: var(--color-black);

  border: 3px solid var(--color-black);
  border-radius: 6px;

  box-shadow: 4px 4px 0px black;

  z-index: 20;

  transition: all 0.2s ease;
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
