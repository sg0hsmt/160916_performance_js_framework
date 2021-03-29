import { h } from "vue";

const ParticleComponent = ({ x, y }) => {
  return h("g", null, [
    h("rect", {
      x: x,
      y: y,
      width: 2,
      height: 2,
    }),
  ]);
};

export default ParticleComponent;
