<template>
  <section class="hero-dashboard">
    <div class="hero-dashboard__copy">
      <q-badge rounded class="hero-dashboard__badge">AI-powered learning OS</q-badge>
      <h1>Учись программировать так, будто рядом лучший AI-наставник.</h1>
      <p>
        Roadmap, live coding, подсказки, XP, проекты и ML-демо собраны в один понятный маршрут для новичков.
      </p>
      <div class="hero-dashboard__actions">
        <q-btn unelevated color="secondary" icon="play_arrow" label="Продолжить урок" to="/learn" />
        <q-btn outline color="white" icon="psychology" label="Открыть AI Arena" to="/arena" />
      </div>
    </div>
    <div class="hero-dashboard__visual">
      <NeuralNetworkViz />
    </div>
  </section>
</template>

<script setup>
import NeuralNetworkViz from '@/components/ml/NeuralNetworkViz.vue';
</script>
