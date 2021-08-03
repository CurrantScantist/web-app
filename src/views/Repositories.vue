<template>
  <div class="repositories">
    <RepoList class="repo-list" />
  </div>
</template>

<style lang="scss" scoped>
.repositories {
  display: flex;
  flex-direction: column;
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
import RepoList from "@/components/RepoList";

export default {
  name: "Repositories",
  components: {
    RepoList,
  },
};
</script>
