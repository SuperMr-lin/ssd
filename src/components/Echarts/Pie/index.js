import React from 'react';
import ReactEcharts from 'echarts-for-react';
// 引入 ECharts 主模块
//import echarts from './node_modules/echarts/lib/echarts';
import echarts from "echarts";

//获取第一个key
const getFirstAttr = (a) => {
    for (var k in a) return k;
}
const getOption = (data, echartsTitle) => {
    const xAxisDate = [];
    const seriesDate = [];
    const echartsDate = data;
    let name = '';
    let seriesDatelist = {};
    for (var i = 0; i < echartsDate.length; i++) {
        for (var key in echartsDate[i]) {
            name = getFirstAttr(echartsDate[i]);
        }
        xAxisDate.push(echartsDate[i][name]);
        seriesDatelist = {};
        seriesDatelist.name = echartsDate[i][name].toString().trim();
        let serVal = echartsDate[i][key];
        seriesDatelist.value = serVal.toString().replace("%", "");
        seriesDate.push(seriesDatelist);
    }
    const option = {
        title: {
            text: echartsTitle,
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: xAxisDate
        },

        series: [
            {
                name: '',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                labelLine: {
                    normal: {
                        length: 15
                    }
                },
                label: {
                    normal: {
                        formatter: '{b|{b}}\n{c} {per|{d}%}',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        fontSize: 16,
                        rich: {
                            b: {
                                fontSize: 14,
                                align: 'center',
                                lineHeight: 20
                            },
                            c: {
                                fontSize: 14,
                                lineHeight: 33,
                                align: 'center'
                            },
                            per: {
                                color: '#000',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2,
                                align: 'center'
                            }
                        }
                    }
                },
                data: seriesDate,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 15,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    return option;
}
const EchartsPie = (props) => {
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


export default EchartsPie;