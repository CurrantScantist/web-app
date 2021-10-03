<template>
  <h3><slot name="heading">Pie Chart Heading</slot></h3>
  <h6>
    (
    <slot name="subheading">subheading</slot>
    )
  </h6>
  <v-chart :option="pieOptions" :style="pieHeight" autoresize />
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
      type: Object,
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
  },
  data() {
    return {
      pieOptions: {
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
      },
    };
  },
  computed: {
    pieHeight() {
      return `height: ${this.height}`;
    },
  },
};
</script>
