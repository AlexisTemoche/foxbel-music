<template>
  <div class="col-3 gt-xs inline">
    <div
      class="row justify-center"
      style="position: relative; min-height: 100%"
    >
      <q-img
        :src="music.img"
        @click="play(music)"
        spinner-color="white"
        style="max-width: 250px"
      ></q-img>
      <q-icon name="play_arrow" @click="play(music)" class="style-icon" />
    </div>
  </div>
  <div id="container-artist" class="col-sm-9 col-12 q-pa-md">
    <p class="style-title">{{ music.artist }}</p>
    <p class="style-subtitle">Lo mejor de {{ music.artist }}</p>
    <p class="style-resume">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>

    <q-btn
      unelevated
      rounded
      class="q-mx-sm btn-reproducir"
      color="red-12"
      label="Reproducir"
      @click="play(music)"
      no-caps
    ></q-btn>
    <q-btn
      outline
      rounded
      class="q-mx-sm btn-seguir"
      color="red-12"
      label="Seguir"
      no-caps
    ></q-btn>
    <q-icon name="more_horiz" class="q-mx-sm btn-puntos" />
  </div>
</template>

<script>
import { defineComponent, computed, onMounted } from "vue";
import { usePlayListStore } from "../../stores/playList";
import { useMusicPlaytStore } from "../../stores/musicPlaying";

export default defineComponent({
  name: "BannerP",
  setup() {
    const store = usePlayListStore();
    const music = computed(() => store.firstMusic);
    const musicStore = useMusicPlaytStore();
    function play(music) {
      musicStore.setMusic({
        id: music.id,
        index: music.index,
        music: music.music,
        img: music.img,
        title: music.title,
        artist: music.artist,
      });
    }
    onMounted(() => {
      var elemento = document.getElementById("container-artist");
      elemento.style.backgroundImage = `linear-gradient(0deg, rgba(232, 96, 96, 0.7), rgba(232, 96, 96, 0.7)), url(${music.value.img})`;
    });
    return {
      music,
      play,
    };
  },
});
</script>

<style scoped>
.style-icon {
  position: absolute;
  top: 35%;
  font-size: 90px;
  color: white;
}
.style-title {
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
}
.style-subtitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
}
.style-resume {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
}
.btn-reproducir {
  min-width: 100px;
}
.btn-seguir {
  min-width: 100px;
}
.btn-puntos {
  color: white;
}
</style>
