<template>
  <div class="page">
    <div v-bind:class="{ 'health-model': name2 }">
      <div class="repository">
        <div class="rep-container">
          <h1>{{ repo1MetaData.owner }}/{{ repo1MetaData.name }}</h1>
          <h5>{{ repo1MetaData.description }}</h5>

          <div v-bind:class="{ 'meta-grid-round-single meta-grid-round': !name2, 'meta-grid-round-multi meta-grid-round': name2 }">
            <div class="meta-container">
                <div class="container-title">Tags</div>
                <div class = "tag-grid" id = "tags1">
                  
                </div>
            </div>

            <the-vulnerabilities-card
                  v-if="Object.keys(repo1MetaData).length"
                  :open_issues_count="repo1MetaData.open_issues_count"
            ></the-vulnerabilities-card>
          </div>

          

          <div  v-bind:class="{ 'meta-grid-single meta-grid': !name2, 'meta-grid-multi meta-grid': name2 }">
            <the-metadata-card
              v-if="Object.keys(repo1MetaData).length"
              :forks="repo1MetaData.forks"
              :stargazers="repo1MetaData.stargazers_count"
              :watchers="repo1MetaData.watchers_count"
              :openIssues="repo1MetaData.open_issues"
              :defaultBranch="repo1MetaData.default_branch"
              :size="repo1MetaData.size"
              :topics="repo1MetaData.topics"
              :createdOn="repo1MetaData.created_at"
              :lastUpdatedOn="repo1MetaData.updated_at"
              :archived="repo1MetaData.archived"
              :disabled="repo1MetaData.disabled"
              :language="repo1MetaData.language"
              :num_tags="repo1MetaData.num_tags"
              :latest_tag="repo1MetaData.latest_tag"
              :subscriber_count="repo1MetaData.subscribers_count"
            ></the-metadata-card>
          </div>

          <div
            class="viz-grid"
            v-bind:class="{ 'single-repo': !name2, 'multi-repo': name2 }"
          >
            <div
              class="simple-visualisation1"
              v-if="contributors[0].length != 0"
            >
              <the-contributor-pie-chart
                :pieData="contributors[0][0]"
                hoverHeading="Contributor"
              >
                <template v-slot:heading>Contributors</template>
                <template v-slot:subheading>last 30 days</template>
              </the-contributor-pie-chart>
            </div>
            <div
              class="simple-visualisation2"
              v-if="contributors[0].length != 0"
            >
              <the-contributor-pie-chart
                :pieData="contributors[0][1]"
                hoverHeading="Contributor"
              >
                <template v-slot:heading>Contributors</template>
                <template v-slot:subheading>all time</template>
              </the-contributor-pie-chart>
            </div>
            <div class="wide-visualisation1">
              <the-loc-line-chart
                :languageData="languageData[0]"
                :versions="versionData[0]"
                :colorData="locColorData[0]"
              >
                <template v-slot:title>Lines of Code by language</template>
                <template v-slot:subtitle>(over versions)</template>
              </the-loc-line-chart>
            </div>

            <div class="wide-visualisation2">
              <h3>Lines in files by type</h3>
              <h6>(over versions)</h6>
              <v-chart
                v-bind:option="locType1"
                style="height: 500px"
                autoresize
              />
            </div>

            <div class="wide-visualisation3">
              <h3>Dependencies, Issues & Sizes</h3>
              <h6>Bubble plot</h6>
              <v-chart
                v-bind:option="bubblePlot1"
                style="height: 500px"
                autoresize
              />
            </div>
            <div
              class="wide-visualisation4"
              v-if="Object.keys(locOverTimeData[0]).length != 0"
            >
              <the-multi-line-chart :chartData="locOverTimeData[0]">
                <template v-slot:title>Lines of Code</template>
                <template v-slot:subtitle>over time</template>
              </the-multi-line-chart>
            </div>
            <div class="heat-map">
              <h3>Open Issues Heat Map</h3>
              <h6>By Weeks</h6>
              <v-chart v-bind:option="heatMap1" style="height: 380px" autoresize/>
            </div>
            <div class="node-link">
              <h3>Node Link Diagram</h3>
              <h6>By License Type</h6>
              <div class="node-link-container">
                <div style="width: auto; min-width: 1100px">
                  <v-chart v-bind:option="nodeLink1" style="height: 1100px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="repository" v-if="name2">
        <div class="rep-container">
          <h1>{{ repo2MetaData.owner }}/{{ repo2MetaData.name }}</h1>
          <h5>{{ repo2MetaData.description }}</h5>

          <div v-bind:class="{ 'meta-grid-round-single meta-grid-round': !name2, 'meta-grid-round-multi meta-grid-round': name2 }">
            <div class="meta-container">
                <div class="container-title">Tags</div>
                <div class = "tag-grid" id = "tags2">
                </div>
            </div>

            <the-vulnerabilities-card
                  v-if="Object.keys(repo2MetaData).length"
                  :open_issues_count="repo2MetaData.open_issues_count"
            ></the-vulnerabilities-card>
          </div>

          <div v-bind:class="{ 'meta-grid-single meta-grid': !name2, 'meta-grid-multi meta-grid': name2 }">
            <the-metadata-card
              v-if="Object.keys(repo2MetaData).length"
              :forks="repo2MetaData.forks"
              :stargazers="repo2MetaData.stargazers"
              :openIssues="repo2MetaData.open_issues"
              :defaultBranch="repo2MetaData.default_branch"
              :size="repo2MetaData.size"
              :topics="repo2MetaData.topics"
              :createdOn="repo2MetaData.created_at"
              :lastUpdatedOn="repo2MetaData.updated_at"
              :archived="repo2MetaData.archived"
              :disabled="repo2MetaData.disabled"
              :language="repo2MetaData.language"
              :num_tags="repo2MetaData.num_tags"
              :latest_tag="repo2MetaData.latest_tag"
              :subscriber_count="repo2MetaData.subscribers_count"
            ></the-metadata-card>
          </div>

          <div class="viz-grid multi-repo">
            <div
              class="simple-visualisation2"
              v-if="contributors[1].length != 0"
            >
              <the-contributor-pie-chart
                :pieData="contributors[1][0]"
                hoverHeading="Contributor"
              >
                <template v-slot:heading>Contributors</template>
                <template v-slot:subheading>all time</template>
              </the-contributor-pie-chart>
            </div>
            <div
              class="simple-visualisation1"
              v-if="contributors[1].length != 0"
            >
              <the-contributor-pie-chart
                :pieData="contributors[1][1]"
                hoverHeading="Contributor"
              >
                <template v-slot:heading>Contributors</template>
                <template v-slot:subheading>last 30 days</template>
              </the-contributor-pie-chart>
            </div>

            <div class="wide-visualisation1">
              <the-loc-line-chart
                :languageData="languageData[1]"
                :versions="versionData[1]"
                :colorData="locColorData[1]"
              >
                <template v-slot:title>Lines of Code by language</template>
                <template v-slot:subtitle>(over versions)</template>
              </the-loc-line-chart>
            </div>

            <div class="wide-visualisation2">
              <h3>Lines in files by type</h3>
              <h6>(over versions)</h6>
              <v-chart
                v-bind:option="locType2"
                style="height: 500px"
                autoresize
              />
            </div>

            <div class="wide-visualisation3">
              <h3>Dependencies, Issues & Sizes</h3>
              <h6>Bubble plot</h6>
              <v-chart
                v-bind:option="bubblePlot2"
                style="height: 500px"
                autoresize
              />
            </div>
            <div
              class="wide-visualisation4"
              v-if="Object.keys(locOverTimeData[1]).length != 0"
            >
              <the-multi-line-chart :chartData="locOverTimeData[1]">
                <template v-slot:title>Lines of Code</template>
                <template v-slot:subtitle>over time</template>
              </the-multi-line-chart>
            </div>
            <div class="heat-map">
              <h3>Open Issues Heat Map</h3>
              <h6>By Weeks</h6>
              <v-chart v-bind:option="heatMap2" style="height: 380px" autoresize/>
            </div>

            <div class="node-link">
              <h3>Node Link Diagram</h3>
              <h6>By License Type</h6>
              <div class="node-link-container">
                <div style="width: auto; min-width: 1100px">
                  <v-chart v-bind:option="nodeLink2" style="height: 1100px" />
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
@import "@/styles/components/_chart.scss";


