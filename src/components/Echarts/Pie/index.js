import React from 'react';
import ReactEcharts from 'echarts-for-react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';



const EchartsPie = (props) => {
    

    return (
        <ReactEcharts
            echarts={echarts}
            option={props.option}
            style={{ minHeight: '500px', minWidth: '500px', width: '100%', height: '100%',margin:'0 auto' }}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />
    )
}


export default EchartsPie;