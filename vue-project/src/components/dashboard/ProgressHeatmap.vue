<template>
  <section class="glass-panel">
    <div class="section-heading">
      <span>Consistency</span>
      <strong>Coding streak</strong>
    </div>
    <div class="heatmap">
      <span
        v-for="(value, index) in progress.heatmap"
        :key="index"
        class="heatmap__cell"
        :style="{ opacity: 0.2 + value / 130, '--heat': `${value}%` }"
      />
    </div>
  </section>
</template>

<script setup>
import { useUserProgressStore } from '@/stores/userProgress';

const progress = useUserProgressStore();
</script>
