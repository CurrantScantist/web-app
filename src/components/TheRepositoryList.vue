<template>
  <div>
    <el-input
      placeholder="Search for a repository!"
      v-model="search"
      clearable
    />
    <div class="table-wrapper">
      <!-- Shown when no data has been loaded in -->
      <div v-if="data.length == 0" />
      <!-- Otherwise, show this -->
      <div v-else>
        <el-table :data="pagedData">
          <el-table-column type="selection"> </el-table-column>
          <el-table-column label="Repository">
            <template #default="scope">{{ scope.row.repo_name }}</template>
          </el-table-column>
          <el-table-column
            property="releases"
            label="Releases"
            v-slot="scope"
            show-overflow-tooltip
          >
            <el-dropdown @command="setRelease" trigger="click">
              <span class="el-dropdown-link">
                {{ scope.row.releases[scope.row.selectedRelease]
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="(item, releaseIndex) in scope.row.releases"
                    :key="releaseIndex"
                    :command="[scope.row.index, releaseIndex]"
                    >{{ item }}</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-table-column>
          <el-table-column property="tags" label="Tags" show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handlePageChange"
      :page-size="pageSize"
      :total="filteredData.length"
    >
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>
.table {
  width: 100%;
}
</style>

<script>
import { defineComponent } from "vue";
import axios from "axios";

/**
 * Table and search bar with pagination for displaying/searching repositories.
 */
export default defineComponent({
  data() {
    return {
      data: [],
      errors: [],
      multipleSelection: [],
      search: "",
      page: 1,
      pageSize: 20,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/ccc2b137-5853-4cf0-9c0e-a7c71a248d06"
      );
      this.data = this.parseData(response.data);
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    filteredData() {
      if (this.data === []) {
        return this.data;
      }

      return this.data.filter(
        (items) =>
          !this.search ||
          items.repo_name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    pagedData() {
      return this.filteredData.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
    totalItems() {
      return this.filteredData.length;
    },
  },
  watch: {
    filteredData() {
      this.page = 1;
    },
  },
  methods: {
    /**
     * Called on API request to parse the data.
     *
     * @param {object} data - The data object to be parsed
     */
    parseData(data) {
      console.log(typeof data);
      return data.map((item, index) => ({
        ...item,
        index: index,
        selectedRelease: 0,
      }));
    },
    /**
     * Called on dropdown selection.
     *
     * @param {object} indices - The index of the row being changed and index of the selected release
     */
    setRelease(indices) {
      console.log(typeof indices);
      this.data[indices[0]].selectedRelease = indices[1];
    },
    /**
     * Called on pagination button click.
     *
     * @param {number} newPage - The new page number
     */
    handlePageChange(newPage) {
      this.page = newPage;
    },
  },
});
</script>
