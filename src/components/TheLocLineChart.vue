<template>
  <h3><slot name="title"></slot></h3>
  <h6><slot name="subtitle"></slot></h6>
  <v-chart
    v-if="chartOptions.length != 0"
    v-bind:option="chartOptions"
    style="height: 500px"
    autoresize
  />
</template>

<style lang="scss" scoped>
@import "@/styles/components/_chart.scss";
</style>

<script>
import locOptions from "@/visualisations/LinesOfCodeByLanguage.json";
import seriesObj from "@/visualisations/SeriesSubObjLangLOC.json";
import VChart from "vue-echarts";
export default {
  components: {
    VChart,
  },
  props: {
    languageData: { type: Object, default: () => {} },
    versions: { type: Array, default: () => [] },
    colorData: { type: Object, default: () => {} },
  },
  data() {
    return {};
  },
  computed: {
    chartOptions() {
      if (this.versions.length == 0) {
        return [];
      }

      let locByLangCopy = JSON.parse(JSON.stringify(locOptions));
      locByLangCopy.xAxis[0].data = this.versions;
      locByLangCopy.legend.data = [] // add x axis label
      locByLangCopy.color = []
      this.setSeriesSubObject(locByLangCopy, this.languageData, seriesObj);
      return locByLangCopy;
    },
  },
  methods: {
    setSeriesSubObject(chart, map, objToCopy) {
      
      map.forEach((value, key) => {
        chart.legend.data.push(key)
        chart.color.push(this.colorData[key])
        let seriesSubObjCopy = JSON.parse(JSON.stringify(objToCopy));
        seriesSubObjCopy.name = key;
        seriesSubObjCopy.areaStyle.color = this.colorData[key];
        seriesSubObjCopy.data = value.data;
        chart.series.push(seriesSubObjCopy);
      });
    },
  },
};
</script>
