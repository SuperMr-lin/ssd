import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout, Form, Card, Alert, Progress, Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import moment from 'moment';
import DatePicker from '../../components/DatePicker';
import styles from './index.less';
import { tableTitleTh } from '../../utils/tableTitleCfg';




const {
    Header, Content
} = Layout;
@connect(({ table }) => ({
    table
}))
class MainTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tjrq: "",
            picker: this.props.location.state.picker,
            tableThList: [],
            tableTitle: this.props.location.query.name,
            tableData: [],
            searchText: ""
        }
    }
    componentWillMount() {
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
                    this.getTableInfo(this.state.tjrq);
                });
        }
    }
    getNewThList = () => {
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
    getTableInfo = (currentdate) => {
        const { dispatch } = this.props;
        this.getNewThList();
        if (currentdate === "") {
            let dateFormat;
            if (this.state.picker === "MonthPicker") {
                dateFormat = 'YYYY-MM';
            } else {
                dateFormat = 'YYYY-MM-DD';
            }
            currentdate = moment().format(dateFormat);
        }
        const echartsUrl = this.props.location.state.type;
        const payload = {
            tjrq: currentdate,
            echartsUrl: echartsUrl
        }
        dispatch({
            type: 'table/fetchtable',
            payload: { payload }
        }).then((res) => {
            const tableData = res;
            if (tableData.code === 1) {
                this.setState({
                    loading: true,
                    tjrq: currentdate,
                    tableData: tableData.data
                })
            } else {
                this.setState({
                    loading: false,
                    tjrq: currentdate,
                    tableData: tableData.data
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
                    this.getTableInfo(currentdate);
                }
            }
        });
    }
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
        </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
        </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });
    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    getTableHtml = (tableThList, tableData) => {
        let columns = [];
        const tableTitle_Key = Object.keys(tableData[0]);
        for (let i = 0; i < tableTitle_Key.length; i++) {
            let columnsChild = {};
            columnsChild = {
                title: tableThList[i],
                dataIndex: tableTitle_Key[i],
                key: tableTitle_Key[i],
                render: text => {
                    let itemChildStr = text.toString();
                    let itemChildNum = Number(text);
                    if (!isNaN(itemChildNum) && itemChildNum <= 0) {
                        return (
                            <span className="font-red">{text}</span>
                        )
                    }
                    if (itemChildStr.indexOf("%") > -1) {
                        return (
                                <Progress
                                    percent={itemChildStr.replace("%", "")}
                                    size="small"
                                    status="active"
                                    format={(percent) => {
                                        return percent
                                    }}
                                />
                        )
                    }
                    return  text;
                },
                // 搜索  暂时有点BUG 
                // ...this.getColumnSearchProps(tableTitle_Key[i]),
            };
            columns.push(columnsChild);
        }
        for (let k = 0; k < tableData.length; k++) {
            tableData[k].key = (k + 1);
        }
        const dataSource = tableData;
        return (
            <Table columns={columns} dataSource={dataSource} bordered className={styles.MainTable_table} />
        )
    }
    render() {
        const { tableTitle, tableData, tableThList, loading } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout style={{ height: '100%' }}>
                <Header style={{ background: '#fff' }}>
                    <DatePicker
                        getFieldDecorator={getFieldDecorator}
                        handleSubmit={this.handleSubmit}
                        picker={this.state.picker}
                    />
                </Header>
                <Content className="main_container">
                    {
                        !loading ? <Alert message="暂无数据，请稍后再试" type="warning" showIcon closable /> : (
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
export default Form.create()(MainTable);
