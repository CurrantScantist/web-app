<template>
  <div class="test">
    <div class="health-model">
      <div class="repository">
        <div class="rep-container">
          <span
            id="close"
            onclick="
                        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); 
                        return false;
                    "
          >
            <button class="close-button">X</button>
          </span>

          <h1>
            {{ repository1MetaData.owner }}/{{ repository1MetaData.name }}
          </h1>

          <h5>
            {{ repository1MetaData.description }}
          </h5>

          <div class="info-grid">
            <div class="info-item">
              <div class="stat-name">Forks Count:</div>
              <div>
                {{ (repository1MetaData.forks_count || 0).toLocaleString() }}
              </div>
            </div>

            <div class="info-item vulnerabilityTheme critical">
              <div class="stat-name">Critical Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Forks:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item vulnerabilityTheme high">
              <div class="stat-name">High Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Watchers:</div>
              <div>
                {{ (repository1MetaData.watchers_count || 0).toLocaleString() }}
              </div>
            </div>

            <div class="info-item vulnerabilityTheme medium">
              <div class="stat-name">Medium Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Issues:</div>
              <div>
                {{
                  (repository1MetaData.open_issues_count || 0).toLocaleString()
                }}
              </div>
            </div>

            <div class="info-item vulnerabilityTheme low">
              <div class="stat-name">Low Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Default Branch:</div>
              <div>{{ repository1MetaData.default_branch }}</div>
            </div>

            <div class="info-item vulnerabilityTheme unknown">
              <div class="stat-name">Unknown Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Stargazers:</div>
              <div>
                {{
                  (repository1MetaData.stargazers_count || 0).toLocaleString()
                }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Project Size:</div>
              <div>
                {{ (repository1MetaData.size || 0).toLocaleString() }} KB
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Created on:</div>
              <div>
                {{ repo1CreatedAt }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Last updated on:</div>
              <div>
                {{ repo1LastUpdatedOn }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Tags:</div>
              <div>{{ (repository1MetaData.topics || []).join(", ") }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Tags:</div>
              <div>{{ (repository1MetaData.topics || []).join(", ") }}</div>
            </div>
          </div>

          <div class="viz-grid">
            <div class="simple-visualisation1">
              <h3>Placeholder</h3>
              <h6>(Placeholder)</h6>
              <v-echarts v-bind:option="option2" style="height: 300px" />
            </div>
            <div class="simple-visualisation2">
              <h3>Contribution Pie Chart</h3>
              <h6>(by Number of Commits)</h6>
              <v-echarts v-bind:option="option2" style="height: 300px" />
            </div>
            <div class="wide-visualisation1">
              <h3>Lines of Code by language</h3>
              <h6>(over versions)</h6>
              <v-echarts v-bind:option="locLang1" style="height: 500px" />
            </div>

            <div class="wide-visualisation2">
              <h3>Lines in files by type</h3>
              <h6>(over versions)</h6>
              <v-echarts v-bind:option="locType1" style="height: 500px" />
            </div>

            <div class="wide-visualisation3">
              <h3>Dependencies, Issues & Sizes Comparison</h3>
              <h6>Bubble plot</h6>
              <v-echarts v-bind:option="bubblePlot1" style="height: 500px" />
            </div>

            <div class="heat-map">
              <h3>Open Issues Heat Map</h3>
              <h6>By Weeks</h6>
              <v-echarts v-bind:option="heatMap1" style="height: 380px" />
            </div>

            <div class="node-link">
              <h3>Node Link Diagram</h3>
              <h6>By License Type</h6>
              <div class="node-link-container">
                  <div style="width: auto; min-width: 1100px">
                    <v-echarts v-bind:option="nodeLink1" style="height: 1100px"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="repository">
        <div class="rep-container">
          <span
            id="close"
            onclick="
                        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); 
                        return false;
                    "
          >
            <button class="close-button">X</button>
          </span>

          <h1>
            {{ repository2MetaData.owner }}/{{ repository2MetaData.name }}
          </h1>

          <h5>
            {{ repository2MetaData.description }}
          </h5>

          <div class="info-grid">
            <div class="info-item">
              <div class="stat-name">Forks Count:</div>
              <div>
                {{ (repository1MetaData.forks_count || 0).toLocaleString() }}
              </div>
            </div>

            <div class="info-item vulnerabilityTheme critical">
              <div class="stat-name">Critical Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Forks:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item vulnerabilityTheme high">
              <div class="stat-name">High Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Watchers:</div>
              <div>
                {{ (repository1MetaData.watchers_count || 0).toLocaleString() }}
              </div>
            </div>

            <div class="info-item vulnerabilityTheme medium">
              <div class="stat-name">Medium Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Issues:</div>
              <div>
                {{
                  (repository1MetaData.open_issues_count || 0).toLocaleString()
                }}
              </div>
            </div>

            <div class="info-item vulnerabilityTheme low">
              <div class="stat-name">Low Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Default Branch:</div>
              <div>{{ repository1MetaData.default_branch }}</div>
            </div>

            <div class="info-item vulnerabilityTheme unknown">
              <div class="stat-name">Unknown Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Stargazers:</div>
              <div>
                {{
                  (repository1MetaData.stargazers_count || 0).toLocaleString()
                }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Project Size:</div>
              <div>
                {{ (repository1MetaData.size || 0).toLocaleString() }} KB
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Created on:</div>
              <div>
                {{ repo2CreatedAt }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Last updated on:</div>
              <div>
                {{ repo2LastUpdatedOn }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Tags:</div>
              <div>{{ (repository1MetaData.topics || []).join(", ") }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Tags:</div>
              <div>{{ (repository1MetaData.topics || []).join(", ") }}</div>
            </div>
          </div>

          <div class="viz-grid">
            <div class="simple-visualisation1">
              <h3>Placeholder</h3>
              <h6>(Placeholder)</h6>
              <v-echarts v-bind:option="option2" style="height: 300px" />
            </div>
            <div class="simple-visualisation2">
              <h3>Contribution Pie Chart</h3>
              <h6>(by Number of Commits)</h6>
              <v-echarts v-bind:option="option2" style="height: 300px" />
            </div>
            <div class="wide-visualisation1">
              <h3>Lines of Code by language</h3>
              <h6>(over versions)</h6>
              <v-echarts v-bind:option="locLang2" style="height: 500px" />
            </div>

            <div class="wide-visualisation2">
              <h3>Lines in files by type</h3>
              <h6>(over versions)</h6>
              <v-echarts v-bind:option="locType2" style="height: 500px" />
            </div>

            <div class="wide-visualisation3">
              <h3>Dependencies, Issues & Sizes Comparison</h3>
              <h6>Bubble plot</h6>
              <v-echarts v-bind:option="bubblePlot2" style="height: 500px" />
            </div>

            <div class="heat-map">
              <h3>Open Issues Heat Map</h3>
              <h6>By Weeks</h6>
              <v-echarts v-bind:option="heatMap2" style="height: 380px" />
            </div>

            <div class="node-link">
              <h3>Node Link Diagram</h3>
              <h6>By License Type</h6>
              <div class="node-link-container">
                  <div style="width: auto; min-width: 1100px">
                    <v-echarts v-bind:option="nodeLink2" style="height: 1100px"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  background: linear-gradient(90deg, #5ed098 13%, #15ccff 88%);
  color: white;
}

.repository {
  padding: 2%;
}

.rep-container {
  background-color: rgba(113, 113, 113, 0.58);
  padding: 2%;
  padding-top: 5px;
  border-radius: 25px;
}

.vulnerabilityTheme {
  border-radius: var(--viz--radius);
  align-items: center;
  justify-content: center;
}

.critical {
  background-color: #7a002f;
}

.high {
  background-color: #c70039;
}

.medium {
  background-color: #ff7733;
}

.low {
  background-color: #fcad00;
}

.unknown {
  background-color: #8e8e8e;
}

.viz-grid {
  display: grid;
  font-size: 138%;
  grid-template-rows: repeat(1fr);
  grid-gap: 1rem;
  grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr);
  grid-auto-flow: row;
  grid-template-areas:
    "simple-visualisation1 simple-visualisation2"
    "wide-visualisation1 wide-visualisation1"
    "wide-visualisation2 wide-visualisation2"
    "wide-visualisation3 wide-visualisation3"
    "heat-map heat-map"
    "node-link node-link";
}

.info-grid {
  display: grid;
  grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr);
  grid-template-rows: repeat(1fr);
  grid-gap: 0.5rem;
  grid-auto-flow: row;
  padding: 2%;
  background-color: rgba(38, 38, 38, 0.35);
  border-radius: var(--viz--radius);
  margin-bottom: 3%;
}

.health-model {
  display: grid;
  grid-template-rows: repeat(1fr);
  grid-gap: 0rem;
  grid-template-columns: minmax(0%, auto) minmax(0%, auto);
  grid-auto-flow: column;
}

.stat-name {
  font-weight: 800;
  padding-right: 5px;
}

@media only screen and (max-width: 650px) {
  .info-grid {
    display: grid;
    grid-template-columns: minmax(0%, 1fr);
    grid-template-rows: repeat(1fr);
    grid-gap: 0.5rem;
    grid-auto-flow: row;
    margin-bottom: 3%;
  }

  h1,
  h2 {
    font-size: 185%;
    margin-bottom: 8px;
  }
}

@media only screen and (max-width: 850px) {
  .viz-grid {
    grid-gap: 1rem;
    grid-template-columns: minmax(0%, 100%);
    grid-auto-flow: row;
    grid-template-areas:
      "simple-visualisation1"
      "simple-visualisation2"
      "wide-visualisation1"
      "wide-visualisation2"
      "wide-visualisation3"
      "heat-map"
      "node-link";
  }
}

@media only screen and (max-width: 980px) {
  .health-model {
    display: grid;
    grid-template-rows: repeat(1fr);
    grid-gap: 1rem;
    grid-template-columns: minmax(0%, auto);
    grid-auto-flow: row;
    grid-template-rows: repeat(1fr);
  }
}

.simple-visualisation1,
.simple-visualisation2,
.wide-visualisation1,
.wide-visualisation2,
.wide-visualisation3,
.node-link,
.heat-map {
  background-color: rgba(255, 255, 255, 0.88);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  border-radius: var(--viz--radius);
}

.simple-visualisation1 {
  grid-area: simple-visualisation1;
}

.simple-visualisation2 {
  grid-area: simple-visualisation2;
}

.wide-visualisation1 {
  grid-area: wide-visualisation1;
}

.wide-visualisation2 {
  grid-area: wide-visualisation2;
}

.wide-visualisation3 {
  grid-area: wide-visualisation3;
}

.heat-map {
  grid-area: heat-map;
}

.node-link {
  grid-area: node-link;
  overflow-x:scroll;
  overflow-y:scroll;
  
  //white-space:nowrap;
}

.node-link-container {
  height: 800px;
  //display:inline-block;
}

.info-item {
  display: flex;
  font-weight: 500;
  font-size: 130%;
  padding: 5px;
  margin: 1%;
}

.close-button {
  background-color: rgb(255, 0, 0, 0.8);
  color: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 11;
  display: block;
  border-radius: 50%;
  font-weight: 500;
  height: 25px;
  width: 25px;
  margin-top: 13px;
  float: right;
}

.close-button:hover {
  background-color: rgb(255, 0, 0, 1);
  color: white;
  cursor: pointer;
}

// Typography
h1,
h2 {
  font-weight: 800;
  font-size: 385%;
  //color: #000000;
  margin-bottom: 13px;
}

h3 {
  font-weight: 800;
  font-size: 100%;
  color: #000000;
  margin: 0;
  text-align: left;
}

h6 {
  font-weight: 500;
  font-size: 50%;
  color: #383838;
  margin: 0;
  text-align: left;
  margin-bottom: 3%;
}

h5 {
  font-weight: 500;
  font-size: 138%;
  margin-top: 5px;
  text-align: justify;
}
</style>

<script>

// Library Imports
import { VEcharts } from "vue3-echarts";
import axios from "axios";

// imports for json visualisations containing all the design elements representing the channel of visualisations
import locByType from "@/visualisations/LinesOfCodeByType.json";
import locByLang from "@/visualisations/LinesOfCodeByLanguage.json";
import depBubbleChart from "@/visualisations/DependencyIssuesSizeBubbleChart.json";
import nodeLink from "@/visualisations/NodeLinkDiagram.json";
import heatMap from "@/visualisations/HeatMapDiagram.json";

// imports for series sub objects for different visualisations representing the mark of visualisations
import seriesObj from "@/visualisations/SeriesSubObjLangLOC.json";
import bubbleChartSeriesObj from "@/visualisations/SeriesSubObjBubbleChart.json";
import horizontalBarSeriesObj from "@/visualisations/SeriesSubObjHorizontalBar.json";
import nodeLinkSeriesObj from "@/visualisations/SeriesSubObjNodeLink.json";
import heatMapSeriesObj from "@/visualisations/SeriesSubObjHeatMap.json";


export default {
  name: "OneOneRepoComparison",
  props: {
    name: { type: String, required: true },
    owner: { type: String, required: true },
  },
  data() {
    return {
      repository1MetaData: {},
      repository2MetaData: {},
      repository1Stats: {},
      repository2Stats: {},
      option2: {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Number of Commits",
            type: "pie",
            radius: "50%",
            data: [
              { value: 2, name: "Alan Kopenowski" },
              { value: 2, name: "Howard Wolowitz" },
              { value: 5, name: "Rodion emayov" },
              { value: 8, name: "Gautam Naidu" },
              { value: 3, name: "Eddie Chen" },
              { value: 10, name: "Emma Richards" },
              { value: 7, name: "Others" },
            ],
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
      locLang1: {},
      locLang2: {},
      locType1: {},
      locType2: {},
      bubblePlot1: {},
      bubblePlot2: {},
      heatMap1: {},
      heatMap2: {},
      nodeLink1: {},
      nodeLink2: {},
    };
  },
  components: {
    VEcharts,
  },
  async created() {
    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/techstack/{name_owner}?name=${this.name}&owner=${this.owner}`
      );
      this.repository1MetaData = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/techstack/{name_owner}?name=${this.name}&owner=${this.owner}`
      );
      this.repository2MetaData = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/release/{name_owner}?name=${this.name}&owner=${this.owner}`
      );
      this.repository1Stats.loc = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/release/{name_owner}?name=${this.name}&owner=${this.owner}`
      );
      this.repository2Stats.loc = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712"
      );
      this.repository1Stats.dep = response.data.data;
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712"
      );
      this.repository2Stats.dep = response.data.data;
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/c820af62-b4ef-4840-915f-bab4b82dd751"
      );
      this.repository1Stats.nodeLink = response.data;
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/ad3b2bfc-c81d-4d1f-a88d-8c3477b8ceda"
      );
      this.repository2Stats.nodeLink = response.data;
    } catch (e) {
      console.log(e);
    }


    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/1e024a52-8dd0-4844-bae8-644ddae4ee82"
      );
      this.repository1Stats.heatMap = response.data.data;
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/1e024a52-8dd0-4844-bae8-644ddae4ee82"
      );
      this.repository2Stats.heatMap = response.data.data; // array of marks
    } catch (e) {
      console.log(e);
    }

    this.processData(1);
    this.processData(2);
  },
  computed: {
    repo1CreatedAt() {
      return this.processDate(this.repository1MetaData.created_at);
    },
    repo2CreatedAt() {
      return this.processDate(this.repository2MetaData.created_at);
    },
    repo1LastUpdatedOn() {
      return this.processDate(this.repository1MetaData.updated_at);
    },
    repo2LastUpdatedOn() {
      return this.processDate(this.repository2MetaData.updated_at);
    },
  },
  methods: {
    getColor(size) {
      let colorSet = [
        "#1ceca8",
        "#00DDFF",
        "#37A2FF",
        "#FF0087",
        "#FFBF00",
        "#ff5100",
        "#8800ff",
        "#82173f",
        "#383838",
        "#000000",
        "#bc5090",
        "#a05195",
        "#f95d6a",
        "#003f5c",
        "#55838a",
      ];
      let colorPalette = [];
      for (let i = 0; i < size; i++) {
        if (i >= colorSet.length) {
          colorPalette.push(colorSet[i % colorSet.length]);
        } else {
          colorPalette.push(colorSet[i]);
        }
      }
      return colorPalette;
    },
    setSeriesSubObject(chart, map, objToCopy) {
      map.forEach((value, key) => {
        let seriesSubObjCopy = JSON.parse(JSON.stringify(objToCopy));
        seriesSubObjCopy.name = key;
        seriesSubObjCopy.areaStyle.color = value.color;
        seriesSubObjCopy.data = value.data;
        chart.series.push(seriesSubObjCopy);
      });
    },
    setSeriesHeatMap(chart, map, subObj) {
      map.forEach((value, key) => {
        let seriesSubObjCopy = JSON.parse(JSON.stringify(subObj));
        seriesSubObjCopy.name = seriesSubObjCopy.name + key;
        seriesSubObjCopy.data = [value]
        chart.series.push(seriesSubObjCopy);
      });
    },
    assignColor(givenMap, colorPalette) {
      let colorAllocationIndex = 0;
      givenMap.forEach((value, key, map) => {
        value.color = colorPalette[colorAllocationIndex++];
        map.set(key, value);
      });
    },
    processData(repoNumber) {
      let locByLangCopy = JSON.parse(JSON.stringify(locByLang));
      let locByTypeCopy = JSON.parse(JSON.stringify(locByType));
      let depBubbleChartCopy = JSON.parse(JSON.stringify(depBubbleChart));
      let nodeLinkCopy1 = JSON.parse(JSON.stringify(nodeLink));
      let nodeLinkCopy2 = JSON.parse(JSON.stringify(nodeLink));
      let heatMapCopy = JSON.parse(JSON.stringify(heatMap));

      let languageData = new Map();
      let statsData = new Map();
      let versions = [];
      let heatMapData = new Map();

      let extractedDepData = this.extractDepData(repoNumber);
      let extractedData = this.extractData(repoNumber);
      let extractedHeatMapData = this.extractHeatMapData(repoNumber); 

      versions = extractedData[0];
      languageData = extractedData[1];          // extracting info from array
      statsData = extractedData[2];

      heatMapData = extractedHeatMapData[0]
      heatMapCopy.visualMap.min = extractedHeatMapData[1]
      heatMapCopy.visualMap.max = extractedHeatMapData[2]


      let depRepos = extractedDepData.map((repoArray) => {
        return repoArray[3];
      });

      let colorPalette = this.getColor(languageData.size);
      this.assignColor(languageData, colorPalette);

      locByLangCopy.xAxis[0].data = versions;
      locByTypeCopy.yAxis[0].data = versions;

      heatMapCopy.xAxis.data = extractedHeatMapData[3]

      locByLangCopy.color = colorPalette;

      depBubbleChartCopy.color = this.getColor(depRepos.length);
      locByLangCopy.legend.data = Array.from(languageData.keys()); // add x axis label
      depBubbleChartCopy.legend.data = depRepos;

      //   locByTypeCopy.legend.data = Array.from(statsData.keys());  // rm legend

      this.setSeriesSubObject(locByLangCopy, languageData, seriesObj);
      this.setSeriesSubObject(locByTypeCopy, statsData, horizontalBarSeriesObj);
      this.setSeriesBubbleChart(depBubbleChartCopy, extractedDepData,depBubbleChartCopy.color);
      this.setSeriesHeatMap(heatMapCopy, heatMapData, heatMapSeriesObj)
      

      this.initializeNodeLink(nodeLinkCopy1, this.repository1Stats.nodeLink);
      this.initializeNodeLink(nodeLinkCopy2, this.repository2Stats.nodeLink);
      
      if (repoNumber == 1) {
        this.locType1 = locByTypeCopy;
        this.locLang1 = locByLangCopy;
        this.locType2 = locByTypeCopy;
        this.locLang2 = locByLangCopy;
        this.bubblePlot1 = depBubbleChartCopy;
        this.bubblePlot2 = depBubbleChartCopy;
        this.nodeLink1 = nodeLinkCopy1
        this.nodeLink2 = nodeLinkCopy2
        this.heatMap1 = heatMapCopy
        this.heatMap2 = heatMapCopy
      } else if (repoNumber == 2) {
        // this.locType2 = locByTypeCopy;
        // this.locLang2 = locByLangCopy;
      }
    },
    setSeriesBubbleChart(chart, map, colors) {
      let colorIndex = 0;
      map.forEach((repoArray) => {
        let seriesSubObjCopy = JSON.parse(JSON.stringify(bubbleChartSeriesObj));
        seriesSubObjCopy.name = repoArray[3];
        seriesSubObjCopy.symbolSize = repoArray[2];
        seriesSubObjCopy.data = [repoArray];
        seriesSubObjCopy.areaStyle.color = colors[colorIndex++];
        chart.series.push(seriesSubObjCopy);
      });
    },
    processDate(inputDate) {
      if (inputDate) {
        let date = new Date(inputDate);
        let dateFormatter = new Intl.DateTimeFormat("en-AU", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          timeZone: "Australia/Sydney",
          timeZoneName: "short",
          hour12: false,
        });

        return dateFormatter.format(date);
      }
      return "";
    },
    extractDepData(repoNumber) {
      let jsonObj;
      let extractedDepData = []; // [[xAxis: repo_size, yAxis: Dep_count, Size: Issue_count, Color: Name]]

      if (repoNumber == 1) {
        jsonObj = this.repository1Stats.dep;
      } else if (repoNumber == 2) {
        jsonObj = this.repository2Stats.dep;
      }

      for (let repoObj of jsonObj) {
        let repoData = [];
        repoData.push(repoObj.size);
        repoData.push(repoObj.dep_count);
        repoData.push(Math.sqrt(repoObj.issue_count) * 5);
        repoData.push(repoObj.name);
        extractedDepData.push(repoData);
      }

      return extractedDepData;
    },
    extractHeatMapData(repoNumber){
      let jsonResponse;
      let extractedHeatMapData = new Map();  // [Week: [X,Y,VAL]]
      let maxVal = 0, minVal = Infinity;
      let xAxis = []  // 19 cols
      let weekCount = 0;

      if (repoNumber == 1) {
        jsonResponse = this.repository1Stats.heatMap;
      } else if (repoNumber == 2) {
        jsonResponse = this.repository2Stats.heatMap;
      }

      for (let week in jsonResponse) {
        let weekObj = jsonResponse[week];
        let weekData = [];
        weekCount+=1;
      
        weekData.push(weekObj.coords.x);
        weekData.push(weekObj.coords.y);
        weekData.push(weekObj.issues.open);
  
        if(weekObj.start.substring(5,7) === "01"){
          if (xAxis.length < Math.floor(weekCount / 8)) {
             xAxis.push(weekObj.start.substring(0,4));
          } else {
            xAxis[Math.floor(weekCount / 8)-1] = weekObj.start.substring(0,4);
          }
        }

        if (weekData[2] > maxVal) {
          maxVal = weekData[2];      // max range for color palette and accurate colour interpolation
        }

        if (weekData[2] < minVal){
          minVal = weekData[2];      // max range for color palette and accurate colour interpolation
        }

        if (weekCount % 8 == 0){
          if (xAxis.length < (weekCount / 8)) {
            xAxis.push("");
          }
        }

        extractedHeatMapData.set(weekObj.week,weekData);
      }
      return [extractedHeatMapData, minVal, maxVal, xAxis];
    },
    initializeNodeLink(nodeLink, data){
      let nodeLinkSubObj = JSON.parse(JSON.stringify(nodeLinkSeriesObj));
      nodeLinkSubObj.categories = data.categories
      nodeLinkSubObj.nodes = data.nodes
      nodeLinkSubObj.links = data.links
      nodeLink.series.push(nodeLinkSubObj);
    },
    extractData(repoNumber) {
      let jsonObj;
      let versions = [];
      const languageData = new Map();
      const statsData = new Map();

      statsData.set("code", { data: [], color: "#34a853" });
      statsData.set("comment", { data: [], color: "#4285f4" });
      statsData.set("blank", { data: [], color: "#ea4335" });

      if (repoNumber == 1) {
        jsonObj = this.repository1Stats.loc;
      } else if (repoNumber == 2) {
        jsonObj = this.repository2Stats.loc;
      }

      for (let versionObj of jsonObj) {
        versions.push(versionObj.tag_name);
        for (const [langKey, langObj] of Object.entries(versionObj.LOC)) {
          if (langKey === "SUM") {
            statsData.forEach((value, key, map) => {
              value.data.push(langObj[key]);
              map.set(key, value);
            });
          } else {
            if (languageData.has(langKey)) {
              let tempValue = languageData.get(langKey);
              tempValue.data.push(langObj.code);
              languageData.set(langKey, tempValue);
            } else {
              languageData.set(langKey, { data: [langObj.code] });
            }
          }
        }
      }
      return [versions, languageData, statsData];
    },
  },
};

// heat map: https://run.mocky.io/v3/1e024a52-8dd0-4844-bae8-644ddae4ee82
// heat map delete: https://designer.mocky.io/manage/delete/1e024a52-8dd0-4844-bae8-644ddae4ee82/fit4002
// node link: https://run.mocky.io/v3/ad3b2bfc-c81d-4d1f-a88d-8c3477b8ceda
// node link (large data): https://run.mocky.io/v3/c820af62-b4ef-4840-915f-bab4b82dd751 
// node link delete: https://designer.mocky.io/manage/delete/ad3b2bfc-c81d-4d1f-a88d-8c3477b8ceda/fit4002
// bubble chart: https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712
// bubble chart delete: https://designer.mocky.io/manage/delete/4f9a9846-1152-4d3a-97be-3620c6a11712/7Z3ZyMjTlAAFvcCRGcb4UnZAXSgU60okB7hF
</script>
