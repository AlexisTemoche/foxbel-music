import { defineStore } from "pinia";

export const useLoggedStatus = defineStore("logged", {
  state: () => ({
    status: false,
    token: "",
  }),
  actions: {
    login(token) {
      this.status = true;
      this.token = token;
    },
    logout() {
      this.status = false;
      this.token = "";
    },
  },
});
