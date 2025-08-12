<template>
  <q-page class="q-pa-md">
    <h5 class="q-mt-none">Раздел "Тесты"</h5>
    <div class="row q-gutter-md">
      <q-card v-for="test in tests" :key="test.id" class="my-card bg-info text-white">
        <q-card-section>
          <div class="text-h6">{{ test.title }}</div>
        </q-card-section>

        <q-separator dark />

        <q-card-actions align="right">
          <q-btn flat :to="`/tests/${test.id}`">Начать</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { tests } from '../data/tests.js';
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>