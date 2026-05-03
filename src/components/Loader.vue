<template>
  <div class="fixed inset-0 flex items-center justify-center loader-wrapper">
    <!-- Main loader SVG -->
     <svg class="loader-logo text-black dark:text-white" fill="currentColor" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="logo-mask">
      <rect width="100%" height="100%" fill="black" />
      <!-- White paths = visible part of the mask -->
      <path ref="p1" d="m 98.55183,183.46365 c 3.29927,0 4.75351,-2.88326 5.95571,-5.95571 l 25.92917,-66.26675 c 0.0902,-0.23048 -0.0149,-0.49131 -0.0439,-0.73071 l 0.007,-2.40037 c 0.007,-2.20657 -1.76377,-3.99517 -3.9703,-4.01061 l -48.566034,-0.34003 c -2.20652,-0.0154 -3.98826,1.74875 -3.9951,3.95531 l -0.0124,3.99563 c -0.007,2.20656 1.7643,3.99516 3.97082,4.0106 l 39.111344,1.34304 -24.34166,60.44489 c -1.232461,3.06043 2.65591,5.95571 5.95519,5.95571 z" stroke = "white" stroke-width = "6" fill="none"/>
      <path ref="p2" d="m 79.248893,55.778437 c -3.299268,0 -4.753508,2.88326 -5.955708,5.95571 l -25.92917,66.266743 c -0.0902,0.23048 0.0149,0.49131 0.0439,0.73071 l -0.007,2.40037 c -0.007,2.20657 1.76377,3.99517 3.9703,4.01061 l 48.566045,0.34003 c 2.20652,0.0154 3.98826,-1.74875 3.9951,-3.95531 l 0.0124,-3.99563 c 0.007,-2.20656 -1.7643,-3.99516 -3.97082,-4.0106 L 60.862585,122.17903 85.204243,61.734147 c 1.23246,-3.06043 -2.65591,-5.95571 -5.95519,-5.95571 z" stroke = "white" stroke-width = "6" fill="none"/>
      <path ref="p3"d="m 108.1022,103.97278 c -3.29927,0 -4.75351,2.88326 -5.95571,5.9557 l -25.929171,66.26675 c -0.0902,0.23048 0.0149,0.49131 0.0439,0.73071 l -0.007,2.40037 c -0.007,2.20657 1.76377,3.99517 3.9703,4.01061 l 48.566041,0.34003 c 2.20653,0.0154 3.98827,-1.74875 3.99511,-3.95531 l 0.0124,-3.99563 c 0.007,-2.20656 -1.76431,-3.99516 -3.97083,-4.0106 l -39.111351,-1.34304 24.341661,-60.44489 c 1.23246,-3.06042 -2.65591,-5.9557 -5.95519,-5.9557 z" stroke = "white" stroke-width = "6" fill="none"/>
    </mask>

    <linearGradient id="energy" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="var(--color-accent-red)" />
      <stop offset="50%" stop-color="var(--color-black)" />
      <stop offset="75%" stop-color="var(--color-primary-dark-hover)" />
      <stop offset="100%" stop-color="var(--loba-primary-dark)" />
    </linearGradient>
  </defs>

  <rect x="-210" width="420" height="297" fill="url(#energy)" mask="url(#logo-mask)">
    <animate attributeName="x" from="-210" to="0" dur="1.2s" repeatCount="indefinite"/>
  </rect>
    </svg>
  
  <div class="fixed w-full text-base font-bold text-center tag bottom-5">
    <p>Loading...</p>
  </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const p1 = ref(null);
const p2 = ref(null);
const p3 = ref(null);

onMounted(() => {
  gsap.set([p1.value, p2.value, p3.value], { drawSVG: "0%" });

  gsap.to([p1.value, p2.value, p3.value], {
    drawSVG: "100%",
    duration: 1.4,
    ease: "power2.inOut",
    stagger: 0.3,
    repeat: -1,
    yoyo: true
  });
});
</script>



<style scoped>
.loader-wrapper {
  background: var(--loba-color-background);
}

.loader-wrapper svg {
  display: block;     /* 🔥 REQUIRED */
  width: min(220px, 25vmin);
  height: auto;
}
.tag{
  font-family: var(--loba-font-family-base);
  font-weight: var(--loba-font-weight-bold);
  font-size: var(--loba-font-size-base);
}

.tag p{
  display: inline-block;
  margin: 0;
  padding: var(--loba-space-1) var(--loba-space-2);
  /* match the SVG gradient colors and animate */
  background: linear-gradient(90deg, var(--loba-color-text-secondary) 0%, var(--loba-color-warning) 70%, var(--loba-color-text-premium), var(--loba-color-background) 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientShift 1.2s linear infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

</style>
