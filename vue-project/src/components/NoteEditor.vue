<template>
  <q-card class="q-ma-md">
    <q-card-section>
      <q-input
        v-model="note"
        label="Добавить заметку"
        type="textarea"
        outlined
        aria-label="Поле для заметки"
      />
    </q-card-section>
    <q-card-actions>
      <q-btn label="Сохранить" color="primary" @click="save" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';

const note = ref('');
defineEmits(['save']);

const save = () => {
  if (note.value.trim()) {
    emit('save', note.value);
    note.value = '';
  }
};
</script>