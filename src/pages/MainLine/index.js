import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import DatePicker from '../../components/DatePicker';
import EchartsLine from '../../components/Echarts/Line';
import { Layout, Form, Alert } from 'antd';

const {
    Header, Content
} = Layout;

@connect(({ echarts }) => ({
    echarts
}))
class MainExpenseAnalysis extends Component {
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
                loading: true,
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
                    this.setState(() => ({
                        tjrq: currentdate
                    }))
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
        const xAxisDate = [];
        const seriesDate = [];
        const echartsDate = data;
        let name = '';
        for (var i = 0; i < echartsDate.length; i++) {
            for (var key in echartsDate[i]) {
                name = this.getFirstAttr(echartsDate[i]);
            }
            xAxisDate.push(echartsDate[i][name]);
            seriesDate.push(echartsDate[i][key]);

        }
        const option = {
            title: {
                text: echartsTitle
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
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
            series: [
                {
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data: seriesDate
                }
            ]
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
                <Content >
                    {
                        echarts.code === 0 ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : <EchartsLine option={this.state.option} />
                    }
                </Content>
            </Layout>

        )

    }
}


export default Form.create()(MainExpenseAnalysis);


