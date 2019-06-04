import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';





const Tables = (props) => {
    console.log(props);
    return (
        <Table columns={props.columns} dataSource={props.dataSource} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} /> ,
        document.getElementById(props.ID)
    )
}


export default Tables;