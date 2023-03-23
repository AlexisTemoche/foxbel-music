import { defineStore } from "pinia";

export const usePlayListStore = defineStore("playList", {
  state: () => ({
    playList: [],
  }),
  getters: {
    firstMusic: (state) => {
      if (state.playList.length) return state.playList[0];
      else return {};
    },
  },
  actions: {
    newList(array) {
      this.playList = array;
    },
    clearList() {
      this.playList = [];
    },
  },
});
