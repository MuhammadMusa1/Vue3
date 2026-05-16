<template>
  <section class="ml-playground">
    <div class="glass-panel animate-in" style="animation-delay: 0.1s">
      <div class="section-heading">
        <span>Beginner ML</span>
        <strong>Color classifier</strong>
      </div>
      <div class="color-lab">
        <input v-model="color" type="color" />
        <div class="color-lab__sample" :style="{ background: color, boxShadow: `0 0 40px ${color}` }" />
        <div>
          <span>AI prediction</span>
          <div class="text-h5 text-bold">{{ prediction }}</div>
          <p class="opacity-70">Модель объясняет цвет: яркость {{ brightness }}%, настроение {{ mood }}.</p>
          <q-btn 
            class="q-mt-sm" 
            unelevated 
            color="secondary" 
            icon="model_training" 
            :label="isTraining ? 'Training...' : 'Train tiny model'" 
            :loading="isTraining"
            @click="trainTinyModel" 
          />
        </div>
      </div>
      <div v-if="lossHistory.length > 0" class="q-mt-lg animate-in">
        <div class="text-caption opacity-60">Кривая обучения (Loss Curve):</div>
        <TrainingChart :data="lossHistory" />
      </div>
      <p v-if="trainingLog" class="q-mt-md text-caption text-secondary">{{ trainingLog }}</p>
    </div>
    <div class="glass-panel animate-in" style="animation-delay: 0.2s">
      <div class="section-heading">
        <span>Neural view</span>
        <strong>Как данные бегут по сети</strong>
      </div>
      <NeuralNetworkViz />
    </div>
  </section>
</template>


<script setup>
import { computed, ref } from 'vue';
import NeuralNetworkViz from '@/components/ml/NeuralNetworkViz.vue';
import TrainingChart from '@/components/ml/TrainingChart.vue';

const color = ref('#37f0b3');
const trainingLog = ref('');
const lossHistory = ref([]);
const isTraining = ref(false);

const rgb = computed(() => {
  const value = color.value.replace('#', '');
  return [0, 2, 4].map(index => parseInt(value.slice(index, index + 2), 16));
});

const brightness = computed(() => Math.round((rgb.value[0] * 0.299 + rgb.value[1] * 0.587 + rgb.value[2] * 0.114) / 2.55));
const prediction = computed(() => (brightness.value > 62 ? 'Светлый UI-акцент' : 'Темный акцент'));
const mood = computed(() => (rgb.value[1] > rgb.value[0] ? 'свежий' : 'энергичный'));

const trainTinyModel = async () => {
  isTraining.value = true;
  lossHistory.value = [];
  trainingLog.value = 'Запускаю TensorFlow.js...';
  
  try {
    const tf = await import('@tensorflow/tfjs');
    
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 8, inputShape: [3], activation: 'relu' }));
    model.add(tf.layers.dense({ units: 4, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
    
    model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

    // Генерируем чуть больше данных для красоты графика
    const xs = tf.tensor2d([
      [1, 1, 1], [0, 0, 0], [0.1, 0.9, 0.6], [0.9, 0.2, 0.3],
      [1, 0.9, 0.9], [0.1, 0.1, 0.1], [0.2, 0.8, 0.5], [0.8, 0.1, 0.2]
    ]);
    const ys = tf.tensor2d([[1], [0], [1], [0], [1], [0], [1], [0]]);

    await model.fit(xs, ys, {
      epochs: 40,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          lossHistory.value.push(logs.loss);
        }
      }
    });

    const result = model.predict(tf.tensor2d([rgb.value.map(value => value / 255)]));
    const score = (await result.data())[0];
    
    trainingLog.value = `Обучение завершено. Точность прогноза: ${Math.round(score * 100)}%.`;
    tf.dispose([xs, ys, result]);
  } catch (err) {
    console.error(err);
    trainingLog.value = 'Ошибка при загрузке TensorFlow.js. Пожалуйста, убедитесь, что зависимости установлены.';
  } finally {
    isTraining.value = false;
  }
};
</script>

