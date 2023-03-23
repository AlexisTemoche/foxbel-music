import { defineStore } from "pinia";
import { usePlayListStore } from "./playList";
const store = usePlayListStore();

export const useMusicPlaytStore = defineStore("musicPlaying", {
  state: () => ({
    id: "",
    index: "",
    music: "",
    img: "",
    title: "",
    artist: "",
    playing: false,
  }),
  getters: {
    disabledPrev: (state) => {
      if (state.id) {
        return state.index == 0;
      } else return true;
    },
    disabledPlay: (state) => {
      if (state.id) {
        return state.music.length ? false : true;
      } else return true;
    },
    disabledNext: (state) => {
      if (state.id) {
        return state.index == 24;
      } else return true;
    },
  },
  actions: {
    prevPlay() {
      if (!this.id) return;
      if (this.index > 0) this.setMusic(store.playList[this.index - 1]);
    },
    togglePlay() {
      if (!this.id) return;
      if (this.playing) document.getElementById("player").pause();
      else document.getElementById("player").play();
      this.playing = !this.playing;
    },
    nextPlay() {
      if (!this.id) return;
      if (this.index < 24) this.setMusic(store.playList[this.index + 1]);
    },
    setMusic({ id, index, music, img, title, artist }) {
      this.id = id;
      this.index = index;
      this.music = music;
      this.img = img;
      this.title = title;
      this.artist = artist;
      this.playing = true;
    },
    reset() {
      this.id = "";
      this.index = "";
      this.music = "";
      this.img = "";
      this.title = "";
      this.artist = "";
      this.playing = false;
    },
  },
});
