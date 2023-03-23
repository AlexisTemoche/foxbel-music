import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

//app_id=${APP_ID}&secret=${APP_SECRET}&code=${THE_CODE_FROM_ABOVE}

const api = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "1e22ebfcaemsh039d12e78c278e8p1b1d13jsn38398af77dac",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
