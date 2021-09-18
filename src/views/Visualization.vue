<template>
  <div class="page">
    <div v-bind:class="{ 'health-model': name2 }">
      <div class="repository">
        <div class="rep-container">
          <h1>{{ repo1MetaData.owner }}/{{ repo1MetaData.name }}</h1>
          <h5>{{ repo1MetaData.description }}</h5>

          <div class="meta-grid">
            <the-metadata-card
              v-if="Object.keys(repo1MetaData).length"
              :forks="repo1MetaData.forks"
              :stargazers="repo1MetaData.stargazers"
              :openIssues="repo1MetaData.open_issues"
              :defaultBranch="repo1MetaData.default_branch"
              :size="repo1MetaData.size"
              :topics="repo1MetaData.topics"
              :createdOn="repo1MetaData.created_at"
              :lastUpdatedOn="repo1MetaData.updated_at"
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
              <h3>Dependencies, Issues & Sizes Comparison</h3>
              <h6>Bubble plot</h6>
              <v-chart
                v-bind:option="bubblePlot1"
                style="height: 500px"
                autoresize
              />
            </div>
          </div>
        </div>
      </div>

      <div class="repository" v-if="name2">
        <div class="rep-container">
          <h1>{{ repo2MetaData.owner }}/{{ repo2MetaData.name }}</h1>
          <h5>{{ repo2MetaData.description }}</h5>

          <div class="meta-grid">
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
              <h3>Dependencies, Issues & Sizes Comparison</h3>
              <h6>Bubble plot</h6>
              <v-chart
                v-bind:option="bubblePlot2"
                style="height: 500px"
                autoresize
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/components/_chart.scss";

.page {
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
    "wide-visualisation3 wide-visualisation3";
}

.multi-repo {
  grid-template-areas:
    "simple-visualisation1 simple-visualisation2"
    "wide-visualisation1 wide-visualisation1"
    "wide-visualisation2 wide-visualisation2"
    "wide-visualisation3 wide-visualisation3";
}

.meta-grid {
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
      "wide-visualisation3";
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
.wide-visualisation3 {
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
</style>

<script>
import locByType from "@/visualisations/LinesOfCodeByType.json";
import depBubbleChart from "@/visualisations/DependencyIssuesSizeBubbleChart.json";
import seriesObj from "@/visualisations/SeriesSubObjLangLOC.json";
import bubbleChartSeriesObj from "@/visualisations/SeriesSubObjBubbleChart.json";

import axios from "axios";
import VChart from "vue-echarts";

import TheMetadataCard from "@/components/TheMetadataCard";
import TheContributorPieChart from "@/components/TheContributorPieChart";
import TheLocLineChart from "@/components/TheLocLineChart";

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
  },
  data() {
    return {
      repo1MetaData: {},
      repo2MetaData: {},
      repo1stats: {},
      repo2stats: {},
      locLang1: {},
      locLang2: {},
      locType1: {},
      locType2: {},
      bubblePlot1: {},
      bubblePlot2: {},
      contributors: [[], []],
      versionData: [],
      languageData: [],
      locColorData: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/techstack/{name_owner}?name=${this.name1}&owner=${this.owner1}`
      );
      this.repo1MetaData = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        process.env.VUE_APP_API_URL +
          `/release/{name_owner}?name=${this.name1}&owner=${this.owner1}`
      );
      this.repo1stats.loc = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712"
      );
      this.repo1stats.dep = response.data.data;
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
      } catch (e) {
        console.log(e);
      }

      try {
        const response = await axios.get(
          process.env.VUE_APP_API_URL +
            `/release/{name_owner}?name=${this.name2}&owner=${this.owner2}`
        );
        this.repo2stats.loc = response.data.data[0];
      } catch (e) {
        console.log(e);
      }

      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712"
        );
        this.repo2stats.dep = response.data.data;
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
    }
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
    setSeriesSubObject(chart, map) {
      map.forEach((value, key) => {
        let seriesSubObjCopy = JSON.parse(JSON.stringify(seriesObj));
        seriesSubObjCopy.name = key;
        seriesSubObjCopy.areaStyle.color = value.color;
        seriesSubObjCopy.data = value.data;
        if (key === "blank" || key === "comment") {
          seriesSubObjCopy.areaStyle.opacity = 0.5;
        }
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

      let statsData = new Map();

      let extractedDepData = this.extractDepData(repoNumber);
      let extractedData = this.extractData(repoNumber);

      this.versionData.push(extractedData[0]);
      this.languageData.push(extractedData[1]);
      statsData = extractedData[2];

      let depRepos = extractedDepData.map((repoArray) => {
        return repoArray[3];
      });

      this.locColorData.push(
        this.getColor(this.languageData[repoNumber - 1].size)
      );

      locByTypeCopy.xAxis[0].data = this.versionData[repoNumber - 1];

      depBubbleChartCopy.color = this.getColor(depRepos.length);
      depBubbleChartCopy.legend.data = depRepos;

      locByTypeCopy.legend.data = Array.from(statsData.keys()); // rm legend

      this.setSeriesSubObject(locByTypeCopy, statsData);
      this.setSeriesBubbleChart(
        depBubbleChartCopy,
        extractedDepData,
        depBubbleChartCopy.color
      );

      if (repoNumber == 1) {
        this.locType1 = locByTypeCopy;
        this.bubblePlot1 = depBubbleChartCopy;
      } else if (repoNumber == 2) {
        this.locType2 = locByTypeCopy;
        this.bubblePlot2 = depBubbleChartCopy;
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
        jsonObj = this.repo1stats.dep;
      } else if (repoNumber == 2) {
        jsonObj = this.repo2stats.dep;
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
    extractData(repoNumber) {
      let jsonObj;
      let versions = [];
      const languageData = new Map();
      const statsData = new Map();

      statsData.set("code", { data: [], color: "#1ceca8" });
      statsData.set("comment", { data: [], color: "#1ceca8" });
      statsData.set("blank", { data: [], color: "#8ce3cc" });

      if (repoNumber == 1) {
        jsonObj = this.repo1stats.loc;
      } else if (repoNumber == 2) {
        jsonObj = this.repo2stats.loc;
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
            let normalisedValue = Math.round((langObj.code / 1) * 1);
            if (languageData.has(langKey)) {
              let tempValue = languageData.get(langKey);
              tempValue.data.push(normalisedValue);
              languageData.set(langKey, tempValue);
            } else {
              languageData.set(langKey, { data: [normalisedValue] });
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
  },
};

// bubble chart: https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712
// bubble chart delete: https://designer.mocky.io/manage/delete/4f9a9846-1152-4d3a-97be-3620c6a11712/7Z3ZyMjTlAAFvcCRGcb4UnZAXSgU60okB7hF
</script>
