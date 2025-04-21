<template>
  <div ref="targetRef" :class="{ 'fade-in': isVisible }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const targetRef = ref(null)
const isVisible = ref(false)

const { stop } = useIntersectionObserver(
  targetRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
    }
  },
  { threshold: 0.1 }
)
</script>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

div {
  opacity: 0;
}
</style> 