.meta-container {
  background-color: rgba(38, 38, 38, 0.35);
  padding: 1%;
  padding-left: 2%;
  padding-right: 2%;
  margin-bottom: 1%;
  border-radius: var(--viz--radius); 
}
.container-title {
  padding: 1%;
  margin-top: 2px;
  font-size: 158%;
  font-weight: 800;
}

.tag-grid {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1%;
}

.page {
  background: #d4e7e2;
  color: white;
}

.repository {
  padding: 2%;
}

.rep-container {
  background-color: rgba(23, 158, 117, 0.7);
  padding: 2%;
  padding-top: 5px;
  border-radius: 25px;
  box-shadow: 5px 10px 18px #888888;
}

.viz-grid {
  display: grid;
  font-size: 138%;
  grid-template-rows: repeat(1fr);
  grid-gap: 1rem;
  grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr);
  grid-auto-flow: row;
}

.single-repo {
  grid-template-areas:
    "simple-visualisation1 simple-visualisation2"
    "wide-visualisation1 wide-visualisation2"
    "wide-visualisation3 wide-visualisation4"
    "heat-map heat-map"
    "node-link node-link";
}

.multi-repo {
  grid-template-areas:
    "simple-visualisation1 simple-visualisation2"
    "wide-visualisation1 wide-visualisation1"
    "wide-visualisation2 wide-visualisation2"
    "wide-visualisation3 wide-visualisation3"
    "wide-visualisation4 wide-visualisation4"
    "heat-map heat-map"
    "node-link node-link";
}

