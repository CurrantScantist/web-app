<template>
  <v-chart
    :option="pieOptions"
    :style="pieHeight"
    :loading="isLoading"
    autoresize
  />
</template>

<style lang="scss" scoped>
@import "@/styles/components/_chart.scss";
</style>

<script>
import VChart from "vue-echarts";

export default {
  name: "PieChart",
  components: {
    VChart,
  },
  props: {
    /**
     * The height of the chart.
     */
    height: {
      type: String,
      default: "300px",
    },
    /**
     * The contributor data for the chart.
     */
    pieData: {
      required: true,
    },
    /**
     * The radius of the chart. 0-100%.
     */
    pieRadius: {
      type: String,
      default: "50%",
    },
    /**
     * The heading of the sub series object.
     */
    hoverHeading: {
      type: String,
      required: true,
    },
    /**
     * If the data for the chart is loading.
     */
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    pieOptions() {
      return {
        tooltip: {
          trigger: "item",
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: "Save",
            },
          },
        },
        series: [
          {
            name: this.hoverHeading,
            type: "pie",
            radius: this.pieRadius,
            data: this.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
    },
    pieHeight() {
      return `height: ${this.height}`;
    },
  },
};
</script>
