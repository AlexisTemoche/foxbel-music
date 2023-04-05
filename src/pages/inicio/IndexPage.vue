<template>
  <q-page class="flex flex-center row">
    <template v-if="data.length">
      <div class="col-10 row q-my-md">
        <BannerP />
      </div>
      <div class="col-10 row">
        <span class="header-list q-my-md">Resultados</span>
      </div>
      <div class="col-10 row">
        <ItemList v-for="item in data" :key="item.id" v-bind="item"></ItemList>
      </div>
    </template>
  </q-page>
</template>

<script>
import { defineComponent, computed } from "vue";
import { usePlayListStore } from "../../stores/playList";
import ItemList from "./ItemList.vue";
import BannerP from "./Banner.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    ItemList,
    BannerP,
  },
  setup() {
    const store = usePlayListStore();

    return {
      data: computed(() => store.playList),
    };
  },
});
</script>
<style scoped>
.header-list {
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #e86060;
}
.empty-body {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #e86060;
}
</style>
