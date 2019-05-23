import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout, Form, Card,  Alert  } from 'antd';
import moment from 'moment';
import DatePicker from '../../components/DatePicker';
import styles from './index.less';
import { tableTitleTh } from '../../utils/tableTitleCfg';




const {
    Header, Content
} = Layout;
@connect(({ card }) => ({
    card
}))
class MainTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tjrq: "",
            picker:this.props.location.state.picker,
            tableThList: [],
            tableTitle: this.props.location.query.name,
            tableData: []
        }
    }
    componentWillMount() {
        this.getNewThList();
        this.getTableInfo("");
    }
    componentWillUpdate(nextProps) {
        // console.log('componentWillUpdate')
        if (nextProps.location.state.type === this.props.location.state.type) {
            return;
        } else {
            this.setState(
                {
                    tableTitle: this.props.location.query.name
                }, () => {
                    this.getNewThList();
                    this.getTableInfo("");
                });
        }
    }
    getNewThList=()=>{
        const tableId = this.props.location.state.id;
        const NewThList = this.SetMenuList(tableId);
        this.setState(() => ({
            tableThList: NewThList[0].list
        }))
    }
    //提取对应子菜单
    SetMenuList = (key) => {
        return tableTitleTh.filter((e) => {
            return e.id == key;
        })
    }
    //获取表格标题
    // getTableTitle = (s) => {
    //     return eval('table_' + s);
    // }
    getTableInfo = (currentdate) => {
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
            type: 'card/fetchDeansDaily',
            payload: { payload }
        }).then((res) => {
            const cardData = res;
            let tableDatelist = [];
            for (var i = 0; i < cardData.length; i++) {
                let seriesDatelist = [];
                for (var key in cardData[i]) {
                    seriesDatelist.push(cardData[i][key]);
                }
                tableDatelist.push(seriesDatelist);
            }
            this.setState({
                loading: true,
                tjrq: currentdate,
                tableData: tableDatelist
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
                    this.getTableInfo(currentdate);
                }
            }
        });
    }
  
    getTableHtml = (tableThList, tableData) => {
        return (
            <table className={styles.MainTable_table} >
                <thead>
                    <tr>
                        {
                            tableThList.map((item,index) => {
                                return (
                                    <th key={index}>{item}</th>
                                )
                            })
                        }
                    </tr>

                </thead>
                <tbody>
                    {
                        tableData.map((item, j) => {
                            return (
                                <tr key={j}>
                                    {
                                        item.map((itemChild, k) => {
                                            return (
                                                <td key={k} >{itemChild}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        )
    }

    render() {
        const {tableTitle, tableData, tableThList } = this.state;
        const { getFieldDecorator } = this.props.form;
        const { card } = this.props;
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
                        card.code === 0 ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : (
                            <Card title={tableTitle} style={{ marginTop: '50px' }}>
                                {this.getTableHtml(tableThList, tableData)}
                            </Card>
                        )
                    }
                    
                </Content>
            </Layout>
        );
    }

}
// <Table columns={columns} dataSource={data} />

export default Form.create()(MainTable);
