import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout, Form, Alert  } from 'antd';
import moment from 'moment';
import Cards from '../../components/Cards';
import DatePicker from '../../components/DatePicker';



const {
    Header, Content
} = Layout;
@connect(({ card}) => ({
    card
}))
class MainReport extends Component {
    constructor(props){
        super(props);
        this.state={
            tjrq: "",
            cardData:{}
        }
    }
    componentWillMount() {
        this.getCardInfo("");
    }
    getCardInfo = (currentdate) => {
        const { dispatch } = this.props;
        if (currentdate === "") {
            const dateFormat = 'YYYY-MM-DD';
            currentdate = moment().format(dateFormat);
        }
        // const echartsUrl = this.props.location.state.type;
        const echartsUrl = '/Report/DeansDaily';
        const payload = {
            tjrq: currentdate,
            echartsUrl: echartsUrl
        }
        dispatch({
            type: 'card/fetchDeansDaily',
            payload: {payload}
        }).then((res)=>{
            const cardData = res[0];
            this.setState({
                tjrq: currentdate,
                cardData: cardData,
            })
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
                    this.getCardInfo(currentdate);
                }
            }
        });
    }
    render() {
        const { cardData } = this.state;
        const { getFieldDecorator } = this.props.form;
        const { card } = this.props;
        return (
            <Layout style={{ height: '100%' }}>
                <Header style={{ background: '#fff' }}>
                    <DatePicker
                        getFieldDecorator={getFieldDecorator}
                        handleSubmit={this.handleSubmit}
                    />
                </Header>
                <Content className="main_container">
                    {
                        card.code === 0 ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : <Cards card={cardData} />
                    }
                </Content>
            </Layout>
        );
    }

}

export default Form.create()(MainReport) ;
