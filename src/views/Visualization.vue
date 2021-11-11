<template>
  <div class="page">
    <div v-bind:class="{ 'health-model': name2 }">
      <div class="repository">
        <div class="rep-container">
          <h1>{{ repo1MetaData.owner }}/{{ repo1MetaData.name }}</h1>
          <h5>{{ repo1MetaData.description }}</h5>

          <div
            v-bind:class="{
              'meta-grid-round-single meta-grid-round': !name2,
              'meta-grid-round-multi meta-grid-round': name2,
            }"
          >
            <div class="meta-container tag-container">
              <div class="container-title">Tags</div>
              <div class="tag-grid" id="tags1">
                <div
                  class="tag"
                  v-for="(value, index) in repo1MetaData.topics"
                  :key="index"
                  v-bind:style="{
                    backgroundColor: repo1MetaData.topic_colours[value],
                  }"
                >
                  {{ value }}
                </div>
              </div>
            </div>

            <the-vulnerabilities-card
              v-if="Object.keys(repo1MetaData).length"
              :open_issues_count="repo1MetaData.open_issues_count"
              :vulnerability_breakdown="
                repo1MetaData.vulnerability_breakdown || {}
              "
            ></the-vulnerabilities-card>
          </div>

          <div
            v-bind:class="{
              'meta-grid-single meta-grid': !name2,
              'meta-grid-multi meta-grid': name2,
            }"
          >
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
              :vulnerability_breakdown="repo1MetaData.vulnerability_breakdown"
              :license_type="repo1MetaData.license.name"
            ></the-metadata-card>
          </div>

          <div
            class="viz-grid"
            v-bind:class="{ 'single-repo': !name2, 'multi-repo': name2 }"
          >
            <div class="simple-visualisation1" id="contributors-30-days">
              <h3>Top Contributors</h3>
              <h6>(last 30 days)</h6>
              <the-contributor-pie-chart
                v-if="contributors[0] != null"
                :pieData="contributors[0][0]"
                :isLoading="contributorsLoading[0]"
                hoverHeading="Commits"
              >
              </the-contributor-pie-chart>
              <el-empty
                v-else
                description="No data"
                style="height: 300px"
              ></el-empty>
            </div>
            <div class="simple-visualisation2" id="contributors-all-time">
              <h3>Top Contributors</h3>
              <h6>(all time)</h6>
              <the-contributor-pie-chart
                v-if="contributors[0] != null"
                :pieData="contributors[0][1]"
                :isLoading="contributorsLoading[0]"
                hoverHeading="Commits"
              >
              </the-contributor-pie-chart>
              <el-empty
                v-else
                description="No data"
                style="height: 300px"
              ></el-empty>
            </div>
            <div class="wide-visualisation1" id="loc-by-language">
              <h3>Lines of Code by language</h3>
              <h6>(over versions)</h6>
              <v-chart
                v-if="repo1Stats.loc != null"
                v-bind:option="locByLang1"
                style="height: 500px"
                :loading="locByLang1Loading"
                autoresize
              />
              <el-empty
                v-else
                description="No data"
                style="height: 500px"
              ></el-empty>
            </div>

            <div class="wide-visualisation2" id="loc-by-type">
              <h3>Lines in files by type</h3>
              <h6>(over versions)</h6>
              <v-chart
                v-if="repo1Stats.loc != null"
                v-bind:option="locType1"
                style="height: 500px"
                :loading="locType1Loading"
                autoresize
              />
              <el-empty
                v-else
                description="No data"
                style="height: 500px"
              ></el-empty>
            </div>

            <div
              class="wide-visualisation3"
              id="dependencies-issues-sizes-bubble-plot"
            >
              <h3>Dependencies, Issues & Sizes</h3>
              <h6>Bubble plot</h6>
              <v-chart
                v-if="repo1Stats.dep"
                v-bind:option="bubblePlot1"
                style="height: 500px"
                :loading="bubblePlot1Loading"
                autoresize
              />
              <el-empty
                v-else
                description="No data"
                style="height: 500px"
              ></el-empty>
            </div>
            <div
              class="wide-visualisation4"
              id="loc-over-time"
              v-if="Object.keys(overTimeData[0]).length != 0"
            >
              <the-multi-line-chart
                v-if="overTimeData[0] != null"
                :chartData="overTimeData[0]"
                :isLoading="overTimeDataLoading[0]"
              >
              </the-multi-line-chart>
              <el-empty
                v-else
                description="No data"
                style="height: 500px"
              ></el-empty>
            </div>
            <div class="heat-map" id="issues-heatmap">
              <h3>Open Issues Heat Map</h3>
              <h6>By Weeks</h6>
              <v-chart
                v-if="repo1Stats.heatmap_data != null"
                v-bind:option="heatMap1"
                style="height: 380px"
                :loading="heatMap1Loading"
                autoresize
              />
              <el-empty
                v-else
                description="No data"
                style="height: 380px"
              ></el-empty>
            </div>
            <div class="node-link" id="node-link">
              <h3>Dependency Node Link Diagram</h3>
              <h6>By License Type</h6>
              <div class="node-link-container">
                <div style="width: auto; min-width: 1100px">
                  <v-chart
                    v-if="repo1Stats.nodeLink != null"
                    v-bind:option="nodeLink1"
                    style="height: 1100px"
                    :loading="nodeLink1Loading"
                    autoresize
                  />
                  <el-empty
                    v-else
                    description="No data"
                    style="height: 1100px"
                  ></el-empty>
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

          <div
            v-bind:class="{
              'meta-grid-round-single meta-grid-round': !name2,
              'meta-grid-round-multi meta-grid-round': name2,
            }"
          >
            <div class="meta-container tag-container">
              <div class="container-title">Tags</div>
              <div class="tag-grid" id="tags2">
                <div
                  class="tag"
                  v-for="(value, index) in repo2MetaData.topics"
                  :key="index"
                  v-bind:style="{
                    backgroundColor: repo2MetaData.topic_colours[value],
                  }"
                >
                  {{ value }}
                </div>
              </div>
            </div>

            <the-vulnerabilities-card
              v-if="Object.keys(repo2MetaData).length"
              :open_issues_count="repo2MetaData.open_issues_count"
              :vulnerability_breakdown="
                repo2MetaData.vulnerability_breakdown || {}
              "
            ></the-vulnerabilities-card>
          </div>

          <div
            v-bind:class="{
              'meta-grid-single meta-grid': !name2,
              'meta-grid-multi meta-grid': name2,
            }"
          >
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
              :license_type="repo2MetaData.license.name"
            ></the-metadata-card>
          </div>

          <div class="viz-grid multi-repo">
            <div class="simple-visualisation2">
              <h3>Top Contributors</h3>
              <h6>(all time)</h6>
              <the-contributor-pie-chart
                v-if="contributors[1] != null"
                :pieData="contributors[1][1]"
                :isLoading="contributorsLoading[1]"
                hoverHeading="Commits"
              >
              </the-contributor-pie-chart>
              <el-empty
                v-else
                description="No data"
                style="height: 300px"
              ></el-empty>
            </div>
            <div class="simple-visualisation1">
              <h3>Top Contributors</h3>
              <h6>(last 30 days)</h6>
              <the-contributor-pie-chart
                v-if="contributors[1] != null"
                :pieData="contributors[1][0]"
                :isLoading="contributorsLoading[1]"
                hoverHeading="Commits"
              >
              </the-contributor-pie-chart>
              <el-empty
                v-else
                description="No data"
                style="height: 300px"
              ></el-empty>
            </div>

            <div class="wide-visualisation1">
              <h3>Lines of Code by language</h3>
              <h6>(over versions)</h6>
              <v-chart
                v-if="repo2Stats.loc != null"
                v-bind:option="locByLang2"
                style="height: 500px"
                :loading="locByLang2Loading"
                autoresize
              />
              <el-empty
                v-else
                description="No data"
                style="height: 500px"
              ></el-empty>
            </div>

            <div class="wide-visualisation2">
              <h3>Lines in files by type</h3>
              <h6>(over versions)</h6>
              <v-chart
                v-if="repo2Stats.loc != null"
                v-bind:option="locType2"
                style="height: 500px"
                :loading="locType2Loading"
                autoresize
              />
              <el-empty
                v-else
                description="No data"
                style="height: 500px"
              ></el-empty>
            </div>

            <div class="wide-visualisation3">
              <h3>Dependencies, Issues & Sizes</h3>
              <h6>Bubble plot</h6>
              <v-chart
                v-if="repo2Stats.dep"
                v-bind:option="bubblePlot2"
                style="height: 500px"
                :loading="bubblePlot2Loading"
                autoresize
              />
              <el-empty
                v-else
                description="No data"
                style="height: 500px"
              ></el-empty>
            </div>
            <div
              class="wide-visualisation4"
              v-if="Object.keys(overTimeData[1]).length != 0"
            >
              <the-multi-line-chart
                v-if="overTimeData[1] != null"
                :chartData="overTimeData[1]"
                :isLoading="overTimeDataLoading[1]"
              >
              </the-multi-line-chart>
              <el-empty
                v-else
                description="No data"
                style="height: 500px"
              ></el-empty>
            </div>
            <div class="heat-map">
              <h3>Open Issues Heat Map</h3>
              <h6>By Weeks</h6>
              <v-chart
                v-if="repo2Stats.heatmap_data != null"
                v-bind:option="heatMap2"
                style="height: 380px"
                :loading="heatMap2Loading"
                autoresize
              />
              <el-empty
                v-else
                description="No data"
                style="height: 380px"
              ></el-empty>
            </div>

            <div class="node-link">
              <h3>Dependency Node Link Diagram</h3>
              <h6>By License Type</h6>
              <div class="node-link-container">
                <div style="width: auto; min-width: 1100px">
                  <v-chart
                    v-if="repo2Stats.nodeLink != null"
                    v-bind:option="nodeLink2"
                    style="height: 1100px"
                    :loading="nodeLink2Loading"
                    autoresize
                  />
                  <el-empty
                    v-else
                    description="No data"
                    style="height: 1100px"
                  ></el-empty>
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

