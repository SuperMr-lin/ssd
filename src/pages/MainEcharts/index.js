import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout, Row, Col, Form, Card, Alert, Anchor } from 'antd';
import moment from 'moment';
import DatePicker from '../../components/DatePicker';
import AnchorRight from '../../components/Anchor';

import EchartsBar from '../../components/Echarts/Bar';
import EchartsPie from '../../components/Echarts/Pie';
import EchartsLine from '../../components/Echarts/Line';
import EchartsGauge from '../../components/Echarts/Gauge';

import styles from "./index.less";

const { Link } = Anchor;
const {
    Header, Content, Sider
} = Layout;
@connect(({ echarts,table }) => ({
    echarts,
    table
}))
class MainSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tjrq: "",
            loading: false,
            echartsDatelist: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                let currentdate;
                if (this.props.location.state.picker === "MonthPicker") {
                    currentdate = values['date-picker'].format('YYYY-MM');
                } else {
                    currentdate = values['date-picker'].format('YYYY-MM-DD');
                }
                if (this.state.tjrq === currentdate) {
                    return;
                } else {
                    this.setState({
                        tjrq: "",
                        echartsDatelist: []
                    }, () => {
                            this.getEchartsInfo(currentdate);
                    })
                }
            }
        });
    }
    componentDidMount() {
        this.getEchartsInfo("");
    }
    componentWillUpdate(nextProps) {
        if (nextProps.location.state.id === this.props.location.state.id) {
            return;
        } else {
            this.setState({
                echartsDatelist: []
            }, () => {
                this.getEchartsInfo(this.state.tjrq);
            })
        }
    }
    getEchartsInfo = (currentdate) => {
        if (currentdate === "") {
            let dateFormat;
            if (this.props.location.state.picker === "MonthPicker") {
                dateFormat = 'YYYY-MM';
            } else {
                dateFormat = 'YYYY-MM-DD';
            }
            currentdate = moment().format(dateFormat);
        }
        const listEcharts = this.props.location.state.echarts;
        for (const iterator of listEcharts) {
            const { type, name, url } = iterator
            this.PostEchartsData(currentdate, type, name, url)
        }
    }
    //
    PostEchartsData = (tjrq, echartsType, echartsName, echartsUrl) => {
        const { dispatch } = this.props;
        const payload = {
            tjrq: tjrq,
            echartsName: echartsName,
            echartsType: echartsType,
            echartsUrl: echartsUrl
        }
        dispatch({
            type: 'echarts/fetchEcharts',
            payload: { payload }
        }).then((res) => {
            console.log(res);
            let newEchartsDatelist = this.state.echartsDatelist;
            newEchartsDatelist.push(res)
            this.setState({
                tjrq: tjrq,
                loading: true,
                echartsDatelist: newEchartsDatelist
            })
        })
    }
    //
    setEchartsHtml = (code, echartsType, echartsName, echartsData) => {
        if (echartsType === "bar") {
            return (
                code === 0 ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : <EchartsBar optionData={echartsData} echartsTitle={echartsName} />
            )
        } else if (echartsType === "pie") {
            return (
                code === 0 ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : <EchartsPie optionData={echartsData} echartsTitle={echartsName} />
            )
        } else if (echartsType === "line") {
            return (
                code === 0 ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : <EchartsLine optionData={echartsData} echartsTitle={echartsName} />
            )

        } else if (echartsType === "gauge") {
            return (
                code === 0 ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : <EchartsGauge optionData={echartsData} echartsTitle={echartsName} />
            )

        } 
    }
    //
    AnchorListInfo=()=>{
        const { echartsDatelist }=this.state;
        let AnchorList=[];
        for (let i = 0; i < echartsDatelist.length; i++) {
            let AnchorListChild = {};
            const { echartsName } = echartsDatelist[i];
            AnchorListChild.href ="echarts-"+i;
            AnchorListChild.title = echartsName;
            AnchorList.push(AnchorListChild);
        }
        return AnchorList;
    }
    //
    DatePickerInfoTime = () => {
        let dateFormat="";
        let currentdate = this.state.tjrq;
        if (this.props.location.state.picker === "MonthPicker") {
            dateFormat = 'YYYY-MM';
        } else {
            dateFormat = 'YYYY-MM-DD';
        }
        if (currentdate===""){
             currentdate = moment().format(dateFormat);
        }else{
            currentdate = moment(currentdate).format(dateFormat);
        }
        return currentdate
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { echartsDatelist, loading } = this.state;
        return (
            <Layout style={{ height: '100%' }}>
                <Header style={{ background: '#fff' }}>
                    <DatePicker
                        initialValue={this.DatePickerInfoTime()}
                        picker={this.props.location.state.picker}
                        getFieldDecorator={getFieldDecorator}
                        handleSubmit={this.handleSubmit}
                    />
                </Header>
                <Content id="main_container" className="main_container">
                    
                    <Row>
                        {
                            loading && echartsDatelist.map((item,index) => {
                                const { echartsName, echartsType, echartsData, code } = item;
                                if (echartsDatelist.length === 1) {
                                    return (
                                        <Col key={"echarts-" + index} md={24} xs={24} className={styles.card_box} >
                                            <Card id={"echarts-" + index} title={echartsName} bodyStyle={{ minHeight: "650px" }} >
                                                {
                                                    this.setEchartsHtml(code, echartsType, "", echartsData)
                                                }
                                            </Card>
                                        </Col>
                                    )

                                } else {
                                    return (
                                        <Col key={"echarts-" + index} md={24} xs={24} lg={24} className={styles.card_box} >
                                            <Card id={"echarts-" + index} title={echartsName} bodyStyle={{ minHeight: "450px" }} >
                                                {
                                                    this.setEchartsHtml(code, echartsType, "", echartsData)
                                                }
                                            </Card>
                                        </Col>
                                    )
                                }

                            })
                        }
                    </Row>
                    
                </Content>

            </Layout>

        );
    }

}

export default Form.create()(MainSource);
