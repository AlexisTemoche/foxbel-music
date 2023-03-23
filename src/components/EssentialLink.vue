<template>
  <q-item
    clickable
    tag="a"
    @click="navigateTo"
    :class="{ 'menu-item-active': isActive() }"
  >
    <q-item-section>
      <q-item-label
        class="menu-item-span"
        :class="{ 'menu-item-span-active': isActive() }"
        >{{ title }}</q-item-label
      >
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "/",
    },
  },
  setup(props) {
    const router = useRouter();
    return {
      navigateTo: () => router.push({ name: props.link }),
      isActive: () => router.currentRoute.value.name == props.link,
    };
  },
});
</script>

<style>
.q-item {
  min-height: auto;
}
.menu-item-active {
  border-width: thick;
  border-left-style: solid;
  border-color: #e86060;
}
.menu-item-span {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.menu-item-span-active {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #e86060;
}
</style>
