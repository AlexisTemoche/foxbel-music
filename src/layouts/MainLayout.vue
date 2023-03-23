<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-ligth q-pt-sm" style="background-color: white">
      <CustomHeader @toggle-left-drawer="toggleLeftDrawer" />
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <CustomSidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="text-white control-bar row">
      <CustomFooter />
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import CustomHeader from "../components/header/Header.vue";
import CustomSidebar from "../components/sidebar/Sidebar.vue";
import CustomFooter from "../components/footer/Footer.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    CustomHeader,
    CustomSidebar,
    CustomFooter,
  },

  emits: ["toggleLeftDrawer"],

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer: () => (leftDrawerOpen.value = !leftDrawerOpen.value),
    };
  },
});
</script>

<style>
.q-drawer {
  background-color: #662323;
}
.bg-ligth {
  background-color: inherit;
  color: black;
}
.q-layout__shadow:after {
  box-shadow: none;
}
.control-bar {
  height: 80px;
  background-color: #eb5757;
}
</style>
