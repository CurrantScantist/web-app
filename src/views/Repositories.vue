<template>
  <div class="repositories-wrapper">
    <the-repository-list class="repo-list" />
  </div>
</template>

<style lang="scss" scoped>
.repositories-wrapper {
  background: #d4e7e2;
  color: #464c58;
  min-height: 100vh;
  font-size: 45px;
  font-weight: 500;
  line-height: 0px;
}

.repo-list {
  width: 100%;
  max-width: 1280px;
  padding: 5rem 0;
  margin: 0 auto;
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
