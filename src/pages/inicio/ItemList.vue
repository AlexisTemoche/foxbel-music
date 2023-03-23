<template>
  <div class="col-md-3 col-sm-4 col-xs-5 col-6 q-pa-sm">
    <div class="row justify-center" style="position: relative">
      <q-img
        :src="img"
        spinner-color="red-12"
        style="min-width: 100px; max-width: 150px"
      ></q-img>
      <q-icon name="play_arrow" @click="play()" class="style-icon" />
    </div>
    <div class="row justify-center style-title">
      <span>{{ title }}</span>
    </div>
    <div class="row justify-center style-artist">
      <span>{{ artist }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useMusicPlaytStore } from "../../stores/musicPlaying";

export default defineComponent({
  name: "ItemList",
  props: {
    id: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    music: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    artist: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const musicStore = useMusicPlaytStore();
    function play() {
      musicStore.setMusic({
        id: props.id,
        index: props.index,
        music: props.music,
        img: props.img,
        title: props.title,
        artist: props.artist,
      });
    }
    return {
      play,
    };
  },
});
</script>

<style scoped>
.style-title {
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #555555;
}
.style-artist {
  font-size: 12px;
  line-height: 15px;
  color: #828282;
}
.style-icon {
  position: absolute;
  top: 38%;
  font-size: 50px;
  color: white;
}
</style>
