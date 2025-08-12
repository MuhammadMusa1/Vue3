<template>
  <q-input
    v-model="model"
    placeholder="Поиск по материалам..."
    clearable
    outlined
    dense
    class="q-mb-md"
    aria-label="Поиск материалов"
    @update:model-value="debouncedSearch"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script setup>
import { useDebounceFn } from '@vueuse/core';

defineProps(['modelValue']);
defineEmits(['update:modelValue']);

const debouncedSearch = useDebounceFn(val => {
  emit('update:modelValue', val);
}, 300);
</script>