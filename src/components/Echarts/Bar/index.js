import React  from 'react';
import ReactEcharts from 'echarts-for-react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';


const EchartsBar=(props)=>{
    return(
        <ReactEcharts
            echarts={echarts}
            option={props.option}
            style={{ minHeight: '600px', minWidth: '400px', margin: '0 auto', width: '100%', height: '100%' }}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />
    )
}


export default EchartsBar;