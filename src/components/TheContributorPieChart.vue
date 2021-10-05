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
    height: {
      type: String,
      default: "300px",
    },
    pieData: {
      required: true,
    },
    pieRadius: {
      type: String,
      default: "50%",
    },
    hoverHeading: {
      type: String,
      required: true,
    },
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
