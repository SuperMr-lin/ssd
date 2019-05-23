import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import DatePicker from '../../components/DatePicker';
import EchartsPie from '../../components/Echarts/Pie';
import { Layout, Form, Alert } from 'antd';

const {
    Header, Content
} = Layout;

@connect(({ echarts, card }) => ({
    echarts,
    card
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
        let seriesDatelist = {};
        for (var i = 0; i < echartsDate.length; i++) {
            for (var key in echartsDate[i]) {
                name = this.getFirstAttr(echartsDate[i]);
            }
            xAxisDate.push(echartsDate[i][name]);
            seriesDatelist={};
            seriesDatelist.name = echartsDate[i][name];
            let serVal = echartsDate[i][key];
            seriesDatelist.value = serVal.toString().replace("%","");
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
                        echarts.code === 0 ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : <EchartsPie option={this.state.option} />
                    }
                </Content>
            </Layout>

        )

    }
}


export default Form.create()(MainExpenseAnalysis);


