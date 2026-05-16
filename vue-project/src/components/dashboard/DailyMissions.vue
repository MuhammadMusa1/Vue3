<template>
  <section class="glass-panel">
    <div class="section-heading">
      <span>Сегодня</span>
      <strong>Daily missions</strong>
    </div>
    <div class="mission-list">
      <button
        v-for="mission in progress.missions"
        :key="mission.id"
        class="mission-item"
        type="button"
        :class="{ 'mission-item--done': mission.done }"
        @click="complete(mission.id)"
      >
        <q-icon :name="mission.done ? 'task_alt' : 'radio_button_unchecked'" />
        <span>{{ mission.title }}</span>
        <strong>+{{ mission.reward }} XP</strong>
      </button>
    </div>
  </section>
</template>

<script setup>
import { useUserProgressStore } from '@/stores/userProgress';

const progress = useUserProgressStore();

const playSuccessSound = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.frequency.value = 740;
  gain.gain.value = 0.04;
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.12);
};

const complete = async id => {
  const mission = progress.missions.find(item => item.id === id);
  if (!mission || mission.done) return;
  progress.completeMission(id);
  playSuccessSound();
  try {
    const confetti = await import('canvas-confetti');
    confetti.default({ particleCount: 70, spread: 65, origin: { y: 0.75 } });
  } catch {
    // Confetti is an enhancement and should never block progress.
  }
};
</script>
