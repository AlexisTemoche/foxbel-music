<!-- gt-xs inline -->
<template>
  <div class="col-md-5 col-6 self-center">
    <div class="row">
      <q-img :src="img" spinner-color="white" style="width: 80px"></q-img>
      <div class="col self-center">
        <span class="span-footer row q-ml-sm"> {{ title }} </span>
        <span class="span-footer row q-ml-sm"> {{ artist }} </span>
        <span class="span-footer row q-ml-sm">
          {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
        </span>
      </div>
    </div>
  </div>
  <div class="col-md-2 col-4 text-center self-center">
    <q-btn
      flat
      round
      color="white"
      icon="skip_previous"
      :disabled="disabledPrev"
      @click="prevPlay"
      class="control-bar-icon"
    ></q-btn>
    <q-btn
      flat
      round
      color="white"
      :icon="playing ? 'pause' : 'play_circle'"
      :disabled="disabledPlay"
      @click="togglePlay"
      class="control-bar-icon"
    ></q-btn>
    <q-btn
      flat
      round
      color="white"
      icon="skip_next"
      :disabled="disabledNext"
      @click="nextPlay"
      class="control-bar-icon"
    ></q-btn>
  </div>
  <div
    class="col-md-5 col-2 row text-center self-center"
    :class="{
      'justify-center block': screenResponsive,
      'justify-end': !screenResponsive,
    }"
  >
    <div class="self-center" :class="{ 'col-md-4 ': !screenResponsive }">
      <q-slider
        v-model="volumen"
        @update:model-value="changeVolume"
        :min="0"
        :max="10"
        label
        color="white"
        label-text-color="dark"
        track-size="1px"
        class="self-center"
        :class="{ 'volume-bar': screenResponsive }"
        :vertical="screenResponsive"
        :reverse="screenResponsive"
      ></q-slider>
    </div>
    <div
      class="self-center text-center"
      :class="{ 'col-md-2': !screenResponsive }"
    >
      <q-btn
        flat
        round
        color="white"
        :icon="muted ? 'volume_off' : 'volume_up'"
        @click="changeMuted"
        class="control-bar-icon"
      ></q-btn>
    </div>
  </div>

  <audio id="player" ref="audioRef" :src="music" autoplay></audio>
</template>

<script>
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { useQuasar } from "quasar";
import { useMusicPlaytStore } from "../../stores/musicPlaying";

export default defineComponent({
  name: "CustomFooter",

  setup() {
    const audioRef = ref(null);
    const imgPath = "icons/foxbel-music-white-icon.png";
    const musicStore = useMusicPlaytStore();
    const currentTime = ref(0);
    const duration = ref(0);
    const volumen = ref(5);
    const muted = ref(false);
    const $q = useQuasar();

    onMounted(() => {
      audioRef.value.addEventListener("pause", handlePause);
      audioRef.value.addEventListener("timeupdate", handleTime);
      audioRef.value.addEventListener("loadedmetadata", handleDuration);
      audioRef.value.addEventListener("ended", handleEnded);
    });

    const handlePause = () => {
      musicStore.setPlay(false);
    };

    const handleTime = () => {
      currentTime.value = audioRef.value.currentTime;
    };

    const handleDuration = () => {
      duration.value = audioRef.value.duration;
    };

    const handleEnded = () => {
      if (musicStore.index < 24) {
        setTimeout(() => {
          musicStore.nextPlay();
        }, 1500);
      }
    };

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    onBeforeUnmount(() => {
      audioRef.value.removeEventListener("pause", handlePause);
      audioRef.value.removeEventListener("timeupdate", handleTime);
      audioRef.value.removeEventListener("loadedmetadata", handleDuration);
      audioRef.value.removeEventListener("ended", handleEnded);
    });

    const changeVolume = () => {
      audioRef.value.volume = volumen.value / 10;
      if (volumen.value / 10 > 0) muted.value = false;
      else muted.value = true;
    };

    const changeMuted = () => {
      muted.value = !muted.value;
      if (muted.value) {
        volumen.value = 0;
        audioRef.value.volume = 0;
      } else {
        volumen.value = 5;
        audioRef.value.volume = 0.5;
      }
    };

    return {
      audioRef,
      img: computed(() => musicStore.img || imgPath),
      music: computed(() => musicStore.music),

      title: computed(() => musicStore.title),
      artist: computed(() => musicStore.artist),

      formatTime,
      currentTime,
      duration,

      prevPlay: () => musicStore.prevPlay(),
      togglePlay: () => musicStore.togglePlay(),
      nextPlay: () => musicStore.nextPlay(),
      playing: computed(() => musicStore.playing),
      disabledPrev: computed(() => musicStore.disabledPrev),
      disabledPlay: computed(() => musicStore.disabledPlay),
      disabledNext: computed(() => musicStore.disabledNext),

      volumen,
      changeVolume,

      muted,
      changeMuted,

      screenResponsive: computed(() => $q.screen.lt.md),
    };
  },
});
</script>

<style scoped>
.span-footer {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
.control-bar-icon {
  font-size: 18px;
}
@media only screen and (max-width: 599px) {
  .control-bar-icon {
    font-size: 12px;
  }
}
@media only screen and (min-width: 600px) and (max-width: 1023px) {
  .control-bar-icon {
    font-size: 15px;
  }
}
@media only screen and (min-width: 1024px) {
  .control-bar-icon {
    font-size: 18px;
  }
}
.volume-bar {
  height: 40px;
}
</style>
