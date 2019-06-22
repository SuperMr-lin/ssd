import React from 'react';
import ReactEcharts from 'echarts-for-react';
// 引入 ECharts 主模块
import echarts from 'echarts';


//获取第一个key
const getFirstAttr = (a) => {
    for (var k in a) return k;
}
const getOption = (data, echartsTitle) => {
    console.log(data)
    const echartsDate = data;
    const yAxisDate = [];
    const sourceDate = [];
    const Datename = [], legendData=[];
    let seriesDateChild1 = {
        name: '',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    const { data} = params;
                    return Math.abs(data);
                },
            }
        },
        data: []
    };
    let seriesDateChild2 = {
        name: '',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true
            }
        },
        data: []
    }
    for (let i = 0, Bartmp,  name; i < echartsDate.length; i++) {
        Bartmp = [];
        if (i === 0) {
            for (var key in echartsDate[i]) {
                name = getFirstAttr(echartsDate[i]);
                Datename.push(key);
            }
        }
        yAxisDate.push(echartsDate[i][name]);
        for (let j = 1; j < Datename.length; j++) {
            
            if(j>1){
                seriesDateChild2.name = Datename[j];
                seriesDateChild2.data.push(echartsDate[i][Datename[j]])
            }else{
                seriesDateChild1.name = Datename[j];
                seriesDateChild1.data.push((0-echartsDate[i][Datename[j]]))
            }
            //Bartmp.push(element);
            //Bartmp.splice(0,1);
        }
    }
    sourceDate.push(seriesDateChild1);
    sourceDate.push(seriesDateChild2);
   
    console.log(Datename)
    const option = {
        title: {
            text: echartsTitle,
            x: 'center'
        },
        legend: {
            data: Datename.splice(1, Datename.length),
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                let val = "" + params[0].axisValueLabel +"<br />";
                for (let i = 0; i < params.length; i++) {
                    const { seriesName,data } = params[i];
                    val += seriesName + ":" + Math.abs(data) +"<br />";
                }
                return val;
               
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: { 
            type: 'value'
         },
        yAxis: [
            {
                type: 'category',
                    axisTick : { show: false },
                data: yAxisDate
            }
        ],
        series: sourceDate
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