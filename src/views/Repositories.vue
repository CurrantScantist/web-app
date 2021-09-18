<template>
  <div class="repositories-wrapper">
    <div class="repositories">
      <TheRepositoryList class="repo-list" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.repositories-wrapper {
  background: linear-gradient(90deg, #5ed098 13%, #15ccff 88%);
  color: white;
  min-height: 100vh;
}

.repositories {
  width: 100%;
  max-width: 1280px;
  padding: 5rem 0;
  margin: 0 auto;
}

.repo-list {
  margin-top: 2rem;
}
</style>

<script>
import TheRepositoryList from "@/components/TheRepositoryList";

export default {
  name: "Repositories",
  components: {
    TheRepositoryList,
  },
};
</script>
