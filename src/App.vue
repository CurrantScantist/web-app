<template>
  <div class="main-wrapper">
    <Topbar class="topbar" />
    <router-view class="route" />
  </div>
</template>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
}

.topbar {
  position: fixed;
}

.route {
  margin-top: 5rem;
}
</style>

<script>
// import Sidebar from "@/components/Sidebar.vue";
import Topbar from "./components/Topbar.vue";
export default {
  components: {
    // Sidebar,
    Topbar,
  },
  setup() {},
};
</script>
