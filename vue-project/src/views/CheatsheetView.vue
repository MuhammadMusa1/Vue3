<template>
  <q-page class="q-pa-md">
    <h5 class="q-mt-none">Шпаргалка</h5>

    <q-input
      v-model="searchQuery"
      placeholder="Поиск по материалам..."
      clearable
      outlined
      dense
      class="q-mb-md"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <q-list bordered separator>
      <q-item v-for="material in filteredMaterials" :key="material.id">
        <q-item-section>
          <q-item-label>{{ material.title }}</q-item-label>
          <q-item-label caption>{{ getCategoryName(material.categoryId) }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="filteredMaterials.length === 0">
        <q-item-section>
          <q-item-label>Материалы не найдены.</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { cheatsheetCategories, cheatsheetMaterials } from '../data/cheatsheets.js';

// Состояние для поля поиска
const searchQuery = ref('');

// Вычисляемое свойство для фильтрации материалов
const filteredMaterials = computed(() => {
  if (!searchQuery.value) {
    return cheatsheetMaterials;
  }
  const query = searchQuery.value.toLowerCase();
  return cheatsheetMaterials.filter(material => 
    material.title.toLowerCase().includes(query) ||
    material.content.toLowerCase().includes(query)
  );
});

// Функция для получения имени категории по ID
const getCategoryName = (id) => {
  const category = cheatsheetCategories.find(cat => cat.id === id);
  return category ? category.name : 'Неизвестно';
};
</script>