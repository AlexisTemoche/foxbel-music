<template>
  <div class="col-4">
    <div class="row">
      <q-img :src="img" spinner-color="white" style="width: 80px"></q-img>
      <div class="col-6 self-center gt-xs inline">
        <span class="row q-ml-sm"> {{ title }} </span>
        <span class="row q-ml-sm"> {{ artist }} </span>
      </div>
    </div>
  </div>
  <div class="col-4 text-center self-center">
    <q-icon
      name="skip_previous"
      :class="{ disabled: disabledPrev }"
      @click="prevPlay"
      class="q-mx-xs control-bar-icon"
    />
    <q-icon
      :name="playing ? 'pause' : 'play_circle'"
      class="q-mx-xs control-bar-icon"
      @click="togglePlay"
      :class="{ disabled: disabledPlay }"
    />
    <q-icon
      name="skip_next"
      class="q-mx-xs control-bar-icon"
      :class="{ disabled: disabledNext }"
      @click="nextPlay"
    />
  </div>
  <div class="col-4 row justify-end self-center">
    <audio id="player" :src="music" autoplay></audio>
    <div class="col-sm-6 col-6 self-center">
      <q-slider
        v-model="volumen"
        @update:model-value="swapVolumen"
        :min="0"
        :max="100"
        label
        color="white"
        label-text-color="dark"
      ></q-slider>
    </div>
    <div class="col-md-3 col-4 text-center self-center">
      <q-icon
        :name="muted ? 'volume_off' : 'volume_up'"
        class="q-mx-xs control-bar-icon-volume"
        @click="mutedVolumen"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useMusicPlaytStore } from "../../stores/musicPlaying";

export default defineComponent({
  name: "CustomFooter",
  setup() {
    const muted = ref(false);
    const volumen = ref(50);
    const musicStore = useMusicPlaytStore();
    const computedImg = computed(() => {
      return musicStore.img || "icons/foxbel-music-white-icon.png";
    });
    const computedMusic = computed(() => {
      if (musicStore.music) {
        return musicStore.music;
      } else {
        return "";
      }
    });
    const swapVolumen = () => {
      document.getElementById("player").volume = volumen.value / 100;
      if (volumen.value / 100 > 0) muted.value = false;
      else muted.value = true;
    };
    const mutedVolumen = () => {
      muted.value = !muted.value;
      if (muted.value) {
        volumen.value = 0;
        document.getElementById("player").volume = 0;
      } else {
        volumen.value = 50;
        document.getElementById("player").volume = 0.5;
      }
    };
    return {
      muted,
      mutedVolumen,
      volumen,
      swapVolumen,
      playing: computed(() => musicStore.playing),
      img: computedImg,
      music: computedMusic,
      title: computed(() => musicStore.title),
      artist: computed(() => musicStore.artist),
      prevPlay: () => musicStore.prevPlay(),
      togglePlay: () => musicStore.togglePlay(),
      nextPlay: () => musicStore.nextPlay(),
      disabledPrev: computed(() => musicStore.disabledPrev),
      disabledPlay: computed(() => musicStore.disabledPlay),
      disabledNext: computed(() => musicStore.disabledNext),
    };
  },
});
</script>

<style scoped>
.control-bar-icon {
  font-size: 45px;
}
.control-bar-icon-volume {
  font-size: 30px;
}
@media only screen and (max-width: 600px) {
  .control-bar-icon {
    font-size: 25px;
  }
  .control-bar-icon-volume {
    font-size: 20px;
  }
}
.disabled {
  color: aliceblue;
}
</style>
