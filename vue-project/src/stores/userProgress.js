import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { achievements, dailyMissions } from '@/data/learningRoadmap';

export const useUserProgressStore = defineStore('userProgress', () => {
  const learner = ref({
    name: 'Amina',
    role: 'Junior Explorer',
    level: 7,
    xp: 2840,
    nextLevelXp: 3200,
    streak: 12,
    energy: 84
  });

  const unlockedAchievements = ref(achievements);
  const missions = ref(dailyMissions);
  const heatmap = ref(Array.from({ length: 35 }, (_, index) => (index * 17 + 23) % 100));

  const levelProgress = computed(() => Math.round((learner.value.xp / learner.value.nextLevelXp) * 100));
  const completedMissions = computed(() => missions.value.filter(mission => mission.done).length);

  const addXp = amount => {
    learner.value.xp += amount;
    learner.value.energy = Math.min(100, learner.value.energy + 4);
    if (learner.value.xp >= learner.value.nextLevelXp) {
      learner.value.level += 1;
      learner.value.xp -= learner.value.nextLevelXp;
      learner.value.nextLevelXp += 450;
    }
  };

  const completeMission = id => {
    const mission = missions.value.find(item => item.id === id);
    if (!mission || mission.done) return;
    mission.done = true;
    addXp(mission.reward);
  };

  return {
    completedMissions,
    completeMission,
    heatmap,
    learner,
    levelProgress,
    missions,
    unlockedAchievements
  };
});
