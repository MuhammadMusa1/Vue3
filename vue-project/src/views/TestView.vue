<template>
  <q-page class="q-pa-md">
    <h5 v-if="currentTest" class="q-mt-none">{{ currentTest.title }}</h5>

    <q-linear-progress
      :value="progress"
      color="primary"
      class="q-mb-md"
    />

    <div v-if="!currentTest">
      <p>Тест не найден.</p>
    </div>

    <q-card v-else-if="currentQuestion" class="q-pa-md">
      <q-card-section>
        <div class="text-h6">{{ currentQuestion.questionText }}</div>
      </q-card-section>

      <q-card-actions vertical>
        <q-btn
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          @click="answerQuestion(option)"
          class="q-mb-sm"
          color="primary"
          :label="option"
        />
      </q-card-actions>
    </q-card>

    <div v-else>
      <h6 class="q-mt-none">Тест завершён!</h6>
      <p>Правильных ответов: {{ score }} из {{ currentTest.questions.length }}</p>
      <q-btn
        label="Начать заново"
        color="primary"
        @click="resetTest"
      />
      <q-btn
        label="Вернуться к списку тестов"
        color="secondary"
        class="q-ml-md"
        @click="$router.push('/tests')"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { tests } from '../data/tests.js';

const route = useRoute();
const currentTest = ref(null);
const currentQuestionIndex = ref(0);
const score = ref(0);

currentTest.value = tests.find(t => t.id === route.params.id);

const currentQuestion = computed(() => {
  return currentTest.value?.questions[currentQuestionIndex.value];
});

const progress = computed(() => {
  if (!currentTest.value) return 0;
  return (currentQuestionIndex.value) / currentTest.value.questions.length;
});

const answerQuestion = (answer) => {
  if (answer === currentQuestion.value.correctAnswer) {
    score.value++;
  }
  currentQuestionIndex.value++;
};

const resetTest = () => {
  currentQuestionIndex.value = 0;
  score.value = 0;
};
</script>