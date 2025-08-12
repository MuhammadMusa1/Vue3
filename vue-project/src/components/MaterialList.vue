<template>
  <q-list bordered separator>
    <q-item v-for="material in materials" :key="material.id">
      <q-item-section>
        <q-item-label>{{ material.title }}</q-item-label>
        <q-item-label caption>{{ getCategoryName(material.categoryId) }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-if="materials.length === 0">
      <q-item-section>
        <q-item-label>Материалы не найдены.</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
defineProps({
  materials: Array,
  getCategoryName: Function
});
</script>