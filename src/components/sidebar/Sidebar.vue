<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-img
        :src="'icons/foxbel-music.png'"
        @click="navigateTo"
        spinner-color="white"
      ></q-img>
    </div>

    <q-list>
      <q-item-label header class="menu-subtitle"> Mi librería </q-item-label>
      <EssentialLink
        v-for="link in linksLibrary"
        :key="link.title"
        v-bind="link"
      />
      <q-item-label header class="menu-subtitle"> Playlist </q-item-label>
      <EssentialLink
        v-for="link in linksPlaylist"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import EssentialLink from "components/EssentialLink.vue";

const linksLibrary = [
  {
    title: "Recientes",
    link: "recientes",
  },
  {
    title: "Artistas",
    link: "artistas",
  },
  {
    title: "Álbums",
    link: "albums",
  },
  {
    title: "Canciones",
    link: "canciones",
  },
  {
    title: "Estaciones",
    link: "estaciones",
  },
];

const linksPlaylist = [
  {
    title: "Metal",
    link: "metal",
  },
  {
    title: "Para bailar",
    link: "para-bailar",
  },
  {
    title: "Rock 90s",
    link: "rocks-90s",
  },
  {
    title: "Baladas",
    link: "baladas",
  },
];

export default defineComponent({
  name: "CustomSidebar",

  components: {
    EssentialLink,
  },

  setup() {
    const router = useRouter();
    return {
      linksLibrary,
      linksPlaylist,
      navigateTo: () => router.push({ name: "home" }),
    };
  },
});
</script>

<style scoped>
.menu-subtitle {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
}
</style>
