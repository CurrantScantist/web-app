<template>
  <div class="top-wrapper">
    <div>
      <h3>{{ chartData[Object.keys(chartData)[selectedData]].name }}</h3>
      <h6>(over time)</h6>
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
              {{ item.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

  <v-chart
    v-bind:option="chartOptions"
    style="height: 500px"
    :loading="isLoading"
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

/**
 * Line chart for over time data with dropdown for different types of over time data.
 */
export default {
  props: {
    /**
     * The data for the line chart.
     */
    chartData: { type: Object, required: true, default: null },
    /**
     * If the chart data is still loading.
     */
    isLoading: { type: Boolean, default: true },
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
    /**
     * Called on dropdown selection, changing which data is displayed.
     *
     * @param {number} newIndex - The index of the selected dropdown row.
     */
    handleDropdownClick(newIndex) {
      this.selectedData = newIndex;
    },
  },
};
</script>
