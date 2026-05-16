<template>
  <q-page class="page">
    <div class="page-heading">
      <span>Learning Roadmap</span>
      <h1>От первого тега до AI-приложения</h1>
      <p>Каждый модуль дает маленькую победу: теория, live coding, практика и проект.</p>
    </div>

    <LearningRoadmap />

    <section class="lesson-grid">
      <article v-for="lesson in learning.lessonList" :key="lesson.id" class="lesson-card">
        <q-badge rounded>{{ lesson.track }}</q-badge>
        <h3>{{ lesson.title }}</h3>
        <p>{{ lesson.summary }}</p>
        <footer>
          <span><q-icon name="schedule" /> {{ lesson.duration }}</span>
          <span><q-icon name="signal_cellular_alt" /> {{ lesson.difficulty }}</span>
        </footer>
      </article>
    </section>
  </q-page>
</template>

<script setup>
import LearningRoadmap from '@/components/learning/LearningRoadmap.vue';
import { useLearningStore } from '@/stores/learning';

const learning = useLearningStore();
</script>
