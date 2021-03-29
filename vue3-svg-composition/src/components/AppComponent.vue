<template>
  <div>
    <svg :width="innerWidth" :height="innerHeight">
      <ParticleComponent
        v-for="particle in particles"
        :key="particle.key"
        :x="particle.displayX"
        :y="particle.displayY"
      />
    </svg>
    <div class="ui">
      <p>Emit Particle Per 1 Frame</p>
      <input v-model.number="emitOnFrame" type="range" min="1" max="50" />
      <input v-model.number="emitOnFrame" type="number" min="1" max="50" />
      <p>現在のパーティクル数 : {{ particles.length }} 個</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, shallowRef } from "vue";

import { ParticleData } from "../ParticleData";
import ParticleComponent from "./ParticleComponent.vue";

let count = 0;

export default defineComponent({
  components: {
    ParticleComponent,
  },
  setup() {
    const particles = shallowRef([]);
    const emitOnFrame = ref(3);
    const innerWidth = ref(0);
    const innerHeight = ref(0);

    const tick = () => {
      const buf = particles.value.concat();

      // 発生
      const width = innerWidth.value;
      const height = innerHeight.value;
      const len = emitOnFrame.value;
      for (let i = 0; i < len; i++) {
        buf.push(new ParticleData(width / 2, height / 4, count++));
      }

      // 更新
      buf.forEach((particle, index) => {
        particle.update();

        // 寿命の判定
        if (particle.life <= 0) {
          // 配列からも削除
          buf.splice(index, 1);
        }
      });

      if (innerWidth.value !== window.innerWidth) {
        innerWidth.value = window.innerWidth;
      }
      if (innerHeight.value !== window.innerHeight) {
        innerHeight.value = window.innerHeight;
      }

      particles.value = buf;

      requestAnimationFrame(tick);
    };

    onMounted(() => {
      requestAnimationFrame(tick);
    });

    return {
      particles,
      emitOnFrame,
      innerWidth,
      innerHeight,
    };
  },
});
</script>

<style>
.ui {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
