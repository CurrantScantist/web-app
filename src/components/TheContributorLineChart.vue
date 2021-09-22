<template>
  <div class="top-wrapper">
    <div class="title-wrapper">
      <h3><slot name="title"></slot></h3>
      <h6><slot name="subtitle"></slot></h6>
    </div>
    <div class="dropdown-wrapper">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus"
              >Action 2</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >Action 3</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check"
              >Action 5</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <v-chart
    v-if="chartOptions.length != 0"
    v-bind:option="chartOptions"
    style="height: 500px"
    autoresize
  />
</template>

<style lang="scss" scoped>
@import "@/styles/components/_chart.scss";

.top-wrapper {
  display: flex;
  flex-direction: row;
}

.dropdown-wrapper {
  margin-left: auto;
}
</style>

<script>
import VChart from "vue-echarts";

export default {
  props: {
    xData: { type: Array, required: true },
    yData: { type: Array, required: true },
  },
  components: {
    VChart,
  },
  data() {
    return {
      chartOptions: {
        xAxis: {
          type: "category",
          data: this.xData,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.yData,
            type: "line",
          },
        ],
        toolbox: {
          feature: {
            saveAsImage: {
              title: "Save as .png",
            },
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
      },
    };
  },
};
</script>
