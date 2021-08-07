<template>
  <div class="test">
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
                    <h3>Programming Language Breakdown</h3>
                    <h6>(in %)</h6>
                    <v-echarts v-bind:option="option1" style="height: 500px" />
                </div>
                <div class="simple-visualisation2">
                    <h3>Contribution Pie Chart</h3>
                    <h6>(by Number of Commits)</h6>
                    <v-echarts v-bind:option="option2" style="height: 500px" />
                </div>
                <div class="wide-visualisation">
                    <h3>Lines of Code over Time</h3>
                    <v-echarts v-bind:option="option3" style="height: 500px" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped> </style>


<script>

    import { VEcharts } from 'vue3-echarts';
    
    export default {
    name: 'SingleRepository',
     data () {
      return {
          option1:  {
                title: {
                    subtext: 'in %',
                    textstyle: {
                        color: "#ffffff",
                        fontFamily: "Montserrat"
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // Use axis to trigger tooltip
                        type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {
                    data: ['Python', 'C++', 'Go', 'Java', 'R'],
                    top: 'bottom'
                },
                yAxis: {
                    type: 'value'
                },
                xAxis: {
                    type: 'category',
                    data: ["microsoft/vscode", "ios/xcode"]
                },
                series: [
                    {
                        name: 'Python',
                        type: 'bar',
                        stack: 'total',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [30, 10]
                    },
                    {
                        name: 'C++',
                        type: 'bar',
                        stack: 'total',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [10, 5]
                    },
                    {
                        name: 'Go',
                        type: 'bar',
                        stack: 'total',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [20, 35]
                    },
                    {
                        name: 'Java',
                        type: 'bar',
                        stack: 'total',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [15, 35]
                    },
                    {
                        name: 'R',
                        type: 'bar',
                        stack: 'total',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [25, 15]
                    }
                ]
            },
            option2: {
                title: {
                    subtext: 'By Total Number of Commits',
                    left: 'center'
                },
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
            option3: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} K'
                    },
                    axisPointer: {
                        snap: true
                    }
                },
                visualMap: {
                    show: false,
                    dimension: 0,
                    pieces: [{
                        lte: 6,
                        color: 'green'
                    }, {
                        gt: 6,
                        lte: 8,
                        color: 'red'
                    }, {
                        gt: 8,
                        lte: 14,
                        color: 'green'
                    }, {
                        gt: 14,
                        lte: 17,
                        color: 'red'
                    }, {
                        gt: 17,
                        color: 'green'
                    }]
                },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        data: [10, 28, 88, 260, 270, 280, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                        markArea: {
                            itemStyle: {
                                color: 'rgba(255, 173, 177, 0.4)'
                            },
                            data: [ [{
                                name: 'Neural Network Update',
                                xAxis: 'Jul'
                            }, {
                                xAxis: 'Sep'
                            }] ]
                        }
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
