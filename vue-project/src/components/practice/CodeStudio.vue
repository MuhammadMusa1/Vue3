<template>
  <section class="code-studio">
    <div class="code-studio__editor">
      <header>
        <span class="dot dot--red" />
        <span class="dot dot--yellow" />
        <span class="dot dot--green" />
        <strong>Interactive Code Editor</strong>
        <q-space />
        <q-btn dense flat icon="auto_fix_high" label="AI explain" @click="explain" />
      </header>
      <div ref="editorHost" class="monaco-host" />
      <textarea v-if="!monacoReady" v-model="code" spellcheck="false" />
    </div>
    <LiveTerminal :output="terminalOutput" />
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import LiveTerminal from '@/components/practice/LiveTerminal.vue';
import { debugCode, explainCode } from '@/services/aiMentor';

const code = ref("const learner = 'Amina';\nconst xp = 120;\nconsole.log(`${learner} earns ${xp} XP`);");
const editorHost = ref(null);
const monacoReady = ref(false);
let editor;

const terminalOutput = ref('> Ready. Нажми AI explain, чтобы увидеть разбор.');

const explain = () => {
  if (editor) code.value = editor.getValue();
  terminalOutput.value = `${explainCode(code.value)}\n\nDebug check:\n${debugCode(code.value).join('\n')}`;
};

onMounted(async () => {
  try {
    const monaco = await import('monaco-editor');
    editor = monaco.editor.create(editorHost.value, {
      value: code.value,
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true,
      minimap: { enabled: false },
      fontSize: 15,
      lineHeight: 24,
      padding: { top: 18 },
      roundedSelection: true,
      scrollBeyondLastLine: false
    });
    editor.onDidChangeModelContent(() => {
      code.value = editor.getValue();
    });
    monacoReady.value = true;
  } catch {
    monacoReady.value = false;
  }
});

watch(code, value => {
  if (editor && editor.getValue() !== value) {
    editor.setValue(value);
  }
});

onBeforeUnmount(() => {
  editor?.dispose();
});
</script>
