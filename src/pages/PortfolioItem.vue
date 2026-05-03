<template>
  <section class="portfolio-item-page">
    <router-link to="/portfolio" class="back-btn">← Back to Portfolio</router-link>

    <div v-if="item" class="layout">

      <!-- LEFT SIDE — MAIN POSTER -->
      <div class="left">
        <div class="image-wrapper relative">
          <img :src="item.src" :alt="item.title" />
        </div>
          <span v-if="isNew(item)" class="new-badge shimmer">
          NEW
        </span>
      </div>

      <!-- RIGHT SIDE — INFO PANEL -->
      <div class="right">
        <h1 class="title">{{ item.title }}</h1>

        <div class="tags">
          <span v-for="tag in item.tags" :key="tag" class="tag cursor-pointer" :class="{active: selectedTag === tag}" @click="selectTag(tag)">{{ tag }}</span>
        </div>

        <p class="description">
          {{ item.description || 'A featured piece from my portfolio.' }}
        </p>
      </div>

    </div>
<hr class="solid"></hr>
    <!-- MORE LIKE THIS -->
    <div class="more-section">
      <h2>More Like This</h2>

      <div class="more-grid">
        <router-link
          v-for="other in related"
          :key="other.id"
          :to="`/portfolio/${other.id}`"
          class="more-item"
        >
          <img :src="other.src" :alt="other.title" />
          <p>{{ other.title }}</p>
        </router-link>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { portfolioItems } from '@/constants/portfolio'
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'


const selectedTag = ref<string | null>(null)

function selectTag(tag: string) {
  selectedTag.value = tag
}

onMounted(() => {
  gsap.from(".layout", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out"
  })
})

const route = useRoute()
const id = Number(route.params.id)

const item = portfolioItems.find((i: any) => i.id === id)

// Related items (exclude current)
const related = computed(() => { 
let items = portfolioItems.filter(i => i.id !== id).slice(0, 4) // slice only gets a section of array
if (!selectedTag.value) return items.slice(0,4)

return items.filter(item =>
  !selectedTag.value || item.tags?.includes(selectedTag.value)
)
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
.portfolio-item-page {
  padding: 2rem;
  min-height: 100vh;
  color: var(--color-black);
position: relative;


}
/* BACK BUTTON */
.back-btn {
  display: inline-block;
  margin-bottom: 2rem;
  color: var(--color-accent-neon);
  font-weight: 600;
  text-decoration: none;
}

/* MAIN LAYOUT */
.layout {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

/* LEFT SIDE */
.left {
  flex: 2;
}

.image-wrapper {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
}

.image-wrapper img {
  width: 100%;
  display: block;
  object-fit: cover;
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

/* RIGHT SIDE — INFO PANEL */
.right {
  flex: 1;
  position: sticky;
  top: 2rem;
}

.title {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.tags {
  margin-bottom: 1.5rem;
}

.tag {
  display: inline-block;
  background: var(--color-gray-light);
  padding: 0.35rem 0.75rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
    letter-spacing: 0.2em;
}

.description {
  font-size: 1.1rem;
  opacity: 0.85;
  line-height: 1.6;
}

/* MORE LIKE THIS */
.more-section {
  margin-top: 4rem;
}

.more-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.more-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.2rem;
}

.more-item {
  text-decoration: none;
  color: var(--color-black);
}

.more-item img {
  width: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
  aspect-ratio: 1080 / 1350;
}

.more-item p {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: center;
}
.tag.active {
  background: var(--color-primary-dark);
  color: var(--color-white);
}

hr.solid {
border-top: 3px solid var(--color-black);
margin: 3rem 0;
}
/* RESPONSIVE */
@media (max-width: 900px) {
  .layout {
    flex-direction: column;
  }

  .right {
    position: relative;
    top: 0;
  }
}
</style>
