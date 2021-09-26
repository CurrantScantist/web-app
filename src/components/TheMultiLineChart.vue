<template>
  <div class="top-wrapper">
    <div class="title-wrapper">
      <h3><slot name="title"></slot></h3>
      <h6>(<slot name="subtitle"></slot>)</h6>
    </div>
    <div class="dropdown-wrapper" v-if="Object.keys(chartData).length > 1">
      <el-dropdown trigger="click" @command="handleDropdownClick">
        <span class="el-dropdown-link">
          Data<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(item, name, index) in chartData"
              :key="name"
              :command="index"
            >
              {{ name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <v-chart v-bind:option="chartOptions" style="height: 500px" autoresize />
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
    chartData: { type: Object, required: true, default: null },
  },
  components: {
    VChart,
  },
  data() {
    return {
      selectedData: 0,
    };
  },
  computed: {
    chartOptions() {
      return {
        xAxis: {
          type: "category",
          data: this.chartData[Object.keys(this.chartData)[this.selectedData]]
            .xData,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.chartData[Object.keys(this.chartData)[this.selectedData]]
              .yData,
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
        grid: {
          left: "5%",
          right: "3%",
          bottom: "5%",
          top: "13%",
          containLabel: true,
        },
      };
    },
  },
  methods: {
    handleDropdownClick(newIndex) {
      this.selectedData = newIndex;
      console.log(this.selectedData);
    },
  },
};
</script>
