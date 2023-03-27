<template>
  <q-page class="flex flex-center row">
    <div class="col-10 row q-my-md">
      <BannerP v-if="data.length" />
    </div>
    <div class="col-10 row">
      <span class="header-list q-my-md" v-if="data.length">Resultados</span>
    </div>
    <div class="col-10 row">
      <ItemList v-for="item in data" :key="item.id" v-bind="item"></ItemList>
    </div>
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
</style>
