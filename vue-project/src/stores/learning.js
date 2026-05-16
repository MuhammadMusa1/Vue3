import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { generateQuiz, nextHint } from '@/services/aiMentor';
import { lessons, projects, roadmap } from '@/data/learningRoadmap';

export const useLearningStore = defineStore('learning', () => {
  const tracks = ref(roadmap);
  const lessonList = ref(lessons);
  const projectList = ref(projects);
  const selectedTopic = ref('JavaScript');
  const hintStep = ref(0);
  const generatedQuiz = ref(generateQuiz(selectedTopic.value));

  const totalProgress = computed(() => {
    const sum = tracks.value.reduce((acc, track) => acc + track.progress, 0);
    return Math.round(sum / tracks.value.length);
  });

  const generateTopicQuiz = topic => {
    selectedTopic.value = topic;
    generatedQuiz.value = generateQuiz(topic);
  };

  const getSmartHint = topic => {
    const hint = nextHint(topic || selectedTopic.value, hintStep.value);
    hintStep.value += 1;
    return hint;
  };

  const resetHints = () => {
    hintStep.value = 0;
  };

  return {
    generatedQuiz,
    generateTopicQuiz,
    getSmartHint,
    hintStep,
    lessonList,
    projectList,
    resetHints,
    selectedTopic,
    totalProgress,
    tracks
  };
});