.tag-container:hover {
  max-height: 100%;
  overflow: visible;
}

.tag-container {
  max-height: 85px;
  overflow: hidden;
}

.tag-grid {
  display: flex;
  margin-bottom: 1%;
  overflow: hidden;
  flex-wrap: wrap;
}

.tag {
  display: flex;
  font-weight: 800;
  padding: 5px 8px;
  margin: 3px;
  margin-bottom: 8px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
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

  //white-space:nowrap;
}

.node-link-container {
  height: 800px;

  overflow-x: scroll;
  overflow-y: scroll;
  //display:inline-block;
}

.info-item {
  display: flex;
  font-weight: 500;
  font-size: 130%;
  padding: 5px;
  margin: 1%;
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
      "wide-visualisation4"
      "heat-map"
      "node-link";
  }
  .meta-grid-single {
    grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr);
  }

  .meta-grid-multi {
    grid-template-columns: minmax(0%, 1fr);
  }

  .meta-grid-round-single {
    grid-template-columns: minmax(0%, 1fr);
  }

  .meta-grid-round-multi {
    grid-template-columns: minmax(0%, 1fr);
  }

  h1,
  h2 {
    font-size: 285%;
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

  .meta-grid-round-multi {
    grid-template-columns: minmax(0%, 1fr) minmax(0%, 1fr);
  }
}

