<template>
  <div class="neural-viz" aria-label="Animated neural network visualization">
    <svg viewBox="0 0 460 320" role="img">
      <g v-for="(line, index) in lines" :key="index" class="neural-viz__line">
        <line :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2" />
      </g>
      <g v-for="node in nodes" :key="node.id" class="neural-viz__node">
        <circle :cx="node.x" :cy="node.y" :r="node.r" />
        <text :x="node.x" :y="node.y + 5">{{ node.label }}</text>
      </g>
    </svg>
  </div>
</template>

<script setup>
const nodes = [
  { id: 'html', x: 75, y: 80, r: 30, label: 'HTML' },
  { id: 'css', x: 75, y: 170, r: 30, label: 'CSS' },
  { id: 'js', x: 75, y: 260, r: 30, label: 'JS' },
  { id: 'logic', x: 230, y: 115, r: 36, label: 'AI' },
  { id: 'vue', x: 230, y: 220, r: 36, label: 'Vue' },
  { id: 'ship', x: 385, y: 160, r: 42, label: 'App' }
];

const lines = [
  { x1: 105, y1: 80, x2: 194, y2: 115 },
  { x1: 105, y1: 170, x2: 194, y2: 115 },
  { x1: 105, y1: 170, x2: 194, y2: 220 },
  { x1: 105, y1: 260, x2: 194, y2: 220 },
  { x1: 266, y1: 115, x2: 343, y2: 160 },
  { x1: 266, y1: 220, x2: 343, y2: 160 }
];
</script>
