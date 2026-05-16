<template>
  <q-page class="page page--dashboard">
    <HeroDashboard />

    <section class="metric-grid">
      <article class="metric-card animate-in" style="animation-delay: 0.1s">
        <span>XP</span>
        <strong>{{ progress.learner.xp }}</strong>
        <q-linear-progress rounded :value="progress.levelProgress / 100" color="secondary" />
      </article>
      <article class="metric-card animate-in" style="animation-delay: 0.2s">
        <span>Roadmap</span>
        <strong>{{ learning.totalProgress }}%</strong>
        <q-icon name="route" />
      </article>
      <article class="metric-card animate-in" style="animation-delay: 0.3s">
        <span>Streak</span>
        <strong>{{ progress.learner.streak }} дней</strong>
        <q-icon name="local_fire_department" />
      </article>
      <article class="metric-card animate-in" style="animation-delay: 0.4s">
        <span>Missions</span>
        <strong>{{ progress.completedMissions }}/{{ progress.missions.length }}</strong>
        <q-icon name="task_alt" />
      </article>
    </section>


    <section class="dashboard-grid">
      <DailyMissions />
      <ProgressHeatmap />
      <AchievementGrid />
    </section>
  </q-page>
</template>

<script setup>
import AchievementGrid from '@/components/dashboard/AchievementGrid.vue';
import DailyMissions from '@/components/dashboard/DailyMissions.vue';
import HeroDashboard from '@/components/dashboard/HeroDashboard.vue';
import ProgressHeatmap from '@/components/dashboard/ProgressHeatmap.vue';
import { useLearningStore } from '@/stores/learning';
import { useUserProgressStore } from '@/stores/userProgress';

const learning = useLearningStore();
const progress = useUserProgressStore();
</script>
