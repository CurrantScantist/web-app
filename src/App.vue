<template>
  <Sidebar />
  <router-view />
</template>

<style lang="scss" scoped></style>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  setup() {},
};
</script>
