<template>
  <g>
    <rect :x="particle.displayX" :y="particle.displayY" width="2" height="2" />
  </g>
</template>

<script>
export default {
  name: "ParticleComponent",
  props: {
    particle: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
