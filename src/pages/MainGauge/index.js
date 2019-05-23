import React, { Component,Fragment } from 'react';
import { connect } from 'dva';
import { Layout, Row, Col, Form, Alert  } from 'antd';
import moment from 'moment';
import Gauge from '../../components/Echarts/Gauge';
import DatePicker from '../../components/DatePicker';



const {
    Header, Content
} = Layout;
@connect(({ echarts }) => ({
    echarts,
}))
class MainReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tjrq:"",
            picker:this.props.location.state.picker,
            option: {
                mzdysrzb: "",
                mznsrzb: "",
                qydysrzb: "",
                qynsrzb: "",
                zydysrzb: "",
                zynsrzb: "",
            }
        }
    }
    componentDidMount() {
        this.getKpiInfo("");
    }
    getKpiInfo = (currentdate) => {
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
            const cardData = res[0];
            this.setState({
                tjrq: currentdate,
                option: cardData
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
                    this.getKpiInfo(currentdate);
                }
            }
        });
    }
    getOption=(title,data)=> {
        const option = {
            title: {
                text: title,
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
                    data: [{"value":data}]
                }
            ]
        }
        return option;
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        const { mzdysrzb, mznsrzb, qydysrzb, qynsrzb, zydysrzb, zynsrzb } = this.state.option;
        const { echarts } = this.props;
        return (
            <Layout style={{ height: '100%' }}>
                <Header style={{ background: '#fff' }}>
                    <DatePicker
                        picker={this.state.picker}
                        getFieldDecorator={getFieldDecorator}
                        handleSubmit={this.handleSubmit}
                    />
                </Header>
                <Content>
                    {
                        echarts.code === 0 ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : (
                            <Fragment>
                                <Row>
                                    <Col span={8}><Gauge option={this.getOption("全院年收入指标", qynsrzb.substr(0, qynsrzb.length - 1))} /></Col>
                                    <Col span={8}><Gauge option={this.getOption("门诊年收入指标", mznsrzb.substr(0, mznsrzb.length - 1))} /></Col>
                                    <Col span={8}><Gauge option={this.getOption("住院年收入指标", zynsrzb.substr(0, zynsrzb.length - 1))} /></Col>
                                </Row>
                                <Row>
                                    <Col span={8}><Gauge option={this.getOption("全院当月收入指标", qydysrzb.substr(0, qydysrzb.length - 1))} /></Col>
                                    <Col span={8}><Gauge option={this.getOption("门诊当月收入指标", mzdysrzb.substr(0, mzdysrzb.length - 1))} /></Col>
                                    <Col span={8}><Gauge option={this.getOption("住院当月收入指标", zydysrzb.substr(0, zydysrzb.length - 1))} /></Col>
                                </Row>
                            </Fragment>
                        )
                    }
                    
                </Content>
            </Layout>
           
        );
    }

}

export default Form.create()(MainReport);
