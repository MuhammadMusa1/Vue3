<template>
  <q-page class="page">
    <div class="page-heading">
      <span>Real Projects</span>
      <h1>Проекты, которые хочется показать друзьям</h1>
      <p>Каждый проект открывает новую механику: UI, API, auth, AI или ML.</p>
    </div>

    <section class="project-grid">
      <article v-for="project in learning.projectList" :key="project.id" class="project-card">
        <div class="project-card__top">
          <q-icon :name="project.status === 'locked' ? 'lock' : 'auto_awesome'" />
          <q-badge rounded>{{ project.status }}</q-badge>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.pitch }}</p>
        <div class="skill-pills">
          <span v-for="item in project.stack" :key="item">{{ item }}</span>
        </div>
        <footer>
          <strong>+{{ project.xp }} XP</strong>
          <q-btn flat color="secondary" label="Открыть" />
        </footer>
      </article>
    </section>
  </q-page>
</template>

<script setup>
import { useLearningStore } from '@/stores/learning';

const learning = useLearningStore();
</script>
