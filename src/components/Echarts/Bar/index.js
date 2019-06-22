import React from 'react';
import ReactEcharts from 'echarts-for-react';
// 引入 ECharts 主模块
import echarts from 'echarts';


//获取第一个key
const getFirstAttr = (a) => {
    for (var k in a) return k;
}
const getOption = (data, echartsTitle) => {
    let legendShow = true;
    const echartsDate = data;
    const xAxisDate = ['product'];
    const sourceDate = [], seriesStyle = [];
    const PieDate = [], Datename = [];
    let isPercentage = 0;
    const seriesDateChild = {
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'insideBottom',
                rotate:90,
                align:"left",
                verticalAlign:"middle",
                formatter: function (params) {
                    const { seriesIndex, data, seriesName}=params;
                    let name = seriesName;
                    let val = data[(seriesIndex+1)];
                    return val;
                    return name + " : " + val;
                },
               // fontSize: 16,   
                rich: {
                    name: {
                        textBorderColor: '#fff'
                    }
                }
            }
        }
    }
    const seriesDateChild2 = {
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'insideBottom',
                formatter: function (params) {
                    let tmp = params.value;
                    let len = tmp.length - 1;
                    return tmp[len] + "%"
                }
            }
        }
    }
    for (let i = 0, Bartmp, Pietmp, name; i < echartsDate.length; i++) {
        Bartmp = [];
        Pietmp = {};
        if (i === 0) {
            for (var key in echartsDate[i]) {
                name = getFirstAttr(echartsDate[i]);
                Datename.push(key);
            }
        }
        xAxisDate.push(echartsDate[i][name]);
        for (let j = 0; j < Datename.length; j++) {
            let element = echartsDate[i][Datename[j]].toString().trim();
            if (element.indexOf("%") > -1) {
                isPercentage = j;
                Bartmp.push(element.replace("%", ""));
            } else {
                Bartmp.push(element);
            }

        }

        Pietmp.value = Bartmp[Bartmp.length - 1].replace("%", "");
        Pietmp.name = echartsDate[i][Datename[0]].toString().trim();
        PieDate.push(Pietmp);
        //Bartmp.pop();
        sourceDate.push(Bartmp);
    }
    for (let k = 1; k < sourceDate[0].length; k++) {
        if (k === isPercentage) {
            //添加百分比
            seriesStyle.push(seriesDateChild2)
        } else {
            seriesStyle.push(seriesDateChild)
        }
    }
    sourceDate.unshift(Datename);
    //
    if (seriesStyle.length < 2){
        legendShow = false;
        seriesStyle[0]={};
        seriesStyle[0]={
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideBottom',
                    rotate: 90,
                    align: "left",
                    verticalAlign: "middle",
                    formatter: function (params) {
                        const { seriesIndex, data, name } = params;
                        //let name = seriesName;
                        let val = data[(seriesIndex + 1)];
                        return val;
                    },
                   // fontSize: 16,
                    rich: {
                        name: {
                            textBorderColor: '#fff'
                        }
                    }
                }
            }
        }
    }
    var dataZoom=[];
    if (sourceDate.length>10){
        dataZoom=[
            {
                show: true,
                realtime: true,
                start: 1,
                end: 10
            },
            {
                type: 'inside',
                realtime: true,
                start: 1,
                end: 10
            },
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: true,
                left: '93%'
            }
        ]
    }
    const option = {
        title: {
            text: echartsTitle,
            x: 'center'
        },
        legend: {
            show: legendShow,
            orient: 'vertical',
            left: 'left',
        },
        tooltip: {
        },
        dataZoom: dataZoom,
        dataset: {
            source: sourceDate
        },
        grid: {
            left: '120px',
            right: '10%',
            bottom: '10%',
            top:"10%",
            containLabel: true
        },
        xAxis: { 
            type: 'category',
            axisLabel: {
                rotate: 60
            },
         },
        yAxis: {
        },
        series: seriesStyle
    };
    return option;
}
const EchartsBar = (props) => {
    const { optionData, echartsTitle } = props;
    return (
        <ReactEcharts
            echarts={echarts}
            option={getOption(optionData, echartsTitle)}
            style={{ minHeight: '500px', minWidth: '400px', margin: '0 auto', width: '100%', height: '100%' }}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />
    )
}


export default EchartsBar;