<template>
  <q-page class="page">
    <div class="page-heading">
      <span>ML Playground</span>
      <h1>Машинное обучение без страшных слов</h1>
      <p>Визуальные мини-демо показывают, как модель смотрит на данные и делает prediction.</p>
    </div>

    <MlPlayground />

    <section class="ml-demo-grid">
      <article class="glass-panel">
        <div class="section-heading">
          <span>Digits</span>
          <strong>Распознавание цифр</strong>
        </div>
        <div class="digit-board">
          <span v-for="cell in 64" :key="cell" :class="{ active: cell % 5 === 0 || cell % 9 === 0 }" />
        </div>
        <p>Production-версия подключает TensorFlow.js MNIST model и canvas для рисования.</p>
      </article>
      <article class="glass-panel">
        <div class="section-heading">
          <span>Prediction</span>
          <strong>Прогноз XP</strong>
        </div>
        <q-slider v-model="minutes" :min="5" :max="60" color="secondary" />
        <h3>{{ predictedXp }} XP</h3>
        <p>Если заниматься {{ minutes }} минут, система прогнозирует рост навыка и предлагает миссию.</p>
      </article>
    </section>
  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue';
import MlPlayground from '@/components/ml/MlPlayground.vue';

const minutes = ref(20);
const predictedXp = computed(() => minutes.value * 7 + 40);
</script>