.meta-grid-multi {
    grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr);
  }

.meta-grid-single {
  grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr) minmax(0%, 1fr);
}

.meta-grid-round-multi {
    grid-template-columns: minmax(0%, 1fr);
  }

.meta-grid-round-single {
  grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr);
}

.meta-grid {
  display: grid;
  grid-template-rows: repeat(1fr);
  grid-gap: 0.5rem;
  grid-auto-flow: row;
  padding: 2%;
  background-color: rgba(38, 38, 38, 0.35);
  border-radius: var(--viz--radius);
  margin-bottom: 3%;
}

.meta-grid-round {
  display: grid;
  grid-template-rows: repeat(1fr);
  grid-gap: 0.5rem;
  grid-auto-flow: row;
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

.simple-visualisation1,
.simple-visualisation2,
.wide-visualisation1,
.wide-visualisation2,
.wide-visualisation3,
.wide-visualisation4,
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

.wide-visualisation4 {
  grid-area: wide-visualisation4;
}

.heat-map {
  grid-area: heat-map;
}

.node-link {
  grid-area: node-link;
  overflow-x: scroll;
  overflow-y: scroll;

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
  .meta-grid-single{
    grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr);
  }

  .meta-grid-multi {
    grid-template-columns: minmax(0%, 1fr);
  }

  .meta-grid-round-single {
    grid-template-columns: minmax(0%, 1fr);
  }

  h1,
  h2 {
    font-size: 285%
  }
}

@media only screen and (max-width: 1300px) {
  .health-model {
    display: grid;
    grid-template-rows: repeat(1fr);
    grid-gap: 1rem;
    grid-template-columns: minmax(0%, auto);
    grid-auto-flow: row;
    grid-template-rows: repeat(1fr);
  }
}
</style>

<script>
// imports for json visualisations containing all the design elements representing the channel of visualisations
import locByType from "@/visualisations/LinesOfCodeByType.json";
import depBubbleChart from "@/visualisations/DependencyIssuesSizeBubbleChart.json";
import nodeLink from "@/visualisations/NodeLinkDiagram.json";
import heatMap from "@/visualisations/HeatMapDiagram.json";

// imports for series sub objects for different visualisations representing the mark of visualisations
import bubbleChartSeriesObj from "@/visualisations/SeriesSubObjBubbleChart.json";
import horizontalBarSeriesObj from "@/visualisations/SeriesSubObjHorizontalBar.json";
import nodeLinkSeriesObj from "@/visualisations/SeriesSubObjNodeLink.json";
import heatMapSeriesObj from "@/visualisations/SeriesSubObjHeatMap.json";

