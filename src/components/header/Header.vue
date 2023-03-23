<template>
  <q-toolbar class="row justify-between">
    <div class="col-sm-8 col-xs-10 row">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('toggleLeftDrawer')"
        class="q-mx-xs"
      />
      <q-input
        rounded
        outlined
        dense
        color="red-12"
        v-model="text"
        @keyup.enter="buscar(text)"
        style="width: inherit"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <div class="col-sm-4 col-xs-1 text-right">
      <q-icon name="person" class="q-mx-xs person-icon" />
      <span class="gt-xs inline">Francisco M.</span>
      <!-- <q-tooltip class="lt-xs hidden"> Francisco M. </q-tooltip> -->
    </div>
  </q-toolbar>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";
import { usePlayListStore } from "../../stores/playList";

export default defineComponent({
  name: "CustomHeader",

  setup() {
    const $q = useQuasar();
    const listStore = usePlayListStore();

    function buscarMusic(text) {
      api
        .get(`search`, {
          params: {
            q: text,
          },
        })
        .then((response) => {
          const { data } = response.data;
          const limpio = data.map((element, index) => {
            return {
              id: element.id,
              index: index,
              music: element.preview,
              img: element.album.cover,
              title: element.album.title,
              artist: element.artist.name,
            };
          });
          listStore.newList(limpio);
        })
        .catch(() => {
          $q.notify({
            color: "negative",
            position: "top",
            message: "Loading failed",
            icon: "report_problem",
          });
        });
    }

    return {
      buscar(text) {
        buscarMusic(text);
      },
    };
  },
});
</script>

<style scoped>
.person-icon {
  font-size: 14px;
  color: #e86060;
}
</style>
