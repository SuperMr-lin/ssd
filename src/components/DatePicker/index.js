import React from 'react';
import { DatePicker, Form, Button, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'antd/dist/antd.css';
import styles from "./index.less";


const { MonthPicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const currentdate = moment().format(dateFormat);
const setPicker = (props)=>{
    if (props.picker ==="MonthPicker"){
        return(
            <Form.Item
                style={{ marginTop: '12px' }}
                className={styles.DatePicker_inp}
                label="当前时间"
            >
                {props.getFieldDecorator('date-picker', {
                    initialValue: moment(currentdate, dateFormat),
                    rules: [
                        { required: true, message: "*请选择时间" }
                    ]
                })(

                    <MonthPicker />
                )}
            </Form.Item>
        )
    }else{
        return (
            <Form.Item
                style={{ marginTop: '12px' }}
                className={styles.DatePicker_inp}
                label="当前时间"
            >
                {props.getFieldDecorator('date-picker', {
                    initialValue: moment(currentdate, dateFormat),
                    rules: [
                        { required: true, message: "*请选择时间" }
                    ]
                })(

                    <DatePicker />
                )}
            </Form.Item>
        )
    }
}
const DateForm = (props) => {
    return (
        <LocaleProvider locale={zhCN}>
        <Form layout="inline" onSubmit={props.handleSubmit} style={{ lineHeight: '64px' }} >
                {setPicker(props)}
            <Button type="primary" icon="search" htmlType="submit" className={styles.DatePicker_button}>
                查询
            </Button>
        </Form>
  </LocaleProvider>
    );
}


export default DateForm;
