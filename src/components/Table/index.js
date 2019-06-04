import React,{Fragment} from 'react';
import { Anchor, Divider } from 'antd';
import 'antd/dist/antd.css';

import TableList from "./table";
import styles from "./index.less";




const TableList = (props) => {
    console.log(props);
    return (
        <Fragment>
            <div id="table-box" className={styles.table_box}></div>
            <Tables
                ID="table-box"
                columns={props.columns}
                dataSource={props.dataSource}
            />
        </Fragment>

    )
}





export default TableList;