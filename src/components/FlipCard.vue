<script setup lang="ts">
import { ref } from "vue";

/*
  PROPS:
  - rotate: choose flip direction ("x" = vertical flip, "y" = horizontal flip)
  - trigger: choose how the flip happens ("hover" or "click")
*/
interface Props {
  rotate?: "x" | "y";
  trigger?: "hover" | "click";
}

const props = withDefaults(defineProps<Props>(), {
  rotate: "y",
  trigger: "hover",
});

/*
  STATE:
  - flipped: used only when trigger = "click"
    (hover uses pure CSS, click uses JS toggle)
*/
const flipped = ref(false);

const toggle = () => {
  if (props.trigger === "click") {
    flipped.value = !flipped.value;
  }
};
</script>

<template>
  <!-- 
    OUTER WRAPPER:
    - perspective gives the 3D camera effect
    - click handler only works if trigger="click"
  -->
  <div
    class="flip-card"
    :class="{ 'is-flipped': flipped }"
    @click="toggle"
  >
    <!-- 
      INNER WRAPPER:
      - this is the element that actually rotates
      - transform-style: preserve-3d keeps the 3D layers intact
      - transition makes the flip smooth
    -->
    <div class="flip-inner" :class="`rotate-${props.rotate}`">

      <!-- FRONT FACE -->
      <!-- 
        - absolute + inset-0 makes it fill the card
        - backface-hidden prevents mirrored text from showing
      -->
      <div class="flip-front">
        <slot />
      </div>

      <!-- BACK FACE -->
      <!-- 
        - rotated 180deg so it appears when the wrapper flips
      -->
      <div class="flip-back">
        <slot name="back" />
      </div>

    </div>
  </div>
</template>

<style scoped>
/* 
  1. The 3D camera.
  Without perspective, the flip looks flat.
*/
.flip-card {
  perspective: 1000px;
  width: 100%;
  height: 100%;
}

/*
  2. The rotating wrapper.
  This is the element that flips.
*/
.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; /* keep 3D layers */
  transition: transform .6s ease; /* smooth flip */
}

/*
  3. Hover trigger (desktop)
  If trigger="hover", CSS handles the flip.
*/
.flip-card:hover .flip-inner.rotate-y {
  transform: rotateY(180deg);
}

.flip-card:hover .flip-inner.rotate-x {
  transform: rotateX(180deg);
}

/*
  4. Click trigger (mobile)
  If trigger="click", JS toggles .is-flipped
*/
.flip-card.is-flipped .flip-inner.rotate-y {
  transform: rotateY(180deg);
}

.flip-card.is-flipped .flip-inner.rotate-x {
  transform: rotateX(180deg);
}

/*
  5. The two faces.
  Both fill the card and hide when facing away.
*/
.flip-front,
.flip-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden; /* hides mirrored backside */
}

/*
  6. Back face rotated 180deg so it shows after flip.
*/
.flip-back {
  transform: rotateY(180deg);
}
</style>
