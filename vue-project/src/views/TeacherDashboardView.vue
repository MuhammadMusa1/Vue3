<template>
  <q-page class="page">
    <div class="page-heading">
      <span>AI Teacher Dashboard</span>
      <h1>Учитель видит не оценки, а причины</h1>
      <p>AI выделяет слабые темы, частые ошибки, динамику класса и следующие действия.</p>
    </div>

    <section class="teacher-grid">
      <article class="insight-card insight-card--wide">
        <div class="section-heading">
          <span>Class pulse</span>
          <strong>Слабые темы</strong>
        </div>
        <canvas ref="chartCanvas" class="teacher-chart" aria-label="Class progress chart" />
        <div class="bar-list">
          <div v-for="item in weakTopics" :key="item.topic">
            <span>{{ item.topic }}</span>
            <q-linear-progress rounded :value="item.value / 100" color="secondary" />
            <strong>{{ item.value }}%</strong>
          </div>
        </div>
      </article>

      <article class="insight-card">
        <q-icon name="psychology" />
        <strong>AI рекомендация</strong>
        <p>Завтра дать 8-минутный micro-lesson по функциям и одну визуальную задачу на параметры.</p>
      </article>

      <article class="insight-card">
        <q-icon name="warning" />
        <strong>Risk radar</strong>
        <p>3 ученика теряют streak. Платформа предложит более короткие миссии и поддержку AI mentor.</p>
      </article>
    </section>
  </q-page>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const chartCanvas = ref(null);
let chart;

const weakTopics = [
  { topic: 'JavaScript functions', value: 72 },
  { topic: 'CSS Grid', value: 54 },
  { topic: 'API errors', value: 46 },
  { topic: 'Git branches', value: 38 }
];

onMounted(async () => {
  try {
    const { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip } = await import('chart.js');
    Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);
    chart = new Chart(chartCanvas.value, {
      type: 'bar',
      data: {
        labels: weakTopics.map(item => item.topic),
        datasets: [
          {
            label: 'Нужна помощь',
            data: weakTopics.map(item => item.value),
            backgroundColor: ['#37f0b3', '#5b7cff', '#ffcc66', '#ff6b8a'],
            borderRadius: 10
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#d7e7ff' }, grid: { display: false } },
          y: { ticks: { color: '#d7e7ff' }, grid: { color: 'rgba(255,255,255,0.08)' } }
        }
      }
    });
  } catch {
    chart = null;
  }
});

onBeforeUnmount(() => {
  chart?.destroy();
});
</script>
