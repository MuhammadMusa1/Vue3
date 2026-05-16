<template>
  <section class="ai-panel">
    <header class="ai-panel__header">
      <div>
        <strong>AI Mentor</strong>
        <span>Объясняет, подсказывает, дебажит</span>
      </div>
      <q-btn flat round dense icon="close" @click="$emit('close')" />
    </header>

    <div class="ai-panel__messages">
      <article v-for="message in messages" :key="message.id" :class="['message', `message--${message.role}`]">
        <span>{{ message.text }}</span>
      </article>
    </div>

    <div class="ai-panel__quick">
      <q-btn outline dense label="Объясни код" @click="runAction('explain')" />
      <q-btn outline dense label="Найди ошибку" @click="runAction('debug')" />
      <q-btn outline dense label="Дай подсказку" @click="runAction('hint')" />
    </div>

    <q-input
      v-model="prompt"
      autogrow
      borderless
      class="ai-panel__input"
      placeholder="Вставь код или вопрос..."
      @keyup.enter.exact.prevent="runAction('chat')"
    >
      <template #append>
        <q-btn round unelevated color="secondary" icon="send" @click="runAction('chat')" />
      </template>
    </q-input>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { debugCode, explainCode, nextHint } from '@/services/aiMentor';

const emit = defineEmits(['close']);

const prompt = ref("");
const messages = ref([
  {
    id: 1,
    role: 'mentor',
    text: 'Привет! Я твой AI-наставник. Могу объяснить код, найти ошибку или дать подсказку, чтобы ты решил задачу сам.'
  }
]);

const isTyping = ref(false);
const scrollContainer = ref(null);

const scrollToBottom = async () => {
  await nextTick();
  const el = document.querySelector('.ai-panel__messages');
  if (el) el.scrollTop = el.scrollHeight;
};

const typeMessage = async (text) => {
  isTyping.value = true;
  const messageId = Date.now();
  messages.value.push({ id: messageId, role: 'mentor', text: '' });
  
  const currentMessage = messages.value.find(m => m.id === messageId);
  const words = text.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    currentMessage.text += (i === 0 ? '' : ' ') + words[i];
    await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 40));
    scrollToBottom();
  }
  isTyping.value = false;
};

const runAction = async (action) => {
  if (isTyping.value) return;
  
  const userText = prompt.value || (action === 'explain' ? 'Объясни мой код' : action);
  messages.value.push({ id: Date.now(), role: 'learner', text: userText });
  prompt.value = "";
  scrollToBottom();

  let response = "";
  if (action === 'explain') response = explainCode(userText);
  else if (action === 'debug') response = debugCode(userText).join('\n');
  else if (action === 'hint') response = nextHint('текущая задача', messages.value.length % 3);
  else response = 'Интересный вопрос! Давай разберем это с точки зрения логики приложения. Какой результат ты хочешь получить в итоге?';

  await new Promise(resolve => setTimeout(resolve, 600)); // Имитация "раздумий"
  await typeMessage(response);
};
</script>

