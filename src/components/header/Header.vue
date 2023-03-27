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
        placeholder="Buscar"
        @keyup.enter="search(text)"
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
    </div>
  </q-toolbar>
  <q-dialog v-model="isLoading" persistent>
    <q-spinner-ball size="50px" color="red" />
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";
import { usePlayListStore } from "../../stores/playList";

export default defineComponent({
  name: "CustomHeader",

  setup() {
    const isLoading = ref(false);
    const listStore = usePlayListStore();

    const search = async (text) => {
      try {
        if (!text) return;
        isLoading.value = true;
        const { data } = await api.get(`search`, {
          params: {
            q: text,
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

    return {
      isLoading,
      search,
    };
  },
});
</script>

<style scoped>
.person-icon {
  font-size: 20px;
  color: #e86060;
}
</style>
