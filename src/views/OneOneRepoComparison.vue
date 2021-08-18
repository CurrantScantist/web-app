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

            <div class="info-item">
              <div class="stat-name">Forks:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Watchers:</div>
              <div>
                {{ (repository1MetaData.watchers_count || 0).toLocaleString() }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Issues:</div>
              <div>
                {{
                  (repository1MetaData.open_issues_count || 0).toLocaleString()
                }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Tags:</div>
              <div>{{ (repository1MetaData.topics || []).join(", ") }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Default Branch:</div>
              <div>{{ repository1MetaData.default_branch }}</div>
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
                {{ (repository2MetaData.forks_count || 0).toLocaleString() }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Forks:</div>
              <div>{{ (repository2MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Watchers:</div>
              <div>
                {{ (repository2MetaData.watchers_count || 0).toLocaleString() }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Issues:</div>
              <div>
                {{
                  (repository2MetaData.open_issues_count || 0).toLocaleString()
                }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Tags:</div>
              <div>{{ (repository2MetaData.topics || []).join(", ") }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Default Branch:</div>
              <div>{{ repository2MetaData.default_branch }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Stargazers:</div>
              <div>
                {{
                  (repository2MetaData.stargazers_count || 0).toLocaleString()
                }}
              </div>
            </div>

            <div class="info-item">
              <div class="stat-name">Project Size:</div>
              <div>
                {{ (repository2MetaData.size || 0).toLocaleString() }} KB
              </div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import { VEcharts } from "vue3-echarts";
import locByType from "@/visualisations/LinesOfCodeByType.json";
import locByLang from "@/visualisations/LinesOfCodeByLanguage.json";
import seriesObj from "@/visualisations/SeriesSubObjLangLOC.json";
import axios from "axios";

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
      fetchStatsData1URL: "https://run.mocky.io/v3/28c55b76-6424-470e-9440-a164ee8aed09",
      fetchStatsData2URL: "https://run.mocky.io/v3/4c239fe2-a2cc-4837-a8ac-039f20be3aae",
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
    };
  },
  components: {
    VEcharts,
  },
  async created() {
    try {
      const response = await axios.get(
          process.env.VUE_APP_API_URL+ `/techstack/{name_owner}?name=${this.name}&owner=${this.owner}`
      );
      console.log(response)
      this.repository1MetaData = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
          process.env.VUE_APP_API_URL+ `/techstack/{name_owner}?name=${this.name}&owner=${this.owner}`
      );
      this.repository2MetaData = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
         process.env.VUE_APP_API_URL+ `/release/{name_owner}?name=${this.name}&owner=${this.owner}`
      );
      this.repository1Stats = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
          process.env.VUE_APP_API_URL+ `/release/{name_owner}?name=${this.name}&owner=${this.owner}`
      );
      this.repository2Stats = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    // const repo1StatsFetch = await fetch(this.fetchStatsData1URL, {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });
    // const repo2StatsFetch = await fetch(this.fetchStatsData2URL, {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });

    // this.repository1Stats = await repo1StatsFetch.json();
    // this.repository2Stats = await repo2StatsFetch.json();

    console.log(this.repository1Stats)
    this.processData(1);
    this.processData(2);
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
        "#55838a"
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
        if(key === "blank" || key === "comment"){
            seriesSubObjCopy.areaStyle.opacity = 0.5
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
      let locByLangCopy = JSON.parse(JSON.stringify(locByLang));
      let locByTypeCopy = JSON.parse(JSON.stringify(locByType));
      let languageData = new Map();
      let statsData = new Map();
      let versions = [];

      let extractedData = this.extractData(repoNumber);
      versions = extractedData[0];
      languageData = extractedData[1];
      statsData = extractedData[2];
      console.log(statsData)

      let colorPalette = this.getColor(languageData.size);
      this.assignColor(languageData, colorPalette);

      locByLangCopy.xAxis[0].data = versions
      locByTypeCopy.xAxis[0].data = versions

      locByLangCopy.color = colorPalette;

      locByLangCopy.legend.data = Array.from(languageData.keys()); // add x axis label
    //   locByTypeCopy.legend.data = Array.from(statsData.keys());  // rm legend

      this.setSeriesSubObject(locByLangCopy, languageData);
      this.setSeriesSubObject(locByTypeCopy, statsData);

      if (repoNumber == 1) {
        this.locType1 = locByTypeCopy;
        this.locLang1 = locByLangCopy;
        this.locType2 = locByTypeCopy;
        this.locLang2 = locByLangCopy;
      } else if (repoNumber == 2) {
        // this.locType2 = locByTypeCopy;
        // this.locLang2 = locByLangCopy;
      }
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
        jsonObj = this.repository1Stats;
      } else if (repoNumber == 2) {
        jsonObj = this.repository2Stats;
      }

      for (let versionObj of jsonObj) {
        versions.push(versionObj.tag_name)
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
  },
};

// lorien/grab: https://run.mocky.io/v3/4c239fe2-a2cc-4837-a8ac-039f20be3aae
// pallets/flask: https://run.mocky.io/v3/28c55b76-6424-470e-9440-a164ee8aed09
// pallets/flask delete: https://designer.mocky.io/manage/delete/28c55b76-6424-470e-9440-a164ee8aed09/fit4002
// lorien/grab delete: https://designer.mocky.io/manage/delete/4c239fe2-a2cc-4837-a8ac-039f20be3aae/fit4002

// bubble chart: https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712
// bubble chart delete: https://designer.mocky.io/manage/delete/4f9a9846-1152-4d3a-97be-3620c6a11712/7Z3ZyMjTlAAFvcCRGcb4UnZAXSgU60okB7hF
</script>
