<template>
  <div class="q-pa-md row items-start q-gutter-md justify-center">
    <q-card class="my-card bg-primary text-white">
      <q-card-section>
        <div class="text-h6">Шпаргалка</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        Материалы по различным предметам. Поиск по темам.
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn flat>
          <router-link to="/cheatsheet" class="text-white text-decoration-none">
            Перейти
          </router-link>
        </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Тесты</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        Пройти тесты по различным темам с разбором ошибок.
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn flat>
          <router-link to="/tests" class="text-white text-decoration-none">
            Перейти
          </router-link>
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
// Здесь пока ничего нет, но мы добавили стили ниже.
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
/* Мы добавим стили, чтобы ссылка выглядела как кнопка */
.text-decoration-none {
  text-decoration: none;
}
</style>