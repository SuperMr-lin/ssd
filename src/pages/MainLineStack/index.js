import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import DatePicker from '../../components/DatePicker';
import EchartsLine from '../../components/Echarts/Line';
import { Layout, Form, Alert  } from 'antd';        

const {
    Header, Content
} = Layout;

@connect(({ echarts  }) => ({
    echarts
}))
class MainLineStack extends Component {
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
    getOption = (data, echartsTitle) => {
        const echartsDate = data;
        const echartsTitle_Key = Object.keys(echartsDate[0]);
        const legendDate = echartsTitle_Key.slice(0, echartsTitle_Key.length-1);
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


export default Form.create()(MainLineStack);


