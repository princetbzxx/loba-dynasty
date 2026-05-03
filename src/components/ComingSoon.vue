<template>
  <div ref="section" class="coming-wrapper">

    <!-- PARTICLES LEFT -->
    <div class="particles left">
      <span v-for="n in 6" :key="'l'+n" class="particle"></span>
    </div>

    <!-- PARTICLES RIGHT -->
    <div class="particles right">
      <span v-for="n in 6" :key="'r'+n" class="particle"></span>
    </div>

    <FlipCard rotate="y" trigger="hover" class="coming-card">
      <template #default>
        <div class="front-face">
          <span class="question-mark">?</span>
        </div>
      </template>

      <template #back>
        <div class="back-face">
          <h1 class="title">Coming Soon</h1>
        </div>
      </template>
    </FlipCard>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import FlipCard from "@/components/FlipCard.vue";

const section = ref(null);

onMounted(() => {
  // FLOATING SECTION ANIMATION
  gsap.from(section.value, {
    y: 25,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // PARTICLE ANIMATION
  const particles = section.value.querySelectorAll(".particle");

  particles.forEach((p) => {
    const delay = Math.random() * 2;
    const duration = 3 + Math.random() * 3;
    const xMove = (Math.random() - 0.5) * 20;
    const yMove = (Math.random() - 0.5) * 20;
    const scale = 0.6 + Math.random() * 0.8;

    gsap.fromTo(
      p,
      { opacity: 0, x: 0, y: 0, scale },
      {
        opacity: 1,
        x: xMove,
        y: yMove,
        scale,
        duration,
        delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }
    );
  });
});
</script>

<style scoped>
.coming-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 6rem 1rem;
}

/* PARTICLE CONTAINERS */
.particles {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 120px;
  height: 300px;
  pointer-events: none;
}

.particles.left {
  left: -50px;
}

.particles.right {
  right: -50px;
}

/* INDIVIDUAL PARTICLES */
.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  border-radius: 50%;
  opacity: 0.4;
}

/* RANDOMIZE POSITIONS */
.particle:nth-child(1) { top: 10%; left: 20%;  scale: 1.3;}
.particle:nth-child(2) { top: 30%; left: 60%; scale: 1.2;}
.particle:nth-child(3) { top: 50%; left: 40%;  scale: 1.1;}
.particle:nth-child(4) { top: 70%; left: 10%; scale: 0.9; }
.particle:nth-child(5) { top: 85%; left: 70%; scale: 0.7; }
.particle:nth-child(6) { top: 20%; left: 80%; scale: 0.5; }

/* CARD */
.coming-card {
  width: 280px;
  height: 380px;
  z-index: 2;
}

/* FRONT */
.front-face {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid var(--color-gray-light);
  background: var(--color-primary-dark);
  color: var(--color-white);
}

/* BACK */
.back-face {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid var(--color-gray-light);
  background: var(--color-primary);
  color: var(--color-black);
  padding: 1.5rem;
}

/* QUESTION MARK */
.question-mark {
  font-size: 6rem;
  font-weight: 700;
  opacity: 0.9;
  user-select: none;
}

.title {
  font-weight: 600;
  letter-spacing: 0.25em;
}
</style>
