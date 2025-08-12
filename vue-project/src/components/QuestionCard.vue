<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6">{{ question.questionText }}</div>
    </q-card-section>
    <q-card-actions vertical>
      <q-btn
        v-for="(option, index) in question.options"
        :key="index"
        @click="emit('answer', option)"
        class="q-mb-sm"
        color="primary"
        :label="option"
        :aria-label="`Ответ: ${option}`"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps(['question']);
defineEmits(['answer']);
</script>