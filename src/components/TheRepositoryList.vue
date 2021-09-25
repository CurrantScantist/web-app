<template>
  <div class="list-wrapper">
    <el-input
      class="search"
      placeholder="Search for a repository!"
      v-model="search"
      clearable
    />
    <div class="table-wrapper">
      <!-- Shown when no data has been loaded in -->
      <div v-if="pagedData.length == 0">
        <el-empty description="No Data" :image-size="300"></el-empty>
      </div>
      <!-- Otherwise, show this -->
      <div v-else>
        <el-table :data="pagedData" @row-click="handleRowClick">
          <!-- <el-table-column type="selection"> </el-table-column> -->
          <el-table-column prop="name" label="Repository" sortable>
          </el-table-column>
          <el-table-column
            prop="owner"
            label="Owner"
            sortable
            show-overflow-tooltip
          >
          </el-table-column>
          <!-- Deprecated -->
          <!-- <el-table-column
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
          </el-table-column> -->
          <el-table-column prop="forks" label="Forks" sortable>
          </el-table-column>
          <el-table-column prop="stargazers_count" label="Stargazers" sortable>
          </el-table-column>
          <el-table-column prop="topics" label="Tags" show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      @current-change="handlePageChange"
      :page-size="pageSize"
      :total="totalItems"
    >
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;

  .table-wrapper {
    padding: 1rem 0;
  }

  .pagination {
    margin: 0 auto;
  }
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
      totalItems: 0,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL + "/techstack/list"
      );
      this.data = this.parseData(response.data.data[0]);
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    filteredData() {
      if (!this.search) {
        this.setTotalItems(this.data.length);
        return this.data;
      }
      this.setPage(1);

      // Filter's data
      return this.data.filter(
        (items) =>
          items.name.toLowerCase().includes(this.search.toLowerCase()) || // Search on row name
          items.owner.toLowerCase().includes(this.search.toLowerCase()) || // Search on row owner
          items.topics.some((element) => {
            // Search on row tags
            return element.toLowerCase().includes(this.search.toLowerCase());
          })
      );
    },
    pagedData() {
      this.setTotalItems(this.filteredData.length);

      return this.filteredData.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
      //   }
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
      // Object.keys(data).forEach((repoItem) => {
      //   var repoTopics = data[repoItem].topics;

      //   Object.keys(repoTopics).forEach((topic) => {
      //     var index = this.tagFilters.findIndex(
      //       (x) => x.text == repoTopics[topic]
      //     );

      //     if (index == -1) {
      //       this.tagFilters.push({
      //         text: repoTopics[topic],
      //         value: repoTopics[topic],
      //       });
      //     }
      //   });
      // });

      // this.tagFiltersProcessed = true;
      // console.log(this.tagFilters);

      return data.map((item) => ({
        ...item,
        selected: false,
      }));
    },
    /**
     * Called on dropdown selection.
     *
     * @param {object} indices - The index of the row being changed and index of the selected release
     * @deprecated - Release information not displayed within this component
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
    setTotalItems(newTotal) {
      this.totalItems = newTotal;
    },
    setPage(newPage) {
      this.page = newPage;
    },
    handleRowClick(row) {
      this.$router.push({
        name: "repository_view",
        params: { name: row.name, owner: row.owner },
      });
    },
  },
});
</script>
