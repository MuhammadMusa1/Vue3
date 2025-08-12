import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { tests } from '@/data/tests';

export const useTestStore = defineStore('test', () => {
  const currentTest = ref(null);
  const currentQuestionIndex = ref(0);
  const score = ref(0);
  const errors = ref([]);
  const timeLeft = ref(600);

  const currentQuestion = computed(() => {
    return currentTest.value?.questions[currentQuestionIndex.value];
  });

  const progress = computed(() => {
    if (!currentTest.value) return 0;
    return currentQuestionIndex.value / currentTest.value.questions.length;
  });

  const loadTest = id => {
    currentTest.value = tests.find(t => t.id === id);
    if (!currentTest.value) return;
    currentQuestionIndex.value = 0;
    score.value = 0;
    errors.value = [];
    timeLeft.value = 600;
  };

  const submitAnswer = answer => {
    const question = currentQuestion.value;
    if (answer === question.correctAnswer) {
      score.value++;
    } else {
      errors.value.push({ question: question.questionText, selected: answer });
    }
    currentQuestionIndex.value++;
  };

  const resetTest = () => {
    currentQuestionIndex.value = 0;
    score.value = 0;
    errors.value = [];
    timeLeft.value = 600;
  };

  return { currentTest, currentQuestion, progress, score, errors, timeLeft, loadTest, submitAnswer, resetTest };
});