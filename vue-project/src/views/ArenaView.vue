<template>
  <q-page class="page">
    <div class="page-heading">
      <span>Practice Arena</span>
      <h1>Пиши код, получай подсказки, исправляй ошибки</h1>
      <p>AI не забирает задачу себе: он помогает понять следующий шаг.</p>
    </div>

    <CodeStudio />

    <section class="arena-grid">
      <div class="glass-panel">
        <div class="section-heading">
          <span>Smart Hint System</span>
          <strong>Подсказки постепенно</strong>
        </div>
        <p>{{ currentHint }}</p>
        <q-btn unelevated color="secondary" icon="tips_and_updates" label="Следующая подсказка" @click="currentHint = learning.getSmartHint('JavaScript функция')" />
      </div>

      <div class="glass-panel">
        <div class="section-heading">
          <span>AI Quiz Generator</span>
          <strong>Тест по теме</strong>
        </div>
        <q-input v-model="topic" dense outlined dark label="Тема" />
        <q-btn class="q-mt-md" outline color="secondary" icon="quiz" label="Сгенерировать" @click="learning.generateTopicQuiz(topic)" />
        <div class="quiz-list">
          <article v-for="item in learning.generatedQuiz" :key="item.question">
            <strong>{{ item.question }}</strong>
            <span>{{ item.answer }}</span>
          </article>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import CodeStudio from '@/components/practice/CodeStudio.vue';
import { useLearningStore } from '@/stores/learning';

const learning = useLearningStore();
const topic = ref('JavaScript функции');
const currentHint = ref(learning.getSmartHint(topic.value));
</script>
