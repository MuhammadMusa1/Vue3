<template>
  <q-page class="q-pa-md">
    <h5 v-if="currentTest" class="q-mt-none">{{ currentTest.title }}</h5>
    <q-linear-progress :value="progress" color="primary" class="q-mb-md" />
    <TestTimer v-if="showTimer" :timeLeft="timeLeft" />

    <div v-if="!currentTest">
      <p>Тест не найден.</p>
      <q-btn label="Вернуться к списку" color="secondary" to="/tests" />
    </div>

    <QuestionCard
      v-else-if="currentQuestion"
      :question="currentQuestion"
      @answer="answerQuestion"
    />

    <TestResults
      v-else
      :score="score"
      :total="currentTest.questions.length"
      :errors="errors"
      @reset="resetTest"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTestStore } from '@/stores/test';
import QuestionCard from '@/components/QuestionCard.vue';
import TestResults from '@/components/TestResults.vue';
import TestTimer from '@/components/TestTimer.vue';

const route = useRoute();
const store = useTestStore();
const showTimer = ref(true);

store.loadTest(route.params.id);
const { currentTest, currentQuestion, progress, score, errors, timeLeft } = store;

const answerQuestion = answer => {
  store.submitAnswer(answer);
};

const resetTest = () => {
  store.resetTest();
};
</script>