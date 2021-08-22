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
                        {{repository1.owner}}/{{repository1.name}}
                    </h1>
                    
                    <h5>
                        {{repository1.description}}
                    </h5>

                    <div class= "info-grid">
                        <div class="info-item">
                            <div class="stat-name">Forks Count:</div><div>{{repository1.forks_count.toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Forks: </div><div>{{repository1.forks.toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Watchers: </div><div>{{repository1.watchers_count.toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Issues: </div><div>{{repository1.open_issues_count.toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Tags: </div><div>{{(repository1.topics || []).join(', ')}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Default Branch: </div><div>{{repository1.default_branch}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Stargazers: </div><div>{{repository1.stargazers_count.toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Project Size: </div><div>{{repository1.size.toLocaleString()}} bytes</div>
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
                            <v-echarts v-bind:option="option3" style="height: 500px" />
                        </div>

                        <div class="wide-visualisation2">
                            <h3>Lines in files by type</h3>
                            <h6>(in %)</h6>
                            <v-echarts v-bind:option="option4" style="height: 500px" />
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
                        {{repository2.owner}}/{{repository2.name}}
                    </h1>
                    
                    <h5>
                        {{repository2.description}}
                    </h5>

                    <div class= "info-grid">
                        <div class="info-item">
                            <div class="stat-name">Forks Count:</div><div>{{repository2.forks_count.toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Forks: </div><div>{{repository2.forks.toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Watchers: </div><div>{{repository2.watchers_count.toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Issues: </div><div>{{repository2.open_issues_count.toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Tags: </div><div>{{(repository2.topics || []).join(', ')}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Default Branch: </div><div>{{repository2.default_branch}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Stargazers: </div><div>{{repository2.stargazers_count.toLocaleString()}}</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Project Size: </div><div>{{repository2.size.toLocaleString()}} bytes</div>
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
                            <v-echarts v-bind:option="option3" style="height: 500px" />
                        </div>

                        <div class="wide-visualisation2">
                            <h3>Lines in files by type</h3>
                            <h6>(in %)</h6>
                            <v-echarts v-bind:option="option4" style="height: 500px" />
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
    
    export default {
    name: 'OneOneRepoComparison',
    async created(){
        this.fetchData()
    } ,
     data () {
      return {
            repository1: {},
            repository2: {},
            fetchURL1: "https://scantist-backend.herokuapp.com/techstack/{name_owner}?name=react&owner=facebook",
            fetchURL2: "https://scantist-backend.herokuapp.com/techstack/{name_owner}?name=vue&owner=vuejs",
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
            option3:  {},
            option4: {},
            linesOfCodeByLangChart: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['Java', 'JavaScript', 'CSS', 'HTML', 'Python']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '1%',
                    right: '3%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ["V1.1.0","V1.1.1","V1.1.2","V1.2.0","V1.3.0","V1.4.0","V1.5.0","V1.5.2"]
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Java',
                        type: 'line',
                        stack: 'total',
                        smooth: false,
                        lineStyle: {
                            width: 1
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.95,
                            color: '#ff5100'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0.4, 0.425, 0.5, 0.53, 0.51, 0.55, 0.31, 0.2]
                    },
                    {
                        name: 'JavaScript',
                        type: 'line',
                        stack: 'total',
                        smooth: false,
                        lineStyle: {
                            width: 1
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.95,
                            color: '#8800ff'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0.3, 0.3, 0.28, 0.2, 0.2, 0.2, 0.38, 0.51]
                    },
                    {
                        name: 'CSS',
                        type: 'line',
                        stack: 'total',
                        smooth: false,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.95,
                            color:  '#82173f'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0.05, 0.1, 0.15, 0.09, 0.2, 0.13, 0.11, 0.2]
                    },
                    {
                        name: 'HTML',
                        type: 'line',
                        stack: 'total',
                        smooth: false,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.95,
                            color: '#383838'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0.075, 0.05, 0.02, 0.18, 0.09, 0.12, 0.2, 0.09]
                    },
                    {
                        name: 'Python',
                        type: 'line',
                        stack: 'total',
                        smooth: false,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.95,
                            color: '#000000'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0.175, 0.125, 0.05, 0, 0, 0, 0, 0]
                    }
                ]
            }
       }
    },
    components: {
        VEcharts,
    },
    methods: {
        getColor() {
            let colorSet = ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00','#ff5100', '#8800ff', '#82173f', '#383838', '#000000']
            console.log(colorSet)
        },
        async fetchData() {
            const repo1Fetch = await fetch("https://cors-anywhere.herokuapp.com/"+this.fetchURL1, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
        const repo2Fetch = await fetch("https://cors-anywhere.herokuapp.com/"+this.fetchURL2, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })

        const responseDataRepo1 = await repo1Fetch.json()
        const responseDataRepo2 = await repo2Fetch.json()
        this.repository1 = responseDataRepo1.data[0]
        this.repository2 = responseDataRepo2.data[0]
        setTimeout(()=>{
          this.option4 = locByType
        }, 3000)

        setTimeout(()=>{
          this.option3 = locByType
        }, 9000)
        },
        processData(){

        },
        changeLoadingAnimation(){

        }
    }
}

    
    
</script>
