<template>
  <aside class="live-terminal">
    <header>
      <q-icon name="terminal" />
      <strong>Live Terminal</strong>
    </header>
    <pre>{{ output }}</pre>
  </aside>
</template>

<script setup>
defineProps({
  output: {
    type: String,
    default: ''
  }
});
</script>
