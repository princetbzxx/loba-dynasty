<template>
    <section class="banner">
        <div class="banner-title">{{ title }}</div>
        <div class="banner-subtitle">{{ subtitle }}</div>
        <button class="banner-button" v-if="buttonText">{{ buttonText }}</button>
    </section>
</template>
<script setup lang="ts">
defineProps<{
    title: string
    subtitle: string
    buttonText?: string
}>()
</script>
<style scoped>
.banner{
    display: flex;
    width: 100%;
    position: relative;
    padding: 4rem 1.5rem;
}

</style>