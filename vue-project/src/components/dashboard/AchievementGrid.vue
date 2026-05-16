<template>
  <section class="glass-panel">
    <div class="section-heading">
      <span>Motivation</span>
      <strong>Achievements</strong>
    </div>
    <div class="achievement-grid">
      <article
        v-for="achievement in progress.unlockedAchievements"
        :key="achievement.id"
        :class="['achievement', { 'achievement--locked': !achievement.earned }]"
      >
        <q-icon :name="achievement.icon" />
        <span>{{ achievement.title }}</span>
      </article>
    </div>
  </section>
</template>

<script setup>
import { useUserProgressStore } from '@/stores/userProgress';

const progress = useUserProgressStore();
</script>
