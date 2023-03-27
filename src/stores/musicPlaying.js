import { defineStore } from "pinia";
import { usePlayListStore } from "./playList";
const store = usePlayListStore();

export const useMusicPlaytStore = defineStore("musicPlaying", {
  state: () => ({
    id: "",
    index: "",
    music: "",
    img: "",
    img_banner: "",
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
    getMusic: (state) => {
      return {
        id: state.id,
        index: state.index,
        music: state.music,
        img: state.img,
        img_banner: state.img_banner,
        title: state.title,
        artist: state.artist,
        playing: state.playing,
      };
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
    setPlay(value) {
      this.playing = value;
    },
    setMusic({ id, index, music, img, img_banner, title, artist }) {
      this.id = id;
      this.index = index;
      this.music = music;
      this.img = img;
      this.img_banner = img_banner;
      this.title = title;
      this.artist = artist;
      this.playing = true;
    },
    reset() {
      this.id = "";
      this.index = "";
      this.music = "";
      this.img = "";
      this.img_banner = "";
      this.title = "";
      this.artist = "";
      this.playing = false;
    },
  },
});
