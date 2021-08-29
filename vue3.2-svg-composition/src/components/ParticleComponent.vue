<template>
  <g>
    <rect :x="x" :y="y" width="2" height="2" />
  </g>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
