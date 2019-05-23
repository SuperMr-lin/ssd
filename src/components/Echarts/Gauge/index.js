import React from 'react';
import ReactEcharts from 'echarts-for-react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入仪表盘模块
import 'echarts/lib/chart/gauge';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
const EchartsGauge = (props) => {
    return (
        <ReactEcharts
            echarts={echarts}
            option={props.option}
            style={{ minHeight: '400px', minWidth: '400px', margin: '0 auto', width: '100%', height: '100%' }}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />
    )
}

export default EchartsGauge;