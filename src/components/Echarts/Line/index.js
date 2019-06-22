import React from 'react';
import ReactEcharts from 'echarts-for-react';
// 引入 ECharts 主模块
import echarts from 'echarts';


const getOption = (data, echartsTitle) => {
    const echartsDate = data;
    const echartsTitle_Key = Object.keys(echartsDate[0]);
    const legendDate = echartsTitle_Key.slice(0, echartsTitle_Key.length - 1);
    const seriesDate = [];
    const xAxisDate = [];
    let seriesChildren = {};
    for (let k = 0; k < legendDate.length; k++) {
        const element = legendDate[k];
        seriesChildren = {
            name: element.toString().trim(),
            type: 'line',
            data: []
        }
        seriesDate.push(seriesChildren);
    }

    for (let i = 0; i < echartsDate.length; i++) {
        for (let j = 0; j < echartsTitle_Key.length; j++) {
            const element = echartsTitle_Key[j];
            if (j === echartsTitle_Key.length - 1) {
                xAxisDate.push(echartsDate[i][element])
            } else {
                seriesDate[j].data.push(echartsDate[i][element]);
            }
        }
    }
    var dataZoom = [];
    if (seriesDate[0].data.length > 30) {
        dataZoom = [
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
            text: echartsTitle
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legendDate
        },
        dataZoom: dataZoom,
        grid: {
            left: '10%',
            right: '10%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisDate
        },
        yAxis: {
            type: 'value'
        },
        series: seriesDate
    };

    return option;
}
const EchartsLine=(props)=>{
    const { optionData,echartsTitle}=props; 
    return(
        <ReactEcharts
            echarts={echarts}
            option={getOption(optionData, echartsTitle)}
            style={{ minHeight: '500px', minWidth: '400px', margin: '0 auto', width: '100%', height: '100%'  }}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />
    )
}


export default EchartsLine;