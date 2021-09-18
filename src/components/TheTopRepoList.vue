<template>
<div class="buffer-wrapper">
</div>

<div class="list-wrapper">
      <svg class="top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#d4e7e2"
        fill-opacity="1"
        d="M0,96L34.3,122.7C68.6,149,137,203,206,197.3C274.3,192,343,128,411,133.3C480,139,549,213,617,224C685.7,235,754,181,823,154.7C891.4,128,960,128,1029,160C1097.1,192,1166,256,1234,282.7C1302.9,309,1371,299,1406,293.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        style="--darkreader-inline-fill: #424e41"
        data-darkreader-inline-fill=""
      ></path>
    </svg>

  <div class="middle-wrapper">
  <h1>Top 10 Most Popular Repositories</h1>
  
    <div class="table-wrapper">
      
        <el-table v-if="data.length != 0" :data="data" @row-click="handleRowClick" style="width:100%" :cell-style="cellstyle">
          <el-table-column property="name" label="Repository 📖" show-overflow-tooltip  align="center">
          </el-table-column>
          <el-table-column property="owner" label="Owner 🤝🏼" show-overflow-tooltip align="center">
          </el-table-column>
          <el-table-column property="stargazers_count" label="Stargazers ⭐" show-overflow-tooltip align="center">
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
      }
    },
    async created() {
      try {
        const response = await axios.get(
          process.env.VUE_APP_API_URL + "/techstack/topten"
        );
        this.data = response.data.data[0];
        console.log(this.data)
      } catch (e) {
        console.log(e);
      }
    },
    methods: {
      handleRowClick(row) {
        this.$router.push({
          name: "repository_view",
          params: { name: row.name, owner: row.owner },
        });
      },
      // eslint-disable-next-line no-unused-vars
      // rowstyle({row,rowIndex}) {
      //   if (rowIndex === 0) {
      //     return {
      //       "background":"black"
      //     }
      //   }
      //   return ''
      // }
      cellstyle() {
        return {
          // "background": "#d4e7e2"
        }
      }
    }

});
</script>

<style lang="scss" scoped>

.buffer-wrapper{
  background:transparent;
  margin-top: 50px;
}

.list-wrapper {
  display: flex;
  flex-direction: column;
      background: "#d4e7e2";
      // margin-top: -10%;

  h1 {
    font-size: 45px;
    font-weight: 500;
    text-align:center;
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
      border-radius: 20px
    }
  }

  .pagination {
    margin: 0 auto;
  }
}
</style>
