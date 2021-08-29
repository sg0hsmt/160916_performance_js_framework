<script setup>
// eslint-disable-next-line no-unused-vars, no-undef
const props = defineProps({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <g>
    <rect :x="x" :y="y" width="2" height="2" />
  </g>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
