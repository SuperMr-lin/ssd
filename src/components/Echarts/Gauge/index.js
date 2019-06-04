import React from 'react';
import ReactEcharts from 'echarts-for-react';
// 引入 ECharts 主模块
import echarts from 'echarts';

const getOption = (data, echartsTitle) => {
    const option = {
        title: {
            text: echartsTitle,
            left: 'center',
            top: '10'
        },
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
            {
                name: '',
                type: 'gauge',
                splitNumber: 10,
                axisTick: {            // 坐标轴小标记
                    show: true
                },
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 10,
                        color: [[0.2, '#c23531'], [0.8, '#63869e'], [1, '#91c7ae']]
                    },
                },
                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 10
                },
                detail: {
                    formatter: '{value}%',
                    // fontSize: 22,
                    offsetCenter: [0, '100%'],  // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                    }
                },
                data: [{ "value": data }]
            }
        ]
    }
    return option;
}
const EchartsGauge = (props) => {
    const { optionData, echartsTitle } = props;
    return (
        <ReactEcharts
            echarts={echarts}
            option={getOption(optionData, echartsTitle)}
            style={{ minHeight: '400px', minWidth: '400px', margin: '0 auto', width: '100%', height: '100%' }}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />
    )
}

export default EchartsGauge;