<script setup lang="ts">
import { about } from "@/constants/about";
import { onMounted } from "vue";
import gsap from "gsap";
onMounted(() => {
  // Fade in the whole section
  gsap.from(".about-container", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
  });

  // Animate progress bars
  gsap.from(".skill-fill", {
    width: 0,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.2
  });

  // Stagger text items
  gsap.from(".skill, .tools li", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1,
    delay: 0.3
  });

  // Subtle wave float
  gsap.to(".wave-bg img", {
    y: 20,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});
</script>

<template>
  <section class="about-section">

    <!-- Wave Background -->
    <div class="wave-bg">
      <img src="/wave.svg" alt="wave background" />
    </div>

    <div class="about-container">

      <!-- LEFT: Text -->
      <div class="about-text">
        <h1 class="headline">{{ about.headline }}</h1>
        <p class="description">{{ about.description }}</p>

        <!-- Skills with Progress Bars -->
        <h2 class="subheading">Skills</h2>
        <div class="skills">
          <div class="skill" v-for="skill in about.skills" :key="skill.name">
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <h2 class="subheading">Tools I Use</h2>
        <ul class="tools-grid">
        <li v-for="tool in about.tools" :key="tool">{{ tool }}</li>
        </ul>


      </div>

      <!-- RIGHT: Visual -->
      <div class="about-visual">
        <img src="/portfolio8.webp" alt="About Visual" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  padding: 6rem 2rem;
  background: var(--color-primary-light); /* dark in :root, light in .dark */
  overflow: hidden;
}

/* Wave background */
.wave-bg {
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
  z-index: 0;
  opacity: 0.1;

}

.wave-bg img {
  width: 100%;
  display: block;
  filter: brightness(0.8);
}

.dark .wave-bg img {
  filter: brightness(0.9);
}

/* Main container */
.about-container {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* Text section */
.about-text {
  flex: 1;
  color: var(--color-black);
}

.headline {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-black);
}

.description {
  font-size: 1.1rem;
  opacity: 0.85;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
}

.subheading {
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  color: var(--color-black);
}

/* Skills */
.skills {
  margin-bottom: 2rem;
}

.skill {
  margin-bottom: 1.2rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  color: var(--color-black);
}

.skill-name {
  font-weight: 600;
}

.skill-level {
  opacity: 0.7;
  font-size: 0.9rem;
}

/* --- THE IMPORTANT FIXES ARE HERE --- */

.skill-bar {
  width: 100%;
  height: 10px;
  background: var(--color-gray-light); /* matches page background */
  border-radius: 10px;
  overflow: hidden;
}

.dark .skill-bar {
  background: var(--color-gray-light); /* matches your inverted theme */
}

.skill-fill {
  height: 100%;
  background: var(--color-black); /* dark fill in :root */
  border-radius: 0; /* FIX: prevents left-edge misalignment */
  transition: width 0.6s ease;
  transform: translateZ(0); /* FIX: removes subpixel gaps */
}

.dark .skill-fill {
  background: var(--color-white); /* white fill in .dark */
}

/* Tools */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.8rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.tools-grid li {
  background: var(--color-gray-light);
  padding: 0.8rem 1rem;
  border-radius: 0.6rem;
  border: 1px solid var(--color-gray-light);
  box-shadow: 0 2px 10px rgba(var(--color-black-rgb), 0.04);
  text-align: center;
  font-weight: 500;
  color: var(--color-black);
}

.dark .tools-grid li {
  border-color: var(--color-gray-dark);
  box-shadow: 0 2px 10px rgba(var(--color-black-rgb), 0.1);
}

/* Visual section */
.about-visual {
  flex: 1;
  border-radius: 1.2rem;
  overflow: hidden;
  background: var(--color-bg-card); /* FIX: prevents white edge on image */
  box-shadow: 0 4px 20px rgba(var(--color-black-rgb), 0.05);
}

.about-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; /* FIX: removes baseline gap */
}

/* Responsive */
@media (max-width: 900px) {
  .about-container {
    flex-direction: column;
  }

  .about-visual {
    height: 260px;
  }
}

</style>
