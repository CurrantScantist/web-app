<template>
  <div>
    <div v-if="numOfSelected != 0">
      <button class="nav-button" @click="handleNavClick">
        <h3>{{ numOfSelected > 1 ? "Compare" : "Checkout" }}</h3>
      </button>
    </div>
    <div class="list-wrapper">
      <el-input
        class="search"
        placeholder="Search for a repository!"
        v-model="search"
        prefix-icon="el-icon-search"
        clearable
      />
      <div class="table-wrapper">
        <!-- Shown when no data has been loaded in -->
        <div v-if="pagedData.length == 0">
          <el-empty description="No Data" :image-size="300"></el-empty>
        </div>
        <!-- Otherwise, show this -->
        <div v-else>
          <el-table class="table" :data="pagedData" @row-click="handleRowClick">
            <el-table-column width="40px">
              <template #default="scope">
                <el-checkbox v-model="scope.row.selected"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column property="name">
              <template #header>
                <span class="table-header">Name</span>
              </template>
            </el-table-column>
            <el-table-column property="owner" show-overflow-tooltip>
              <template #header>
                <span class="table-header">Owner</span>
              </template>
            </el-table-column>
            <el-table-column property="forks">
              <template #header>
                <span class="table-header">Forks</span>
              </template>
              <template #default="scope">
                <span>{{ abbrNum(scope.row.forks, 1) }}</span>
              </template>
            </el-table-column>
            <el-table-column property="stargazers_count">
              <template #header>
                <span class="table-header">Stargazers</span>
              </template>
              <template #default="scope">
                <span>{{ abbrNum(scope.row.stargazers_count, 1) }}</span>
              </template>
            </el-table-column>
            <el-table-column property="topics" show-overflow-tooltip>
              <template #header>
                <span class="table-header">Tags</span>
              </template>
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
  </div>
</template>

<style lang="scss" scoped>
.nav-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  border: none;
  background-color: white;
  border-radius: 3rem;
  padding: 1rem 4rem;
}

.nav-button:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}

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

.table {
  border-radius: 10px;
}

.table-header {
  color: #5e5e5e;
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
      numOfSelected: 0,
      selectedRows: [],
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
      return this.data.filter((items) =>
        items.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    pagedData() {
      this.setTotalItems(this.filteredData.length);

      return this.filteredData.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
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
    handleNavClick() {
      // console.log(this.selectedRows[1]);

      if (this.selectedRows.length == 2) {
        this.$router.push({
          name: "visualize",
          params: {
            name1: this.selectedRows[0].name,
            owner1: this.selectedRows[0].owner,
            name2: this.selectedRows[1].name,
            owner2: this.selectedRows[1].owner,
          },
        });
      } else {
        this.$router.push({
          name: "visualize",
          params: {
            name1: this.selectedRows[0].name,
            owner1: this.selectedRows[0].owner,
          },
        });
      }
    },
    handleRowClick(row) {
      if (this.numOfSelected == 2 && row.selected == false) {
        this.printMessage(
          "More than two repositories selected, please deselect one."
        );
        return;
      }

      row.selected = !row.selected;

      if (row.selected == true) {
        this.selectedRows.push({ name: row.name, owner: row.owner });
        this.numOfSelected++;
      } else {
        for (var i = 0; i < this.selectedRows.length; i++) {
          if (
            this.selectedRows[i].name == row.name &&
            this.selectedRows[i].owner == row.owner
          ) {
            this.selectedRows.splice(i, 1);
          }
        }
        this.numOfSelected--;
      }

      return;
    },
    printMessage(message) {
      this.$message.error(message);
    },
    /**
     * Converts a number to a reader friendly format e.g. 1234 to 1.2K
     * @see https://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k
     *
     * @param {number} number - The number to be converted.
     * @param {number} decPlaces - The number of decimal places to round to.
     *
     * @return {string} A number in a reader friendly format.
     */
    abbrNum(number, decPlaces) {
      // 2 decimal places => 100, 3 => 1000, etc
      decPlaces = Math.pow(10, decPlaces);

      // Enumerate number abbreviations
      var abbrev = ["K", "M", "B", "T"];

      // Go through the array backwards, so we do the largest first
      for (var i = abbrev.length - 1; i >= 0; i--) {
        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if (size <= number) {
          // Here, we multiply by decPlaces, round, and then divide by decPlaces.
          // This gives us nice rounding to a particular decimal place.
          number = Math.round((number * decPlaces) / size) / decPlaces;

          // Handle special case where we round up to the next abbreviation
          if (number == 1000 && i < abbrev.length - 1) {
            number = 1;
            i++;
          }

          // Add the letter for the abbreviation
          number += abbrev[i];

          // We are done... stop
          break;
        }
      }

      return number;
    },
  },
});
</script>
