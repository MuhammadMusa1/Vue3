<template>
  <div>Осталось: {{ formatTime(timeLeft) }}</div>
</template>

<script setup>
import { useIntervalFn } from '@vueuse/core';

defineProps(['timeLeft']);
useIntervalFn(() => {
  if (props.timeLeft > 0) props.timeLeft--;
}, 1000);

const formatTime = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
</script>