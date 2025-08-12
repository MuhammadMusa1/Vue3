<template>
  <div>
    <h6 class="q-mt-none">Тест завершён!</h6>
    <p>Правильных ответов: {{ score }} из {{ total }}</p>
    <q-btn
      label="Показать ошибки"
      color="primary"
      @click="showErrors = true"
      v-if="errors.length"
    />
    <q-btn
      label="Начать заново"
      color="primary"
      @click="emit('reset')"
      class="q-ml-md"
    />
    <q-btn
      label="Вернуться к списку тестов"
      color="secondary"
      class="q-ml-md"
      to="/tests"
    />
    <q-dialog v-model="showErrors">
      <q-card>
        <q-card-section>
          <h6>Ошибки</h6>
          <div v-for="error in errors" :key="error.question">
            <p>{{ error.question }}</p>
            <p>Ваш ответ: {{ error.selected }}</p>
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Закрыть" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps(['score', 'total', 'errors']);
defineEmits(['reset']);
const showErrors = ref(false);
</script>