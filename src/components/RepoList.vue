<template>
  <div>
    <el-input
      placeholder="Search for a repository!"
      v-model="search"
      clearable
    />
    <el-table ref="multipleTable" :data="filteredData">
      <el-table-column type="selection"> </el-table-column>
      <el-table-column label="Repository">
        <template #default="scope">{{ scope.row.repo_name }}</template>
      </el-table-column>
      <el-table-column property="tags" label="Tags" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.table {
  width: 100%;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tableData: [
        {
          repo_name: "cbtracker",
          tags: ["AI", "Java"],
        },
        {
          repo_name: "freeCodeCamp",
          tags: ["Web Scraping", "Python"],
        },
        {
          repo_name: "widevine-l3-guesser",
          tags: ["Python Framework", "Python", "Frontend"],
        },
        {
          repo_name: "uno",
          tags: ["AI", "Java"],
        },
        {
          repo_name: "macos-virtualbox",
          tags: ["AI", "Java"],
        },
        {
          repo_name: "Telegram",
          tags: ["AI", "Java"],
        },
        {
          repo_name: "neovim",
          tags: ["AI", "Java"],
        },
      ],
      multipleSelection: [],
      search: "",
    };
  },
  computed: {
    filteredData() {
      return this.tableData.filter((items) => {
        for (var item in items) {
          if (String(items[item]).indexOf(this.search) !== -1) {
            return true;
          }
        }
        return false;
      });
    },
  },
});
</script>
