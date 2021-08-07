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
                        microsoft/vscode
                    </h1>
                    
                    <h5>
                        Visual Studio Code is a source-code editor made by Microsoft for Windows, 
                        Linux and macOS. Features include support for debugging, syntax highlighting, 
                        intelligent code completion, snippets, code refactoring, and embedded Git. Users 
                        can change the theme, keyboard shortcuts, preferences, and install extensions that 
                        add additional functionality.
                    </h5>

                    <div class= "info-grid">
                        <div class="info-item">
                            <div class="stat-name">Stars:</div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Forks: </div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Watchers: </div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Issues: </div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Tags: </div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Default Branch: </div><div>main</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Stargazers: </div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Project Size: </div><div>100 MB</div>
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
                        microsoft/vscode2
                    </h1>
                    
                    <h5>
                        Visual Studio Code is a source-code editor made by Microsoft for Windows, 
                        Linux and macOS. Features include support for debugging, syntax highlighting, 
                        intelligent code completion, snippets, code refactoring, and embedded Git. Users 
                        can change the theme, keyboard shortcuts, preferences, and install extensions that 
                        add additional functionality.
                    </h5>

                    <div class= "info-grid">
                        <div class="info-item">
                            <div class="stat-name">Stars:</div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Forks: </div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Watchers: </div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Issues: </div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Tags: </div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Default Branch: </div><div>main</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Stargazers: </div><div>99999</div>
                        </div>

                        <div class="info-item">
                            <div class="stat-name">Project Size: </div><div>100 MB</div>
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
      </div>>
  </div>
</template>

<style lang="scss" scoped> </style>


<script>

    import { VEcharts } from 'vue3-echarts';
    
    export default {
    name: 'SingleRepository',
     data () {
      return {
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
            option3:  {
                color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
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
                            color: 'rgba(128, 255, 165)'
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
                            color: 'rgba(0, 221, 255)'
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
                            color:  'rgba(55, 162, 255)'
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
                            color: 'rgba(255, 0, 135)'
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
                            color: 'rgba(255, 191, 0)'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0.175, 0.125, 0.05, 0, 0, 0, 0, 0]
                    }
                ]
            },
            option4:  {
                color: ['#000000', '#383838', '#8a8888'],
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
                    data: ['Code', 'Comments', 'Blank']
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
                        name: 'Code',
                        type: 'line',
                        stack: 'total',
                        smooth: true,
                        lineStyle: {
                            width: 1
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.95,
                            color: '#000000'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0.7, 0.74, 0.67, 0.66, 0.65, 0.67, 0.64, 0.67]
                    },
                    {
                        name: 'Comments',
                        type: 'line',
                        stack: 'total',
                        smooth: true,
                        lineStyle: {
                            width: 1
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.95,
                            color: '#383838'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0.2, 0.18, 0.23, 0.23, 0.25, 0.23, 0.25, 0.25]
                    },
                    {
                        name: 'Blank',
                        type: 'line',
                        stack: 'total',
                        smooth: false,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: true,
                        areaStyle: {
                            opacity: 0.95,
                            color: '#8a8888'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [0.1, 0.080, 0.1, 0.11, 0.1, 0.1, 0.11, 0.080]
                    }
                ]
            }
       }
    },
    components: {
        VEcharts,
    }
}

    
    
</script>
