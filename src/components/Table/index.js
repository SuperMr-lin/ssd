import React,{Fragment} from 'react';
import { Progress, Table, Input, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';
import { tableTitleTh } from '../../utils/tableTitleCfg';
import styles from "./index.less";


const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
            <Input
                ref={node => {
                    this.searchInput = node;
                }}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => handleSearch(selectedKeys, confirm)}
                style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm)}
                icon="search"
                size="small"
                style={{ width: 90, marginRight: 8 }}
            >
                Search
        </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
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
const handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
};

const handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
};
const getTableHtml = (Id,tableData) => {
    let tableThList = getNewThList(Id);
    let columns = [
        {
            title: '序号',
            key: "key",
            dataIndex: 'key',
            width: 50
        }
    ];
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
                    itemChildStr=itemChildStr.replace("%", "")
                    var num = Number(itemChildStr);
                    console.log(num)
                    if(!isNaN(num)){
                        return (
                            <Progress
                                percent={itemChildStr}
                                size="small"
                                status="active"
                                format={(percent) => {
                                    return percent
                                }}
                            />
                        )
                    }
                    
                }
                return text;
            },

            // 搜索  暂时有点BUG 
            // ...this.getColumnSearchProps(tableTitle_Key[i]),
        };
        columns.push(columnsChild);
    }
    for (let k = 0; k < tableData.length; k++) {
        tableData[k].key = (k + 1).toString();
        //tableData[k].key = k.toString();

    }
    const dataSource = [...tableData];
    let Clen = columns.length-1;
    if (columns[Clen].title===undefined){
        columns.splice(Clen)
    }
    return (
        <Table columns={columns} dataSource={dataSource} bordered className={styles.MainTable_table} />
    )
}
const getNewThList = (Id) => {
    const tableId = Id;
    let NewThList;
    NewThList = SetMenuList(tableId);
    return NewThList[0].list;
}
//提取对应子菜单
const SetMenuList = (key) => {
    return tableTitleTh.filter((e) => {
        return e.id == key;
    })
}
const TableList = (props) => {
    const { optionData, Id}=props;
    return (
        <Fragment>
            {
                getTableHtml(Id, optionData)
            }
        </Fragment>

    )
}
// <Tables
//     ID="table-box"
//     columns={props.columns}
//     dataSource={props.dataSource}
// />




export default TableList;