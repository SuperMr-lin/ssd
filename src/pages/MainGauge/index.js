import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Layout, Row, Col, Form, Card, Alert } from 'antd';
import moment from 'moment';
import Gauge from '../../components/Echarts/Gauge';
import DatePicker from '../../components/DatePicker';

import styles from "./index.less";


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
            tjrq: "",
            loading:false,
            picker: this.props.location.state.picker,
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
            let dateFormat;
            if (this.state.picker === "MonthPicker") {
                dateFormat = 'YYYY-MM';
            } else {
                dateFormat = 'YYYY-MM-DD';
            }
            currentdate = moment().day(0).format(dateFormat);
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
            if(res.code===1){
                let { mzdysrzb, mznsrzb, qydysrzb, qynsrzb, zydysrzb, zynsrzb } = res.echartsData[0];
                mzdysrzb = mzdysrzb.replace("%", "")
                mznsrzb = mznsrzb.replace("%", "")
                qydysrzb = qydysrzb.replace("%", "")
                qynsrzb = qynsrzb.replace("%", "")
                zydysrzb = zydysrzb.replace("%", "")
                zynsrzb = zynsrzb.replace("%", "")
                this.setState({
                    tjrq: currentdate,
                    loading: true,
                    option: {
                        mzdysrzb: mzdysrzb,
                        mznsrzb: mznsrzb,
                        qydysrzb: qydysrzb,
                        qynsrzb: qynsrzb,
                        zydysrzb: zydysrzb,
                        zynsrzb: zynsrzb
                    }
                })
            }
            
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                let currentdate;
                if (this.state.picker === "MonthPicker") {
                    currentdate = values['date-picker'].format('YYYY-MM');
                } else {
                    currentdate = values['date-picker'].format('YYYY-MM-DD');
                }
                if (this.state.tjrq === currentdate) {
                    return;
                } else {
                    this.getKpiInfo(currentdate);
                }
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { mzdysrzb, mznsrzb, qydysrzb, qynsrzb, zydysrzb, zynsrzb,loading } = this.state.option;
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
                <Content className="main_container">
                    {
                        !loading ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : (
                            <Fragment>
                                <Row>
                                    <Col md={12} xs={24} lg={12} className={styles.card_box}>
                                        <Card title="全院年收入指标" bodyStyle={{ minHeight: "450px" }} >
                                            <Gauge echartsTitle="" optionData={qynsrzb} />
                                        </Card>
                                    </Col>
                                    <Col md={12} xs={24} lg={12} className={styles.card_box}>
                                        <Card title="全院当月收入指标" bodyStyle={{ minHeight: "450px" }} >
                                            <Gauge echartsTitle="" optionData={qydysrzb} />
                                        </Card>
                                    </Col>
                                    <Col md={12} xs={24} lg={12} className={styles.card_box}>
                                        <Card title="门诊年收入指标" bodyStyle={{ minHeight: "450px" }} >
                                            <Gauge echartsTitle="" optionData={mznsrzb} />
                                        </Card>
                                    </Col>
                                    <Col md={12} xs={24} lg={12} className={styles.card_box}>
                                        <Card title="门诊当月收入指标" bodyStyle={{ minHeight: "450px" }} >
                                            <Gauge echartsTitle="" optionData={mzdysrzb} />
                                        </Card>
                                    </Col>
                                    <Col md={12} xs={24} lg={12} className={styles.card_box}>
                                        <Card title="住院年收入指标" bodyStyle={{ minHeight: "450px" }} >
                                            <Gauge echartsTitle="" optionData={zynsrzb} />
                                        </Card>
                                    </Col>
                                    <Col md={12} xs={24} lg={12} className={styles.card_box}>
                                        <Card title="住院当月收入指标" bodyStyle={{ minHeight: "450px" }} >
                                            <Gauge echartsTitle="" optionData={zydysrzb} />
                                        </Card>
                                    </Col>
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
