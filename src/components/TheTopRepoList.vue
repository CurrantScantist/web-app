<template>
  <div class="list-wrapper">
    <div class="middle-wrapper">
      <h1>Check Out The Most Popular Repositories On Github</h1>

      <div class="table-wrapper">
        <el-table
          v-if="data.length != 0"
          :data="data"
          @row-click="handleRowClick"
          style="width: 100%"
          :row-style="rowstyle"
        >
          <el-table-column property="name" show-overflow-tooltip align="center">
            <template #header>
              <span class="table-header">Repository 📖</span>
            </template>
          </el-table-column>
          <el-table-column
            property="owner"
            show-overflow-tooltip
            align="center"
          >
            <template #header>
              <span class="table-header">Owner 🤝🏼</span>
            </template>
          </el-table-column>
          <el-table-column
            property="stargazers_count"
            show-overflow-tooltip
            align="center"
          >
            <template #header>
              <span class="table-header">Stargazers ⭐</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      data: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL + "/techstack/topten"
      );
      this.data = response.data.data[0];
      console.log(this.data);
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    /**
     * View corresponding repository page when clicking row
     */
    handleRowClick(row) {
      this.$router.push({
        name: "visualize",
        params: { name1: row.name, owner1: row.owner },
      });
    },
    /**
     * Causes pointer to replace mouse icon when hovering over table rows
     */
    // eslint-disable-next-line no-unused-vars
    rowstyle() {
      return {
        cursor: "pointer",
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  background: "#d4e7e2";
  // margin-top: -10%;

  h1 {
    font-size: 45px;
    font-weight: 500;
    text-align: center;
    color: #464c58;
    margin-bottom: 30px;
  }
  .middle-wrapper {
    background: #d4e7e2;
  }

  .table-wrapper {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 100px;
    background: #d4e7e2;

    .el-table {
      font-size: 16px;
      // background: transparent;
      border-radius: 20px;
    }
  }
  @media screen and (max-width: 700px) {
    .table-wrapper {
      width: 90%;
    }
  }

  .pagination {
    margin: 0 auto;
  }
}

.table-header {
  color: #5e5e5e;
}
</style>
