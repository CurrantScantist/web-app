<template>
  <div class="test">
      <div class = "health-model">
            <div class="repository">
                <div class="rep-container">
                <span id='close' 
                    onclick='
                        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); 
                        return false;
                    '>
                        <button class="close-button">X</button>
                    </span> 

                    <h1>
                        {{repository1MetaData.owner}}/{{repository1MetaData.name}}
                    </h1>
                    
                    <h5>
                        {{repository1MetaData.description}}
                    </h5>

                    <div class= "info-grid">
                        <div class="info-item">
                            <div class="stat-name">Forks Count:</div><div>{{(repository1MetaData.forks_count || 0).toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Forks: </div><div>{{(repository1MetaData.forks || 0).toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Watchers: </div><div>{{(repository1MetaData.watchers_count || 0).toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Issues: </div><div>{{(repository1MetaData.open_issues_count || 0).toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Tags: </div><div>{{(repository1MetaData.topics || []).join(', ')}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Default Branch: </div><div>{{repository1MetaData.default_branch}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Stargazers: </div><div>{{(repository1MetaData.stargazers_count || 0).toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Project Size: </div><div>{{(repository1MetaData.size || 0).toLocaleString()}} bytes</div>
                        </div>

                    </div>

                    <div class="viz-grid">
                        <div class="simple-visualisation1">
                        <h3>Placeholder </h3>
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
                            <h6>(over versions in %)</h6>
                            <v-echarts v-bind:option="locLang1" style="height: 500px" />
                        </div>

                        <div class="wide-visualisation2">
                            <h3>Lines in files by type</h3>
                            <h6>(in %)</h6>
                            <v-echarts v-bind:option="locType1" style="height: 500px" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="repository">
                <div class="rep-container">
                <span id='close' 
                    onclick='
                        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); 
                        return false;
                    '>
                        <button class="close-button">X</button>
                    </span> 

                    <h1>
                        {{repository2MetaData.owner}}/{{repository2MetaData.name}}
                    </h1>
                    
                    <h5>
                        {{repository2MetaData.description}}
                    </h5>

                    <div class= "info-grid">
                        <div class="info-item">
                            <div class="stat-name">Forks Count:</div><div>{{(repository2MetaData.forks_count || 0).toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Forks: </div><div>{{(repository2MetaData.forks || 0).toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Watchers: </div><div>{{(repository2MetaData.watchers_count || 0).toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Issues: </div><div>{{(repository2MetaData.open_issues_count || 0).toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Tags: </div><div>{{(repository2MetaData.topics || []).join(', ')}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Default Branch: </div><div>{{repository2MetaData.default_branch}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Stargazers: </div><div>{{(repository2MetaData.stargazers_count || 0).toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Project Size: </div><div>{{(repository2MetaData.size || 0).toLocaleString()}} bytes</div>
                        </div>

                    </div>

                    <div class="viz-grid">
                        <div class="simple-visualisation1">
                        <h3>Placeholder </h3>
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
                            <h6>(over versions in %)</h6>
                            <v-echarts v-bind:option="locLang2" style="height: 500px" />
                        </div>

                        <div class="wide-visualisation2">
                            <h3>Lines in files by type</h3>
                            <h6>(in %)</h6>
                            <v-echarts v-bind:option="locType2" style="height: 500px" />
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<style lang="scss" scoped> </style>


<script>

    import { VEcharts } from 'vue3-echarts';
    import locByType from '@/visualisations/LinesOfCodeByType.json'
    import locByLang from '@/visualisations/LinesOfCodeByLanguage.json'
    import seriesObj from '@/visualisations/SeriesSubObjLangLOC.json'
    
    export default {
    name: 'OneOneRepoComparison',
    async created(){
        this.fetchData()
    } ,
     data () {
      return {
            repository1MetaData: {},
            repository2MetaData: {}, 
            repository1Stats: {},
            repository2Stats: {},
            fetchMetaData1URL: "https://scantist-backend.herokuapp.com/techstack/{name_owner}?name=flask&owner=pallets",
            fetchMetaData2URL: "https://scantist-backend.herokuapp.com/techstack/{name_owner}?name=grab&owner=lorien",
            fetchStatsData1URL: "https://run.mocky.io/v3/28c55b76-6424-470e-9440-a164ee8aed09",
            fetchStatsData2URL: "https://run.mocky.io/v3/4c239fe2-a2cc-4837-a8ac-039f20be3aae",
            option2: {
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        name: 'Number of Commits',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            {value: 2, name: 'Alan Kopenowski'},
                            {value: 2, name: 'Howard Wolowitz'},
                            {value: 5, name: 'Rodion emayov'},
                            {value: 8, name: 'Gautam Naidu'},
                            {value: 3, name: 'Eddie Chen'},
                            {value: 10, name: 'Emma Richards'},
                            {value: 7, name: 'Others'}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            locLang1: {},
            locLang2: {},
            locType1: {},
            locType2: {}
       }
    },
    components: {
        VEcharts,
    },
    methods: {
        getColor(size) {
            let colorSet = ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00','#ff5100', '#8800ff', '#82173f', '#383838', '#000000']
            let colorPalette = []
            for (let i = 0; i < size; i++) {
                if (i>=colorSet.length) {
                    colorPalette.push(colorSet[i%colorSet.length])
                } else {
                    colorPalette.push(colorSet[i])
                }
            }
            return colorPalette
        },
        async fetchData() {
            const repo1MetaDataFetch = await fetch("https://cors-anywhere.herokuapp.com/"+this.fetchMetaData1URL, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
            })
            
            const repo2MetaDataFetch = await fetch("https://cors-anywhere.herokuapp.com/"+this.fetchMetaData2URL, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            })

            const responseMetaDataRepo1 = await repo1MetaDataFetch.json()
            const responseMetaDataRepo2 = await repo2MetaDataFetch.json()
            this.repository1MetaData = responseMetaDataRepo1.data[0]
            this.repository2MetaData = responseMetaDataRepo2.data[0]

            const repo1StatsFetch = await fetch(this.fetchStatsData1URL, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            })
            const repo2StatsFetch = await fetch(this.fetchStatsData2URL, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            })
            
            this.repository1Stats = await repo1StatsFetch.json()
            this.repository2Stats= await repo2StatsFetch.json()

            this.processData(1)
            this.processData(2)
            
        },
        setSeriesSubObject(chart,map) {
            map.forEach((value, key) => {
                let seriesSubObjCopy = JSON.parse(JSON.stringify(seriesObj))
                seriesSubObjCopy.name = key
                seriesSubObjCopy.areaStyle.color = value.colors
                seriesSubObjCopy.data = value.data
                chart.series.push(seriesSubObjCopy)
            })
        },
        assignColor(givenMap,colorPalette){
            let colorAllocationIndex = 0
            givenMap.forEach((value, key, map) =>{
                let tempValue = value
                tempValue.color = colorPalette[colorAllocationIndex++]
                map.set(key, tempValue)
            })
        },
        processData(repoNumber){
            let locByLangCopy = JSON.parse(JSON.stringify(locByLang))
            let locByTypeCopy = JSON.parse(JSON.stringify(locByType))
            const languageData = new Map();
            const statsData = new Map();
            
            let versions = ["V1.1.0","V1.1.1","V1.1.2","V1.2.0","V1.3.0","V1.4.0","V1.5.0","V1.5.2"]
            statsData.set("Code", {"data":[0.7, 0.74, 0.67, 0.66, 0.65, 0.67, 0.64, 0.67], "color": "#000000"})
            statsData.set("Comments", {"data": [0.2, 0.18, 0.23, 0.23, 0.25, 0.23, 0.25, 0.25], "color": "#383838"})
            statsData.set("Blank", {"data":[0.1, 0.080, 0.1, 0.11, 0.1, 0.1, 0.11, 0.080], "color": "#8a8888"})

            languageData.set("Java", {"data":[0.4, 0.425, 0.5, 0.53, 0.51, 0.55, 0.31, 0.2]})
            languageData.set("JavaScript", {"data": [0.3, 0.3, 0.28, 0.2, 0.2, 0.2, 0.38, 0.51]})
            languageData.set("CSS", {"data": [0.05, 0.1, 0.15, 0.09, 0.2, 0.13, 0.11, 0.2]})
            languageData.set("HTML", {"data": [0.075, 0.05, 0.02, 0.18, 0.09, 0.12, 0.2, 0.09]})
            languageData.set("Python", {"data": [0.175, 0.125, 0.05, 0, 0, 0, 0, 0]})
        
            let colorPalette = this.getColor(languageData.size)
            this.assignColor(languageData,colorPalette)

            locByLangCopy.xAxis[0].data = versions
            locByTypeCopy.xAxis[0].data = versions

            locByLangCopy.color = colorPalette

            locByLangCopy.legend.data = Array.from(languageData.keys())
            locByTypeCopy.legend.data = Array.from(statsData.keys())

            this.setSeriesSubObject(locByLangCopy,languageData)
            this.setSeriesSubObject(locByTypeCopy,statsData)

            if (repoNumber == 1) {
                this.locType1 = locByTypeCopy
                this.locLang1 = locByLangCopy
            } else if (repoNumber == 2) {
                this.locType2 = locByTypeCopy
                this.locLang2 = locByLangCopy
            }     
            
        }
    }
}

// lorien/grab: https://run.mocky.io/v3/4c239fe2-a2cc-4837-a8ac-039f20be3aae
// pallets/flask: https://run.mocky.io/v3/28c55b76-6424-470e-9440-a164ee8aed09
// pallets/flask delete: https://designer.mocky.io/manage/delete/28c55b76-6424-470e-9440-a164ee8aed09/fit4002
// lorien/grab delete: https://designer.mocky.io/manage/delete/4c239fe2-a2cc-4837-a8ac-039f20be3aae/fit4002

</script>
