import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout, Form, Alert } from 'antd';
import moment from 'moment';
import Bar from '../../components/Echarts/Bar';
import DatePicker from '../../components/DatePicker';
// import { getEchartsList, handleSubmit} from '../../utils/getEcharts';


const {
    Header, Content
} = Layout;
@connect(({ echarts }) => ({
    echarts
}))

class MainSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tjrq: "",
            picker:this.props.location.state.picker,
            echartsTitle: this.props.location.query.name,
            option: {}
        }
    }
    componentDidMount() {
        this.getEchartsList("");
    }

    componentWillUpdate(nextProps) {
        // console.log('componentWillUpdate')
        if (nextProps.location.state.type === this.props.location.state.type) {
            return;
        } else {
            this.setState(
                {
                    echartsTitle: this.props.location.query.name
                }, () => {
                    this.getEchartsList("");
                });
        }
    }
    getEchartsList = (currentdate) => {
        const { dispatch } = this.props;
        if (currentdate === "") {
            const dateFormat = 'YYYY-MM-DD';
            currentdate = moment().format(dateFormat);
        }
        const echartsUrl = this.props.location.state.type;
        const payload = {
            tjrq: currentdate,
            echartsUrl: echartsUrl
        }
        dispatch({
            type: 'echarts/fetchEcharts',
            payload: { payload }
        }).then((res) => {
            const echartsTitle = this.props.location.query.name;
            const NewOption = this.getOption(res, echartsTitle);
            this.setState({
                tjrq: currentdate,
                option: NewOption
            })
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                const currentdate = values['date-picker'].format('YYYY-MM-DD');
                if (this.state.tjrq === currentdate) {
                    return;
                } else {
                    this.getEchartsList(currentdate);
                }
            }
        });
    }
    //获取第一个key
    getFirstAttr = (a) => {
        for (var k in a) return k;
    }
    getOption = (data, echartsTitle) => {
        const echartsDate = data;
        const xAxisDate = ['product'];
        const sourceDate = [],seriesStyle=[];
        const PieDate = [], Datename = [];
        let isPercentage=0;
        const seriesDateChild = {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
        }
        const seriesDateChild2 = {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
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
                    name = this.getFirstAttr(echartsDate[i]);
                    Datename.push(key);
                }
            }
            xAxisDate.push(echartsDate[i][name]);
            for (let j = 0; j < Datename.length; j++) {
                let element = echartsDate[i][Datename[j]].toString();
                if (element.indexOf("%")>-1){
                    isPercentage=j;
                    Bartmp.push(element.replace("%", ""));
                }else{
                    Bartmp.push(element);
                }

            }

            Pietmp.value = Bartmp[Bartmp.length-1].replace("%","");
            Pietmp.name = echartsDate[i][Datename[0]];
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
        // for (let i = 0, Bartmp, Datename = [], Pietmp, name; i < echartsDate.length; i++) {
        //     Bartmp = [];
        //     Pietmp = {};
        //     if (i === 0) {
        //         for (var key in echartsDate[i]) {
        //             name = this.getFirstAttr(echartsDate[i]);
        //             Datename.push(key);
        //         }
        //     }
        //     xAxisDate.push(echartsDate[i][name]);
        //     for (let j = 0; j < Datename.length; j++) {
        //         let element = echartsDate[i][Datename[j]].toString();
        //         if (element.indexOf("%")>-1){
        //             isPercentage=j;
        //             Bartmp.push(element.replace("%", ""));
        //         }else{
        //             Bartmp.push(element);
        //         }
                
        //     }
            
        //     Pietmp.value = Bartmp[Bartmp.length-1].replace("%","");
        //     Pietmp.name = echartsDate[i][Datename[0]];
        //     PieDate.push(Pietmp);
        //     //Bartmp.pop();
        //     sourceDate.push(Bartmp);
        // }
        // var NewxAxisDate = ['Product', "医生收入", "药品收入","药品占比"];
        // for (let k = 1; k < sourceDate[0].length; k++) {
        //     if (k === isPercentage) {
        //         //添加百分比
        //         seriesStyle.push(seriesDateChild2)
        //     } else {
        //         seriesStyle.push(seriesDateChild)
        //     }
        // }
        // sourceDate.unshift(NewxAxisDate);
        const option = {
            title: {
                text: echartsTitle,
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            tooltip: {},
            dataset: {
                source: sourceDate
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: seriesStyle
        };
        return option;
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        const { echarts } = this.props;
        return (
            <Layout style={{ height: '100%' }}>
                <Header style={{ background: '#fff' }}>
                    <DatePicker
                        getFieldDecorator={getFieldDecorator}
                        handleSubmit={this.handleSubmit}
                        picker={this.state.picker}
                    />
                </Header>
                <Content>
                    {
                        echarts.code === 0 ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : <Bar option={this.state.option} />
                    }

                </Content>
            </Layout>
        );
    }


}
export default Form.create()(MainSimple);
