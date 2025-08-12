import { defineStore } from 'pinia';
import { ref } from 'vue';
import { cheatsheetCategories, cheatsheetMaterials } from '@/data/cheatsheets';

export const useCheatsheetStore = defineStore('cheatsheet', () => {
  const categories = ref(cheatsheetCategories);
  const materials = ref(cheatsheetMaterials);

  const addNote = async (note, materialId) => {
    const material = materials.value.find(m => m.id === materialId);
    if (material) {
      material.notes = material.notes || [];
      material.notes.push(note);
    }
  };

  return { cheatsheetCategories: categories, cheatsheetMaterials: materials, addNote };
});