h5 {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

h5:hover {
  overflow: visible;
  white-space: initial;
}
</style>

<script>
// importing necessary libraries
import axios from "axios";
import VChart from "vue-echarts";

// importing visualisation components
import TheMetadataCard from "@/components/TheMetadataCard";
import TheVulnerabilitiesCard from "@/components/TheVulnerabilitiesCard";
import TheContributorPieChart from "@/components/TheContributorPieChart";
import TheMultiLineChart from "@/components/TheMultiLineChart";

// imports for json visualisations containing all the design elements representing the channel of visualisations
import locByLang from "@/visualisations/LinesOfCodeByLanguage.json";
import locByType from "@/visualisations/LinesOfCodeByType.json";
import depBubbleChart from "@/visualisations/DependencyIssuesSizeBubbleChart.json";
import nodeLink from "@/visualisations/NodeLinkDiagram.json";
import heatMap from "@/visualisations/HeatMapDiagram.json";

// imports for series sub objects for different visualisations representing the mark of visualisations
import locByLangSeriesObj from "@/visualisations/SeriesSubObjLangLOC.json";
import bubbleChartSeriesObj from "@/visualisations/SeriesSubObjBubbleChart.json";
import horizontalBarSeriesObj from "@/visualisations/SeriesSubObjHorizontalBar.json";
import nodeLinkSeriesObj from "@/visualisations/SeriesSubObjNodeLink.json";
import heatMapSeriesObj from "@/visualisations/SeriesSubObjHeatMap.json";

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
    TheMultiLineChart,
    TheVulnerabilitiesCard,
    // TheTagsCard,
  },
  data() {
    return {
      repo1MetaData: {},
      repo2MetaData: {},
      repo1Stats: { loc: {}, nodeLink: {}, dep: {}, heatMap: {} },
      repo2Stats: { loc: {}, nodeLink: {}, dep: {}, heatMap: {} },
      locType1: {},
      locType1Loading: true,
      locType2: {},
      locType2Loading: true,
      locByLang1: {},
      locByLang1Loading: true,
      locByLang2: {},
      locByLang2Loading: true,
      bubblePlot1: {},
      bubblePlot1Loading: true,
      bubblePlot2: {},
      bubblePlot2Loading: true,
      heatMap1: {},
      heatMap1Loading: true,
      heatMap2: {},
      heatMap2Loading: true,
      nodeLink1: {},
      nodeLink1Loading: true,
      nodeLink2: {},
      nodeLink2Loading: true,
      contributors: [[], []],
      contributorsLoading: [true, true],
      versionData: [],
      languageData: [],
      overTimeData: {
        0: {},
        1: {},
      },
      overTimeDataLoading: [true, true],
    };
  },
  async created() {
    await axios
      .get(
        process.env.VUE_APP_API_URL +
          `/techstack/{name_owner}?name=${this.name1}&owner=${this.owner1}`
      )
      .then((res) => {
        this.repo1MetaData = res.data.data[0];
      })
      .catch((e) => {
        console.log(e);
      });

    if (this.name2) {
      await axios
        .get(
          process.env.VUE_APP_API_URL +
            `/techstack/{name_owner}?name=${this.name2}&owner=${this.owner2}`
        )
        .then((res) => {
          this.repo2MetaData = res.data.data[0];
        })
        .catch((e) => {
          console.log(e);
        });
    }

    await axios
      .get(
        process.env.VUE_APP_API_URL +
          `/release/{name_owner}?name=${this.name1}&owner=${this.owner1}`
      )
      .then((res) => {
        this.repo1Stats.loc = res.data.data[0];
        this.parseLocOverTimeData(1);
      })
      .catch((e) => {
        console.log(e);
        this.repo1Stats.loc = null;
      });

    await axios
      .get(
        process.env.VUE_APP_API_URL +
          `/techstack/similar/{name_owner}?name=${this.name1}&owner=${this.owner1}`
      )
      .then((res) => {
        this.repo1Stats.dep = res.data.data[0];
      })
      .catch((e) => {
        console.log(e);
        this.repo1Stats.dep = null;
      });

    await axios
      .get(
        process.env.VUE_APP_API_URL +
          `/techstack/heatmap/{name_owner}?name=${this.name1}&owner=${this.owner1}`
      )
      .then((res) => {
        this.repo1Stats.heatmap_data = res.data.data[0].heatmap_data;
        this.parseCommitsOverTimeData(1);
      })
      .catch((e) => {
        console.log(e);
        this.repo1Stats.heatmap_data = null;
      });

    await axios
      .get(
        process.env.VUE_APP_API_URL +
          `/techstack/nodelink_data?name=${this.name1}&owner=${this.owner1}`
      )
      .then((res) => {
        this.repo1Stats.nodeLink = res.data.data[0].nodelink_data;
      })
      .catch((e) => {
        console.log(e);
        this.repo1Stats.nodeLink = null;
      });

    await axios
      .get(
        process.env.VUE_APP_API_URL +
          `/techstack/contribution/{name_owner}?name=${this.name1}&owner=${this.owner1}`
      )
      .then((res) => {
        this.parseContributorData(
          res.data.data[0].commits_per_author,
          1,
          "last_30_days"
        );
        this.parseContributorData(
          res.data.data[0].commits_per_author,
          1,
          "all_time"
        );
      })
      .catch((e) => {
        console.log(e);
        this.contributors[0][0] = null;
        this.contributors[0][1] = null;
      });

    this.processData(1);

    if (this.name2) {
      await axios
        .get(
          process.env.VUE_APP_API_URL +
            `/release/{name_owner}?name=${this.name2}&owner=${this.owner2}`
        )
        .then((res) => {
          this.repo2Stats.loc = res.data.data[0];
          this.parseLocOverTimeData(2);
        })
        .catch((e) => {
          console.log(e);
          this.repo2Stats.loc = null;
        });

      await axios
        .get(
          process.env.VUE_APP_API_URL +
            `/techstack/similar/{name_owner}?name=${this.name2}&owner=${this.owner2}`
        )
        .then((res) => {
          this.repo2Stats.dep = res.data.data[0];
        })
        .catch((e) => {
          console.log(e);
          this.repo2Stats.dep = null;
        });

      await axios
        .get(
          process.env.VUE_APP_API_URL +
            `/techstack/heatmap/{name_owner}?name=${this.name2}&owner=${this.owner2}`
        )
        .then((res) => {
          this.repo2Stats.heatmap_data = res.data.data[0].heatmap_data;
          this.parseCommitsOverTimeData(2);
        })
        .catch((e) => {
          console.log(e);
          this.repo2Stats.heatmap_data = null;
        });

      await axios
        .get(
          process.env.VUE_APP_API_URL +
            `/techstack/nodelink_data?name=${this.name2}&owner=${this.owner2}`
        )
        .then((res) => {
          this.repo2Stats.nodeLink = res.data.data[0].nodelink_data;
        })
        .catch((e) => {
          console.log(e);
          this.repo2Stats.nodeLink = null;
        });

      await axios
        .get(
          process.env.VUE_APP_API_URL +
            `/techstack/contribution/{name_owner}?name=${this.name2}&owner=${this.owner2}`
        )
        .then((res) => {
          this.parseContributorData(
            res.data.data[0].commits_per_author,
            2,
            "last_30_days"
          );
          this.parseContributorData(
            res.data.data[0].commits_per_author,
            2,
            "all_time"
          );
        })
        .catch((e) => {
          console.log(e);
          this.contributors[1][0] = null;
          this.contributors[1][1] = null;
        });
      this.processData(2);
    }
  },
  methods: {
    /**
     * This method is used to set marks for a given chart, these represent the data points
     *
     * @param {object} chart - This is the JSON object of the visualisation
     * @param {Map} map - This is the data necessary to represent a data point in a viz
     * @param {object} objToCopy - This is the JSON object that will represent a mark
     */
    setSeriesSubObject(chart, map, objToCopy) {
      // Looping over all the data points
      map.forEach((value, key) => {
        let seriesSubObjCopy = JSON.parse(JSON.stringify(objToCopy)); // creating a deep copy
        seriesSubObjCopy.name = key;
        seriesSubObjCopy.areaStyle.color = value.color; // setting the value of the data points in the mark object
        seriesSubObjCopy.data = value.data;
        chart.series.push(seriesSubObjCopy); // adding the mark to the visualisation object
      });
    },

    /**
     * This method is used to set marks for a stacked area chart, these represent the continuous data points
     *
     * @param {object} chart - This is the JSON object of the visualisation
     * @param {Map} map - This is the data necessary to represent a data point in a viz
     * @param {Map} colorData - This is a map of colors for consistent colors across the system
     * @param {object} objToCopy - This is the JSON object that will represent a mark
     */
    setSeriesLocByLang(chart, map, colorData, objToCopy) {
      // Looping over all the continuous data points
      map.forEach((value, key) => {
        chart.legend.data.push(key);
        chart.color.push(colorData[key]);
        let seriesSubObjCopy = JSON.parse(JSON.stringify(objToCopy)); // creating a deep copy
        seriesSubObjCopy.name = key;
        seriesSubObjCopy.areaStyle.color = colorData[key];
        seriesSubObjCopy.data = value.data; // setting the value of the data points in the mark object
        chart.series.push(seriesSubObjCopy); // adding the mark to the visualisation object
      });
    },

    /**
     * This method is used to set marks for a heat map. A heat map has different method of declaring marks.
     *
     * @param {object} chart - This is the JSON object of the visualisation
     * @param {Map} map - This is the data necessary to represent a data point in a viz
     * @param {object} subObj - This is the JSON object that will represent a mark
     */
    setSeriesHeatMap(chart, map, subObj) {
      // Looping over all data points
      map.forEach((value, key) => {
        let seriesSubObjCopy = JSON.parse(JSON.stringify(subObj)); // creating a deep copy
        seriesSubObjCopy.name = seriesSubObjCopy.name + key;
        seriesSubObjCopy.data = [value]; // setting up a data point tile
        chart.series.push(seriesSubObjCopy); // adding the mark to the visualisation object
      });
    },

    /**
     * This method is used to process all the data fetched from the API, transform it into compatible formats and invoke relevant
     * sections of the system once done in order to render the charts onto the screen.
     *
     * @param {number} repoNumber - This is the number of the repository. This is used to access the data fetched from the API and
     *                              differentiate between the two repos in multi view.
     */
    processData(repoNumber) {
      let locByTypeCopy = JSON.parse(JSON.stringify(locByType));
      let locByLangCopy = JSON.parse(JSON.stringify(locByLang));
      let depBubbleChartCopy = JSON.parse(JSON.stringify(depBubbleChart));
      let nodeLinkCopy1 = JSON.parse(JSON.stringify(nodeLink)); // creating deep copy of the visualisation objects
      let nodeLinkCopy2 = JSON.parse(JSON.stringify(nodeLink));
      let heatMapCopy = JSON.parse(JSON.stringify(heatMap));

      let statsData = new Map();
      let heatMapData = new Map();
      let depDataColorMap = new Map(); // initializing maps for data points processing
      let heatMapTooltipData = new Map();
      let bubbleChartTooltipData = new Map();

      let extractedDepData = this.extractDepData(repoNumber); // function call to extract and retrieve bubble chart data
      let extractedData = this.extractData(repoNumber); // function call to extract and retrieve other chart data
      let extractedHeatMapData = this.extractHeatMapData(repoNumber); // function call to extract and retrieve heat map data

      this.versionData.push(extractedData[0]); // setting up global version & language data
      this.languageData.push(extractedData[1]);
      statsData = extractedData[2];

      heatMapData = extractedHeatMapData[0];
      heatMapCopy.visualMap.min = extractedHeatMapData[1]; // extracting relevant heat map data and assigning it
      heatMapCopy.visualMap.max = extractedHeatMapData[2];
      heatMapTooltipData = extractedHeatMapData[4];

      if (extractedDepData[0].length > 0) {
        let depRepos = extractedDepData[0].map((repoArray) => {
          return repoArray[3];
        });
        depDataColorMap = extractedDepData[1];
        depBubbleChartCopy.color = [];
        depBubbleChartCopy.legend.data = depRepos; // assigning data to the bubble chart object for global reference
        bubbleChartTooltipData = extractedDepData[2];
      }

      locByLangCopy.color = [];
      locByLangCopy.xAxis[0].data = this.versionData[repoNumber - 1]; // setting up axis information for stacked area chart
      locByTypeCopy.yAxis[0].data = this.versionData[repoNumber - 1];

      heatMapCopy.xAxis.data = extractedHeatMapData[3]; // setting up axis info for heat map

      locByLangCopy.legend.data = Array.from(
        this.languageData[repoNumber - 1].keys() // setting up legend for stacked area chart
      );

      // locByTypeCopy.legend.data = Array.from(statsData.keys()); // rm legend
      let colorPalette =
        repoNumber == 1
          ? this.repo1MetaData.language_colours // extracting color palette for consistent colors
          : this.repo2MetaData.language_colours;
      this.setSeriesLocByLang(
        locByLangCopy,
        this.languageData[repoNumber - 1],
        colorPalette,
        locByLangSeriesObj
      ); // function calls to set marks for visualisations
      this.setSeriesSubObject(locByTypeCopy, statsData, horizontalBarSeriesObj);
      this.setSeriesBubbleChart(
        depBubbleChartCopy,
        extractedDepData[0],
        depDataColorMap
      );
      this.setSeriesHeatMap(heatMapCopy, heatMapData, heatMapSeriesObj);

      // custom tooltips for heatmap
      heatMapCopy.tooltip.formatter = (obj) => {
        var dataPoint = obj.value;
        var weekTooltipData = heatMapTooltipData.get(
          dataPoint[0] + "-" + dataPoint[1]
        );
        return (
          '<div class = "tooltip" style="border: 3px solid ' +
          obj.color +
          ';">' +
          '<strong style="font-size: 18px">' +
          dataPoint[2].toLocaleString() +
          "</strong>" +
          " open issues in " +
          obj.seriesName +
          "<br><br>" +
          "<strong> Start Date：</strong>" +
          weekTooltipData[0] +
          "<br>" +
          "<strong> End Date：</strong>" +
          weekTooltipData[1] +
          "<br>" +
          "</div>"
        );
      };

      // custom tooltips for bubble chart
      depBubbleChartCopy.tooltip.formatter = (obj) => {
        var dataPoint = obj.value;
        return (
          '<div class = "tooltip" style="border: 3px solid ' +
          obj.color +
          ';">' +
          '<strong style="font-size: 21px">' +
          dataPoint[3].charAt(0).toUpperCase() +
          dataPoint[3].slice(1) +
          "</strong>  <br><br>" +
          "<strong> Dependencies Count：</strong>" +
          dataPoint[1].toLocaleString() +
          "<br>" +
          "<strong> Project Size(KB)</strong>：" +
          dataPoint[0].toLocaleString() +
          "<br>" +
          "<strong> Issues Classification：</strong>" +
          bubbleChartTooltipData.get(dataPoint[3])[1] +
          "<br>" +
          "<strong> Issues Count：</strong>" +
          bubbleChartTooltipData.get(dataPoint[3])[0] +
          "<br>" +
          (bubbleChartTooltipData.get(dataPoint[3])[2] != null
            ? "<strong> Common Language：</strong>" +
              bubbleChartTooltipData.get(dataPoint[3])[2] +
              "<br>"
            : "") +
          (bubbleChartTooltipData.get(dataPoint[3])[3].length > 0
            ? "<strong> Common Topics：</strong> <div> " +
              bubbleChartTooltipData.get(dataPoint[3])[3].map((item) => {
                return "<span> &nbsp" + item + "</span>";
              }) +
              "</div> <br>"
            : "") +
          "</div>"
        );
      };

      // setting data & behaviour based on the repository number given
      if (repoNumber == 1) {
        this.initializeNodeLink(nodeLinkCopy1, this.repo1Stats.nodeLink);
        this.locType1 = locByTypeCopy;
        this.locType1Loading = false;
        this.locByLang1 = locByLangCopy;
        this.locByLang1Loading = false;
        this.bubblePlot1 = depBubbleChartCopy;
        this.bubblePlot1Loading = false;
        this.nodeLink1 = nodeLinkCopy1;
        this.nodeLink1Loading = false;
        this.heatMap1 = heatMapCopy;
        this.heatMap1Loading = false;
      } else if (repoNumber == 2) {
        this.initializeNodeLink(nodeLinkCopy2, this.repo2Stats.nodeLink);
        this.locType2 = locByTypeCopy;
        this.locType2Loading = false;
        this.locByLang2 = locByLangCopy;
        this.locByLang2Loading = false;
        this.bubblePlot2 = depBubbleChartCopy;
        this.bubblePlot2Loading = false;
        this.nodeLink2 = nodeLinkCopy2;
        this.nodeLink2Loading = false;
        this.heatMap2 = heatMapCopy;
        this.heatMap2Loading = false;
      }
    },

    /**
     * This method is used to set marks for the bubble chart. A bubble chart has different method of declaring marks.
     *
     * @param {object} chart - This is the JSON object of the visualisation
     * @param {Map} map - This is the data necessary to represent a data point in a viz
     * @param {Map} colorMap - This is the map for consistent colors in the visualisations
     */
    setSeriesBubbleChart(chart, map, colorMap) {
      // looping over the data points
      map.forEach((repoArray) => {
        chart.color.push(colorMap.get(repoArray[3]));
        let seriesSubObjCopy = JSON.parse(JSON.stringify(bubbleChartSeriesObj)); // creating a deep copy of series sub object
        seriesSubObjCopy.name = repoArray[3];
        seriesSubObjCopy.symbolSize = repoArray[2];
        seriesSubObjCopy.data = [repoArray.slice(0, 4)]; // setting up data for mark object
        seriesSubObjCopy.areaStyle.color = colorMap.get(repoArray[3]);
        chart.series.push(seriesSubObjCopy); // adding the mark to the visualisation object
      });
    },

    /**
     * This method is used to extract and tranform the fecthed data for bubble chart. It is a adpater function.
     *
     * @param {number} repoNumber - This is the repo number which is used to access the data
     */
    extractDepData(repoNumber) {
      let jsonObj;
      let extractedDepData = []; // [[xAxis: repo_size, yAxis: Dep_count, Size: Issue_count, Color: Name]]
      let tooltipData = new Map();
      let colorMap = new Map(); // initializing the variables

      if (repoNumber == 1) {
        jsonObj = this.repo1Stats.dep;
      } else if (repoNumber == 2) {
        jsonObj = this.repo2Stats.dep; // getting the data fetched from API based on the repo number given
      }

      if (!jsonObj) {
        return [extractedDepData, colorMap]; // for cases with no data
      }

      for (let repoObj of jsonObj) {
        let repoData = [];
        repoData.push(repoObj.size);
        repoData.push(repoObj.num_components); // extracting the data and tranforming it into the required format
        this.vulnerabilityClassification(repoData, repoObj, tooltipData);
        extractedDepData.push(repoData);
        colorMap.set(repoObj.name, repoObj.repo_colour);
      }

      return [extractedDepData, colorMap, tooltipData]; // returning the extracted data
    },

    /**
     * This method is used to set classifications and store the tooltip data for the marks.
     *
     * @param {object} repoData - This is the JSON object of the repository mark used in the bubble chart
     * @param {object} repoObj - This is the JSON object retrieevd from the API call for similar repos
     * @param {Map} subObj - This is a map for storing all the tooltip data for a mark
     */
    vulnerabilityClassification(repoData, repoObj, tooltipData) {
      let bubbleSizes = [15, 30, 50, 80, 110];
      let classes = ["0", "1-50", "51-100", "101-150", "151+"]; // setting up classes & sizes for bubbles
      let repoVulnerabilities = repoObj.num_vulnerabilities;
      let repoBubbleSize = 0;
      let repoClass = ""; // initialising variables

      if (repoVulnerabilities === 0) {
        repoBubbleSize = bubbleSizes[0];
        repoClass = classes[0];
      } else if (repoVulnerabilities >= 1 && repoVulnerabilities <= 50) {
        repoBubbleSize = bubbleSizes[1];
        repoClass = classes[1];
      } else if (repoVulnerabilities >= 51 && repoVulnerabilities <= 100) {
        repoBubbleSize = bubbleSizes[2]; // setting up the class and bubble size based on the count
        repoClass = classes[2];
      } else if (repoVulnerabilities >= 101 && repoVulnerabilities <= 150) {
        repoBubbleSize = bubbleSizes[3];
        repoClass = classes[3];
      } else {
        repoBubbleSize = bubbleSizes[4];
        repoClass = classes[4];
      }

      repoData.push(repoBubbleSize);
      repoData.push(repoObj.name); // storing the information for the mark obj
      tooltipData.set(repoObj.name, [
        repoVulnerabilities,
        repoClass,
        repoObj.common_language,
        repoObj.common_topics,
      ]); // addiing tooltip data for the given repo
    },

    /**
     * This method is used to extract and tranform the heat map data from the API.
     *
     * @param {number} repoNumber - This is the repo number which is used for accessing the data
     */
    extractHeatMapData(repoNumber) {
      let jsonResponse;
      let extractedHeatMapData = new Map(); // [Week: [X,Y,VAL]]
      let extractedTooltipData = new Map(); // [start date, end date]

      let maxVal = 0,
        minVal = Infinity; // initialising the values
      let xAxis = []; // 19 cols
      let xAxisYears = new Set(); // a set for years in xAxis
      let weekCount = 0;

      if (repoNumber == 1) {
        jsonResponse = this.repo1Stats.heatmap_data;
      } else if (repoNumber == 2) {
        // getting the data fetched from API based on the repo number given
        jsonResponse = this.repo2Stats.heatmap_data;
      }

      // iterating over all the weeks from the fetched data
      for (let week in jsonResponse) {
        let weekObj = jsonResponse[week];
        let weekData = []; // initialising loop variables
        let weekTooltipData = [];

        weekCount += 1;

        weekData.push(weekObj.coords.x);
        weekData.push(weekObj.coords.y); // Adding the week data point info
        weekData.push(weekObj.issues.open);

        weekTooltipData.push(weekObj.start.substring(0, 10));
        weekTooltipData.push(weekObj.end.substring(0, 10)); // Adding the tooltip information for the week

        if (
          weekObj.start.substring(5, 7) === "01" &&
          !xAxisYears.has(weekObj.start.substring(0, 4))
        ) {
          if (xAxis.length < Math.floor(weekCount / 8)) {
            xAxis.push(weekObj.start.substring(0, 4));
            xAxisYears.add(weekObj.start.substring(0, 4)); // extracting xAxis years
          } else {
            xAxis[Math.floor(weekCount / 8) - 1] = weekObj.start.substring(
              0,
              4
            );
            xAxisYears.add(weekObj.start.substring(0, 4));
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

        extractedTooltipData.set(
          weekObj.coords.x + "-" + weekObj.coords.y,
          weekTooltipData
        ); // storing the week dat by coords
        extractedHeatMapData.set(weekObj.week, weekData);
      }
      xAxis = xAxis.reverse();
      return [
        extractedHeatMapData,
        minVal,
        maxVal,
        xAxis,
        extractedTooltipData,
      ]; // returning the extracted information
    },

    /**
     * This method is used to extract data and initialise the node link diagram object
     *
     * @param {Object} nodeLink - This is the JSON Object of the node-link visualization
     * @param {Object} data - This is the data fetched from the API
     */
    initializeNodeLink(nodeLink, data) {
      if (data != undefined) {
        let nodeLinkSubObj = JSON.parse(JSON.stringify(nodeLinkSeriesObj)); // creating a deep copy
        nodeLinkSubObj.categories = data.categories;
        nodeLinkSubObj.nodes = data.nodes; // setting up categories, nodes and links in the visualisaion
        nodeLinkSubObj.links = data.links;

        // looping over all the categories to assign consistent colors
        for (let categoryObj in nodeLinkSubObj.categories) {
          nodeLinkSubObj.categories[categoryObj].itemStyle = {};
          nodeLinkSubObj.categories[categoryObj].itemStyle.color =
            this.repo1MetaData.license_colours[
              nodeLinkSubObj.categories[categoryObj].name
            ];
        }
        nodeLink.series.push(nodeLinkSubObj); // setting marks to the visualisation JSON Objects
      }
    },

    /**
     * This method is used to extract the data for the LOC related data and tranform it to fit the information required for stacked area
     * and bar chart of the system.
     *
     * @param {number} repoNumber - This is the repo number which is used to access the data stored in the system
     */
    extractData(repoNumber) {
      let jsonObj;
      let versions = [];
      const languageData = new Map(); // initialising variables
      const statsData = new Map();
      statsData.set("code", { data: [], color: "#34a853" });
      statsData.set("comment", { data: [], color: "#4285f4" }); // setting up colors for stacked bar chart
      statsData.set("blank", { data: [], color: "#ea4335" });

      if (repoNumber == 1) {
        jsonObj = this.repo1Stats.loc;
      } else if (repoNumber == 2) {
        // getting the data fetched from API based on the repo number given
        jsonObj = this.repo2Stats.loc;
      }

      // iterating over all the versions of the repository and tranforming the necessary data in required formats
      for (let versionObj of jsonObj) {
        versions.push(versionObj.tag_name);
        for (const [langKey, langObj] of Object.entries(
          versionObj.LOC_limited
        )) {
          if (langKey === "SUM") {
            statsData.forEach((value, key, map) => {
              value.data.push(langObj[key]);
              map.set(key, value);
            });
          } else {
            if (languageData.has(langKey)) {
              let tempValue = languageData.get(langKey); // "Yaml": [0,1,15]
              tempValue.data.push(langObj.code); // [0,1,15,4]
              languageData.set(langKey, tempValue); // "Yaml" <- [0,1,15,4]
            } else {
              languageData.set(langKey, { data: [langObj.code] });
            }
          }
        }
      }
      return [versions, languageData, statsData]; // returning the extracted data
    },

    /**
     * Parse data for contributors pie charts.
     *
     * @param {object} data - The data to be parsed.
     * @param {number} repoNumber - The repository number. 1 or 2.
     * @param {string} type - The type of contributor data to parse. "all_time" or "last_30_days"
     */
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

      if (
        this.contributors[repoNumber - 1][
          this.contributors[repoNumber - 1].length - 1
        ] == 0
      ) {
        this.contributors[repoNumber - 1][
          this.contributors[repoNumber - 1].length - 1
        ] = null;
      }
      this.contributorsLoading[repoNumber - 1] = false;
      return;
    },
    /**
     * Parse lines of code over time data for a repository.
     *
     * @param {number} repoNumber - The repository number. 1 or 2.
     */
    parseLocOverTimeData(repoNumber) {
      var statsRepos = ["repo1Stats", "repo2Stats"];

      // If there is no 'SUM' key in the lines of code data
      if (!("SUM" in this[statsRepos[repoNumber - 1]].loc[0].LOC)) {
        return;
      }

      // Add a new object
      this.overTimeData[repoNumber - 1].loc = {
        name: "Lines of Code",
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

        this.overTimeData[repoNumber - 1].loc.xData.push(date);
        this.overTimeData[repoNumber - 1].loc.yData.push(loc);
        this.overTimeDataLoading[repoNumber - 1] = false;
      });
    },
    /**
     * Parse commits over time data for a repository.
     *
     * @param {number} repoNumber - The repository number. 1 or 2.
     */
    parseCommitsOverTimeData(repoNumber) {
      var statsRepos = ["repo1Stats", "repo2Stats"];

      // Add a new object
      this.overTimeData[repoNumber - 1].commits = {
        name: "Commits",
        xData: [],
        yData: [],
      };

      let weeks = this[statsRepos[repoNumber - 1]].heatmap_data;

      Object.keys(weeks).forEach((key) => {
        this.overTimeData[repoNumber - 1].commits.xData.push(weeks[key].start);
        this.overTimeData[repoNumber - 1].commits.yData.push(
          weeks[key].commits.created
        );
      });
    },
  },
};
</script>
