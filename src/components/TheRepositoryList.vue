<template>
  <div>
    <div v-if="numOfSelected != 0">
      <button class="nav-button" @click="handleNavClick">
        <h3>{{ numOfSelected > 1 ? "Compare" : "Checkout" }}</h3>
      </button>
    </div>
    <p>List of repositories</p>
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
          <el-table
            class="table"
            :data="pagedData"
            @row-click="handleRowClick"
            :row-style="rowStyle"
          >
            <el-table-column width="40px">
              <template #default="scope">
                <el-checkbox
                  class="checkbox"
                  v-model="scope.row.selected"
                ></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column property="name" sortable>
              <template #header>
                <span class="table-header">Repository</span>
              </template>
            </el-table-column>
            <el-table-column property="owner" sortable show-overflow-tooltip>
              <template #header>
                <span class="table-header">Owner</span>
              </template>
            </el-table-column>
            <el-table-column property="forks" sortable>
              <template #header>
                <span class="table-header">Forks</span>
              </template>
              <template #default="scope">
                <span>{{ abbrNum(scope.row.forks, 1) }}</span>
              </template>
            </el-table-column>
            <el-table-column property="stargazers_count" sortable>
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
  z-index: 10;
  border: none;

  box-shadow: 0px 0px 10px 0.25px gray;
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

.checkbox {
  pointer-events: none;
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
    // Fetch repository list data.
    await axios
      .get(process.env.VUE_APP_API_URL + "/techstack/list")
      .then((res) => {
        this.data = this.parseData(res.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  computed: {
    filteredData() {
      if (!this.search) {
        this.setTotalItems(this.data.length);
        return this.data;
      }

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
     * Called on pagination button click.
     *
     * @param {number} newPage - The new page number.
     */
    handlePageChange(newPage) {
      this.page = newPage;
    },
    /**
     * Called on change of table contents.
     *
     * @param {number} newTotal - The new total number of items in the table.
     */
    setTotalItems(newTotal) {
      this.totalItems = newTotal;
    },
    /**
     * Called on nav-button click to route to Visualization view.
     */
    handleNavClick() {
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
    /**
     * Called on row click.
     *
     * @param {number} row - The index of the row clicked on.
     */
    handleRowClick(row) {
      if (this.numOfSelected == 2 && row.selected == false) {
        this.printMessage(
          "More than two repositories selected, please deselect one."
        );
        return;
      }

      row.selected = !row.selected; // Inverse the selected property.

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
    },
    /**
     * Prints error message to user.
     * @see {@link https://element-plus.org/en-US/component/message.html} for further information.
     *
     * @param {string} message - The message to be printed.
     */
    printMessage(message) {
      this.$message.error(message);
    },
    /**
     * Converts a number to a reader friendly format e.g. 1234 to 1.2K
     * @see {@link https://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k} for further information.
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
    /**
     * Gives a style to each row in the table.
     * @see {@link https://element-plus.org/en-US/component/table.html#table-attributes}
     */
    rowStyle() {
      return {
        cursor: "pointer",
      };
    },
  },
});
</script>