import axios from "axios";
import VChart from "vue-echarts";

import TheMetadataCard from "@/components/TheMetadataCard";
// import TheTagsCard from "@/components/TheTagsCard";
import TheVulnerabilitiesCard from "@/components/TheVulnerabilitiesCard";
import TheContributorPieChart from "@/components/TheContributorPieChart";
import TheLocLineChart from "@/components/TheLocLineChart";
import TheMultiLineChart from "@/components/TheMultiLineChart";

export default {
  name: "MultipleRepository",
  props: {
    name1: { type: String, required: true },
    name2: { type: String, default: null },
    owner1: { type: String, required: true },
    owner2: { type: String, default: null },
  },
  components: {
    VChart,
    TheMetadataCard,
    TheContributorPieChart,
    TheLocLineChart,
    TheMultiLineChart,
    TheVulnerabilitiesCard,
    // TheTagsCard,
  },
  data() {
    return {
      repo1MetaData: {},
      repo2MetaData: {},
      repo1Stats: {},
      repo2Stats: {},
      locType1: {},
      locType2: {},
      bubblePlot1: {},
      bubblePlot2: {},
      heatMap1: {},
      heatMap2: {},
      nodeLink1: {},
      nodeLink2: {},
      contributors: [[], []],
      versionData: [],
      languageData: [],
      locColorData: [],
      locOverTimeData: {
        0: {},
        1: {},
      },
    };
  },
  async created() {
    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/techstack/{name_owner}?name=${this.name1}&owner=${this.owner1}`
      );
      this.repo1MetaData = response.data.data[0];
      this.addTags(this.repo1MetaData, "tags1")
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/release/{name_owner}?name=${this.name1}&owner=${this.owner1}`
      );
      this.repo1Stats.loc = response.data.data[0];
      this.parseLocOverTimeData(1, "LocOverTime");
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712"
      );
      this.repo1Stats.dep = response.data.data;
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
         process.env.VUE_APP_API_URL +
          `/techstack/heatmap/{name_owner}?name=${this.name1}&owner=${this.owner1}`  
      );
      this.repo1Stats.heatmap_data = response.data.data;
      console.log(this.repo1Stats.heatmap_data = response.data.data[0].heatmap_data)
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/c820af62-b4ef-4840-915f-bab4b82dd751"
      );
      this.repo1Stats.nodeLink = response.data;
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/techstack/contribution/{name_owner}?name=${this.name1}&owner=${this.owner1}`
      );
      this.parseContributorData(
        response.data.data[0].commits_per_author,
        1,
        "last_30_days"
      );
      this.parseContributorData(
        response.data.data[0].commits_per_author,
        1,
        "all_time"
      );
    } catch (e) {
      console.log(e);
    }

    this.processData(1);

    if (this.name2) {
      try {
        const response = await axios.get(
          process.env.VUE_APP_API_URL +
            `/techstack/{name_owner}?name=${this.name2}&owner=${this.owner2}`
        );
        this.repo2MetaData = response.data.data[0];
        this.addTags(this.repo2MetaData, "tags2")
      } catch (e) {
        console.log(e);
      }

      try {
        const response = await axios.get(
          process.env.VUE_APP_API_URL +
            `/release/{name_owner}?name=${this.name2}&owner=${this.owner2}`
        );
        this.repo2Stats.loc = response.data.data[0];
        this.parseLocOverTimeData(2, "LocOverTime");
      } catch (e) {
        console.log(e);
      }

      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712"
        );
        this.repo2Stats.dep = response.data.data;
      } catch (e) {
        console.log(e);
      }

      try {
      const response = await axios.get(
         process.env.VUE_APP_API_URL +
          `/techstack/heatmap/{name_owner}?name=${this.name2}&owner=${this.owner2}`  
      );
        this.repo2Stats.heatmap_data = response.data.data[0].heatmap_data;
      } catch (e) {
      console.log(e);
      }

      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/ad3b2bfc-c81d-4d1f-a88d-8c3477b8ceda"
        );
        this.repo2Stats.nodeLink = response.data;
      } catch (e) {
        console.log(e);
      }

      try {
        const response = await axios.get(
          process.env.VUE_APP_API_URL +
            `/techstack/contribution/{name_owner}?name=${this.name2}&owner=${this.owner2}`
        );

        this.parseContributorData(
          response.data.data[0].commits_per_author,
          2,
          "last_30_days"
        );
        this.parseContributorData(
          response.data.data[0].commits_per_author,
          2,
          "all_time"
        );
      } catch (e) {
        console.log(e);
      }
      this.processData(2);
      this.balanceHeight();
    } 
  },
  methods: {
    addTags(metaData, tagName){
        metaData.topics.forEach((item) => {
            let tagDiv = document.createElement("div");
            tagDiv.innerText = item;
            tagDiv.style.backgroundColor = metaData.topic_colours[item];
            tagDiv.style.display = "flex";
            tagDiv.style.fontWeight = 800;
            tagDiv.style.fontSize = "100%";
            tagDiv.style.padding = "5px 8px";
            tagDiv.style.margin = "3px";
            tagDiv.style.borderRadius = "18px";
            tagDiv.style.alignItems = "center";
            tagDiv.style.justifyContent = "center";
            document.getElementById(tagName).append(tagDiv);
      })
    },
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
    balanceHeight(){
      let lengthDifference = this.repo1MetaData.description.length - this.repo2MetaData.description.length
      let paddingString = "ㅤ"
      if(lengthDifference > 0) {
        this.repo2MetaData.description = this.repo2MetaData.description + paddingString.repeat(lengthDifference)
      } else if (lengthDifference < 0){
        this.repo1MetaData.description = this.repo1MetaData.description + paddingString.repeat(Math.abs(lengthDifference))
      }
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
        seriesSubObjCopy.data = [value];
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
      let locByTypeCopy = JSON.parse(JSON.stringify(locByType));
      let depBubbleChartCopy = JSON.parse(JSON.stringify(depBubbleChart));
      let nodeLinkCopy1 = JSON.parse(JSON.stringify(nodeLink));
      let nodeLinkCopy2 = JSON.parse(JSON.stringify(nodeLink));
      let heatMapCopy = JSON.parse(JSON.stringify(heatMap));

      let statsData = new Map();
      let heatMapData = new Map();

      let extractedDepData = this.extractDepData(repoNumber);
      let extractedData = this.extractData(repoNumber);
      let extractedHeatMapData = this.extractHeatMapData(repoNumber);

      this.versionData.push(extractedData[0]);
      this.languageData.push(extractedData[1]);
      statsData = extractedData[2];

      heatMapData = extractedHeatMapData[0];
      heatMapCopy.visualMap.min = extractedHeatMapData[1];
      heatMapCopy.visualMap.max = extractedHeatMapData[2];

      let depRepos = extractedDepData.map((repoArray) => {
        return repoArray[3];
      });

      this.locColorData.push(
        this.getColor(this.languageData[repoNumber - 1].size)
      );

      locByTypeCopy.yAxis[0].data = this.versionData[repoNumber - 1];

      heatMapCopy.xAxis.data = extractedHeatMapData[3];

      depBubbleChartCopy.color = this.getColor(depRepos.length);
      depBubbleChartCopy.legend.data = depRepos;

      // locByTypeCopy.legend.data = Array.from(statsData.keys()); // rm legend

      this.setSeriesSubObject(locByTypeCopy, statsData, horizontalBarSeriesObj);
      this.setSeriesBubbleChart(
        depBubbleChartCopy,
        extractedDepData,
        depBubbleChartCopy.color
      );
      this.setSeriesHeatMap(heatMapCopy, heatMapData, heatMapSeriesObj);

      if (repoNumber == 1) {
        this.initializeNodeLink(nodeLinkCopy1, this.repo1Stats.nodeLink);
        this.locType1 = locByTypeCopy;
        this.bubblePlot1 = depBubbleChartCopy;
        this.nodeLink1 = nodeLinkCopy1;
        this.heatMap1 = heatMapCopy;
      } else if (repoNumber == 2) {
        this.initializeNodeLink(nodeLinkCopy2, this.repo2Stats.nodeLink);
        this.locType2 = locByTypeCopy;
        this.bubblePlot2 = depBubbleChartCopy;
        this.nodeLink2 = nodeLinkCopy2;
        this.heatMap2 = heatMapCopy;
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
    extractDepData(repoNumber) {
      let jsonObj;
      let extractedDepData = []; // [[xAxis: repo_size, yAxis: Dep_count, Size: Issue_count, Color: Name]]

      if (repoNumber == 1) {
        jsonObj = this.repo1Stats.dep;
      } else if (repoNumber == 2) {
        jsonObj = this.repo2Stats.dep;
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
    extractHeatMapData(repoNumber) {
      let jsonResponse;
      let extractedHeatMapData = new Map(); // [Week: [X,Y,VAL]]
      let maxVal = 0,
        minVal = Infinity;
      let xAxis = []; // 19 cols
      let weekCount = 0;

      if (repoNumber == 1) {
        jsonResponse = this.repo1Stats.heatmap_data;
      } else if (repoNumber == 2) {
        jsonResponse = this.repo2Stats.heatmap_data;
      }

      for (let week in jsonResponse) {
        let weekObj = jsonResponse[week];
        let weekData = [];
        weekCount += 1;

        weekData.push(weekObj.coords.x);
        weekData.push(weekObj.coords.y);
        weekData.push(weekObj.issues.open);

        if (weekObj.start.substring(5, 7) === "01") {
          if (xAxis.length < Math.floor(weekCount / 8)) {
            xAxis.push(weekObj.start.substring(0, 4));
          } else {
            xAxis[Math.floor(weekCount / 8) - 1] = weekObj.start.substring(
              0,
              4
            );
          }
        }

        if (weekData[2] > maxVal) {
          maxVal = weekData[2]; // max range for color palette and accurate colour interpolation
        }

        if (weekData[2] < minVal) {
          minVal = weekData[2]; // max range for color palette and accurate colour interpolation
        }

        if (weekCount % 8 == 0) {
          if (xAxis.length < weekCount / 8) {
            xAxis.push("");
          }
        }

        extractedHeatMapData.set(weekObj.week, weekData);
      }
      return [extractedHeatMapData, minVal, maxVal, xAxis];
    },
    initializeNodeLink(nodeLink, data) {
      let nodeLinkSubObj = JSON.parse(JSON.stringify(nodeLinkSeriesObj));
      nodeLinkSubObj.categories = data.categories;
      nodeLinkSubObj.nodes = data.nodes;
      nodeLinkSubObj.links = data.links;
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
        jsonObj = this.repo1Stats.loc;
      } else if (repoNumber == 2) {
        jsonObj = this.repo2Stats.loc;
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
    parseContributorData(data, repoNumber, type) {
      this.contributors[repoNumber - 1].push(
        Object.keys(data[type].top_25)
          .map((key) => ({
            name: data[type].top_25[key].name,
            value: data[type].top_25[key][type],
          }))
          .filter((item) => {
            if (item.value != 0) {
              return item;
            }
          })
      );
      // console.log(this.contributors[0][1]);
      return;
    },
    parseLocOverTimeData(repoNumber, dataType) {
      var statsRepos = ["repo1Stats", "repo2Stats"];

      // If there is no 'SUM' key in the lines of code data
      if (!("SUM" in this[statsRepos[repoNumber - 1]].loc[0].LOC)) {
        return;
      }

      // Add a new object
      this.locOverTimeData[repoNumber - 1][dataType] = {
        xData: [],
        yData: [],
      };

      var commit = this[statsRepos[repoNumber - 1]].loc;

      Object.keys(commit).forEach((commitKey) => {
        var date = commit[commitKey].committed_date;
        var loc = 0;

        Object.keys(commit[commitKey].LOC["SUM"]).forEach((lineKey) => {
          if (lineKey != "nFiles") {
            loc += commit[commitKey].LOC["SUM"][lineKey];
          }
        });

        this.locOverTimeData[repoNumber - 1][dataType].xData.push(date);
        this.locOverTimeData[repoNumber - 1][dataType].yData.push(loc);
      });
    },
  },
};

// bubble chart: https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712
// bubble chart delete: https://designer.mocky.io/manage/delete/4f9a9846-1152-4d3a-97be-3620c6a11712/7Z3ZyMjTlAAFvcCRGcb4UnZAXSgU60okB7hF
</script>