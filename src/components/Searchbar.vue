<template>
  <div>
    <el-input
      placeholder="Search for a repository!"
      v-model="input"
      clearable
    />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      input: ref(""),
    };
  },
  methods: {
    passSearchInput() {
      this.$emit("searchInput", this.input);
    },
  },
});
</script>
