<template>
  <div class="training-chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});

const chartCanvas = ref(null);
let chart = null;

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d');
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Model Loss (Error)',
        data: [],
        borderColor: '#37f0b3',
        backgroundColor: 'rgba(55, 240, 179, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          ticks: { color: 'rgba(255, 255, 255, 0.6)' }
        },
        x: {
          grid: { display: false },
          ticks: { display: false }
        }
      }
    }
  });
});

watch(() => props.data, (newData) => {
  if (chart) {
    chart.data.labels = newData.map((_, i) => i);
    chart.data.datasets[0].data = newData;
    chart.update('none');
  }
}, { deep: true });
</script>

<style scoped>
.training-chart-container {
  height: 180px;
  width: 100%;
  margin-top: 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 12px;
}
</style>
