<template>
  <q-page class="q-pa-md">
    <h5 class="q-mt-none">Шпаргалка</h5>
    <SearchBar v-model="searchQuery" />
    <MaterialList :materials="filteredMaterials" :getCategoryName="getCategoryName" />
    <NoteEditor v-if="isAuthenticated" @save="saveNote" />
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { useAuth } from '@/composables/useAuth';
import { useCheatsheetStore } from '@/stores/cheatsheet';
import SearchBar from '@/components/SearchBar.vue';
import MaterialList from '@/components/MaterialList.vue';
import NoteEditor from '@/components/NoteEditor.vue';

const store = useCheatsheetStore();
const { cheatsheetMaterials, cheatsheetCategories } = store;
const { isAuthenticated } = useAuth();
const searchQuery = ref('');

const filteredMaterials = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return cheatsheetMaterials.filter(
    material =>
      material.title.toLowerCase().includes(query) ||
      material.content.toLowerCase().includes(query)
  );
});

const debouncedSearch = useDebounceFn(() => {}, 300);

const getCategoryName = id => {
  const category = cheatsheetCategories.find(cat => cat.id === id);
  return category ? category.name : 'Неизвестно';
};

const saveNote = async note => {
  await store.addNote(note);
};
</script>