<template>
  <div class="main-wrapper">
    <TheTopbar class="topbar" />
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
import TheTopbar from "./components/TheTopbar.vue";
export default {
  components: {
    // Sidebar,
    TheTopbar,
  },
  setup() {},
};
</script>
