<template>
  <section class="roadmap">
    <article 
      v-for="track in learning.tracks" 
      :key="track.id" 
      class="roadmap-card"
      :class="{ 
        'roadmap-card--active': track.progress > 0 && track.progress < 100,
        'roadmap-card--completed': track.progress === 100
      }"
      :style="{ color: track.color }"
    >
      <div class="roadmap-card__orb" :style="{ background: track.color }">
        <q-icon :name="track.progress === 100 ? 'check' : track.icon || 'code'" />
      </div>
      <div class="roadmap-card__body">
        <span class="text-uppercase text-bold opacity-60">{{ track.level }}</span>
        <h3>{{ track.title }}</h3>
        <p>{{ track.mission }}</p>
        <div class="skill-pills">
          <span v-for="skill in track.skills" :key="skill">{{ skill }}</span>
        </div>
        <q-linear-progress 
          rounded 
          size="12px" 
          :value="track.progress / 100" 
          :color="track.progress === 100 ? 'positive' : 'primary'"
          class="q-mt-sm"
        />
      </div>
      <div class="text-h4 text-bold q-ml-md">
        {{ track.progress }}<small class="text-caption">%</small>
      </div>
    </article>
  </section>
</template>


<script setup>
import { useLearningStore } from '@/stores/learning';

const learning = useLearningStore();
</script>
