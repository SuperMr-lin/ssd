import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout, Row, Col, Form } from 'antd';
import moment from 'moment';
import Gauge from '../../components/Echarts/Gauge';
import DatePicker from '../../components/DatePicker';



const {
    Header, Content
} = Layout;
@connect(({ echarts }) => ({
    echarts,
}))
class MainSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tjrq: "",
            picker: this.props.location.state.picker,
            option0: {},
            option1: {},
            option2: {},
            option3: {},
            option4: {}
        }
    }
    componentDidMount() {
        this.getEchartsInfo("");
    }
    getEchartsInfo = (currentdate) => {
        if (currentdate === "") {
            const dateFormat = 'YYYY-MM-DD';
            currentdate = moment().format(dateFormat);
        }
        
        
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
                    this.getEchartsInfo(currentdate);
                }
            }
        });
    }
    //按时间周期和病人年龄组分类的比例图
    getEcharts0 = (currentdate)=>{
        const { dispatch } = this.props;
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
    //pie
    getOptionPie = (data, echartsTitle) => {
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
            seriesDatelist = {};
            seriesDatelist.name = echartsDate[i][name];
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
    //line
    getOptionLine = (data, echartsTitle) => {
        const echartsDate = data;
        const echartsTitle_Key = Object.keys(echartsDate[0]);
        const legendDate = echartsTitle_Key.slice(0, echartsTitle_Key.length - 1);
        const seriesDate = [];
        const xAxisDate = [];
        let seriesChildren = {};
        for (let k = 0; k < legendDate.length; k++) {
            const element = legendDate[k];
            seriesChildren = {
                name: element,
                type: 'line',
                data: []
            }
            seriesDate.push(seriesChildren);
        }

        for (let i = 0; i < echartsDate.length; i++) {
            for (let j = 0; j < echartsTitle_Key.length; j++) {
                const element = echartsTitle_Key[j];
                if (j === echartsTitle_Key.length - 1) {
                    xAxisDate.push(echartsDate[i][element])
                } else {
                    seriesDate[j].data.push(echartsDate[i][element]);
                }
            }
        }
        const option = {
            title: {
                text: echartsTitle
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: legendDate
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xAxisDate
            },
            yAxis: {
                type: 'value'
            },
            series: seriesDate
        };

        return option;
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { option } = this.state;
        console.log(option)
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
                    <Row>
                        <Col span={8}></Col>
                        
                    </Row>
                    <Row>
                        
                    </Row>
                </Content>
            </Layout>

        );
    }

}

export default Form.create()(MainSource);
