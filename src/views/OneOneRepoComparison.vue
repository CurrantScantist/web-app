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

            <div class="info-item vulnerabilityTheme  critical">
              <div class="stat-name">Critical Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Forks:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item vulnerabilityTheme  high">
              <div class="stat-name">High Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Watchers:</div>
              <div>
                {{ (repository1MetaData.watchers_count || 0).toLocaleString() }}
              </div>
            </div>

            <div class="info-item vulnerabilityTheme  medium">
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

            <div class="info-item vulnerabilityTheme  low">
              <div class="stat-name">Low Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Default Branch:</div>
              <div>{{ repository1MetaData.default_branch }}</div>
            </div>

            <div class="info-item vulnerabilityTheme  unknown">
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
                {{ this.processDate(repository1MetaData.created_at) }} 
              </div>
            </div>


            <div class="info-item">
              <div class="stat-name">Last updated on:</div>
              <div>
                {{ this.processDate(repository1MetaData.updated_at) }} 
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

            <div class="info-item vulnerabilityTheme  critical">
              <div class="stat-name">Critical Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Forks:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item vulnerabilityTheme  high">
              <div class="stat-name">High Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Watchers:</div>
              <div>
                {{ (repository1MetaData.watchers_count || 0).toLocaleString() }}
              </div>
            </div>

            <div class="info-item vulnerabilityTheme  medium">
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

            <div class="info-item vulnerabilityTheme  low">
              <div class="stat-name">Low Vulnerabilities:</div>
              <div>{{ (repository1MetaData.forks || 0).toLocaleString() }}</div>
            </div>

            <div class="info-item">
              <div class="stat-name">Default Branch:</div>
              <div>{{ repository1MetaData.default_branch }}</div>
            </div>

            <div class="info-item vulnerabilityTheme  unknown">
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
                {{ this.processDate(repository1MetaData.created_at) }} 
              </div>
            </div>


            <div class="info-item">
              <div class="stat-name">Last updated on:</div>
              <div>
                {{ this.processDate(repository1MetaData.updated_at) }} 
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
import depBubbleChart from "@/visualisations/DependencyIssuesSizeBubbleChart.json"
import seriesObj from "@/visualisations/SeriesSubObjLangLOC.json";
import bubbleChartSeriesObj from "@/visualisations/SeriesSubObjBubbleChart.json"
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
      bubblePlot2: {}
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
      this.repository1Stats.loc = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
          process.env.VUE_APP_API_URL+ `/release/{name_owner}?name=${this.name}&owner=${this.owner}`
      );
      this.repository2Stats.loc = response.data.data[0];
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
          'https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712'
      );
      this.repository1Stats.dep = response.data.data
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await axios.get(
          'https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712'
      );
      this.repository2Stats.dep = response.data.data
    } catch (e) {
      console.log(e);
    }

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
      let depBubbleChartCopy = JSON.parse(JSON.stringify(depBubbleChart));

      let languageData = new Map();
      let statsData = new Map();
      let versions = [];

      let extractedDepData = this.extractDepData(repoNumber);
      let extractedData = this.extractData(repoNumber);

      versions = extractedData[0];
      languageData = extractedData[1];
      statsData = extractedData[2];

      let depRepos = extractedDepData.map((repoArray) => {
          return repoArray[3];
      })
     
      let colorPalette = this.getColor(languageData.size);
      this.assignColor(languageData, colorPalette);


      locByLangCopy.xAxis[0].data = versions
      locByTypeCopy.xAxis[0].data = versions
      

      locByLangCopy.color = colorPalette;

      depBubbleChartCopy.color = this.getColor(depRepos.length);
      locByLangCopy.legend.data = Array.from(languageData.keys()); // add x axis label
      depBubbleChartCopy.legend.data = depRepos

    //   locByTypeCopy.legend.data = Array.from(statsData.keys());  // rm legend

      this.setSeriesSubObject(locByLangCopy, languageData);
      this.setSeriesSubObject(locByTypeCopy, statsData);
      this.setSeriesBubbleChart(depBubbleChartCopy, extractedDepData, depBubbleChartCopy.color)

      if (repoNumber == 1) {
        this.locType1 = locByTypeCopy;
        this.locLang1 = locByLangCopy;
        this.locType2 = locByTypeCopy;
        this.locLang2 = locByLangCopy;
        this.bubblePlot1 = depBubbleChartCopy;
        this.bubblePlot2 = depBubbleChartCopy;

      } else if (repoNumber == 2) {
        // this.locType2 = locByTypeCopy;
        // this.locLang2 = locByLangCopy;
      }
    },
    setSeriesBubbleChart(chart, map, colors) {
      let colorIndex = 0
      map.forEach((repoArray) => {
        let seriesSubObjCopy = JSON.parse(JSON.stringify(bubbleChartSeriesObj));
        seriesSubObjCopy.name = repoArray[3];
        seriesSubObjCopy.symbolSize = repoArray[2];
        seriesSubObjCopy.data = [repoArray];
        seriesSubObjCopy.areaStyle.color = colors[colorIndex++];
        chart.series.push(seriesSubObjCopy);
      });
    },
    processDate(inputDate){
      if (inputDate) {
        let date = new Date(inputDate);
        let dateFormatter = new Intl.DateTimeFormat('en-AU', {
          day : '2-digit',
          month: 'short',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          timeZone: 'Australia/Sydney',
          timeZoneName: 'short',
          hour12: false
        });

        return dateFormatter.format(date)
      }
      return ""
    },
    extractDepData(repoNumber){
      let jsonObj;
      let extractedDepData = [] // [[xAxis: repo_size, yAxis: Dep_count, Size: Issue_count, Color: Name]]

      if (repoNumber == 1) {
        jsonObj = this.repository1Stats.dep;
      } else if (repoNumber == 2) {
        jsonObj = this.repository2Stats.dep;
      }

       for (let repoObj of jsonObj) {
         let repoData = []
         repoData.push(repoObj.size);
         repoData.push(repoObj.dep_count);
         repoData.push(Math.sqrt(repoObj.issue_count)* 5);
         repoData.push(repoObj.name);
         extractedDepData.push(repoData)
       }

      return extractedDepData
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
        jsonObj = this.repository1Stats.loc;
      } else if (repoNumber == 2) {
        jsonObj = this.repository2Stats.loc;
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

// bubble chart: https://run.mocky.io/v3/4f9a9846-1152-4d3a-97be-3620c6a11712
// bubble chart delete: https://designer.mocky.io/manage/delete/4f9a9846-1152-4d3a-97be-3620c6a11712/7Z3ZyMjTlAAFvcCRGcb4UnZAXSgU60okB7hF
</script>
