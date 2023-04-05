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
        ref="input_search"
        v-model="model_search"
        placeholder="Buscar"
        @keyup.enter="action_search()"
        style="width: inherit"
      >
        <template v-slot:append>
          <q-btn
            flat
            round
            icon="search"
            @click="action_search()"
            class="search-icon"
          ></q-btn>
        </template>
      </q-input>
    </div>

    <div class="col-sm-4 col-xs-1 text-right">
      <q-icon name="person" class="q-mx-xs person-icon" />
      <span class="gt-xs inline">Francisco M.</span>
    </div>
  </q-toolbar>
  <q-dialog v-model="isLoading" persistent>
    <q-spinner-ball size="50px" color="red" />
  </q-dialog>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { api } from "boot/axios";
import { usePlayListStore } from "../../stores/playList";
import { useMusicPlaytStore } from "../../stores/musicPlaying";

export default defineComponent({
  name: "CustomHeader",

  setup() {
    const router = useRouter();
    const isLoading = ref(false);
    const listStore = usePlayListStore();
    const musicStore = useMusicPlaytStore();
    const input_search = ref(null);
    const model_search = ref("");
    const tmp_search = ref("");

    const action_search = async () => {
      try {
        if (!model_search.value) return;
        if (model_search.value == tmp_search.value) return;
        isLoading.value = true;
        tmp_search.value = model_search.value;
        const { data } = await api.get(`search`, {
          params: {
            q: model_search.value,
          },
        });
        const array = data.data || [];
        if (array.length) {
          const list = array.map((element, index) => {
            return {
              id: element.id,
              index: index,
              music: element.preview,
              img: element.album.cover,
              img_banner: element.artist.picture_big,
              title: element.album.title,
              artist: element.artist.name,
            };
          });
          listStore.newList(list);
        }
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      router.push({ name: "recientes" });
      model_search.value = "rolling in the deep";
      action_search();
      input_search.value.focus();
    });

    return {
      isLoading,
      musicStore,
      input_search,
      model_search,
      action_search,
    };
  },
});
</script>

<style scoped>
.person-icon {
  font-size: 20px;
  color: #e86060;
}
.search-icon {
  min-width: 1rem;
}
</style>
