<template>
  <div class="floating-ai">
    <transition name="assistant-panel">
      <AiChatPanel v-if="open" @close="open = false" />
    </transition>
    <button class="assistant-orb" type="button" @click="open = !open" aria-label="Открыть AI помощника">
      <span class="assistant-orb__face">AI</span>
      <span class="assistant-orb__pulse" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AiChatPanel from '@/components/ai/AiChatPanel.vue';

const open = ref(false);
</script>
