import React from 'react';
import { DatePicker, Form, Button, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'antd/dist/antd.css';
import styles from "./index.less";


const { MonthPicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const currentdate = moment().format(dateFormat);
const setPicker = (props) => {
    let State = {
        isopen: false,
        time: null
    }
    if (props.picker === "MonthPicker") {
        return (
            <Form.Item
                style={{ marginTop: '12px' }}
                className={styles.DatePicker_inp}
                label="当前时间"
            >
                {props.getFieldDecorator('date-picker', {
                    initialValue: moment(props.initialValue) || null,
                    // initialValue: moment(props.currentdate),
                    rules: [
                        { required: true, message: "*请选择时间" }
                    ]
                })(

                    <MonthPicker onChange={props.onChange} />
                )}
            </Form.Item>
        )
    } else if (props.picker === "YearPicker") {
        return (
            <Form.Item
                style={{ marginTop: '12px' }}
                className={styles.DatePicker_inp}
                label="当前时间"
            >
                {props.getFieldDecorator('date-picker', {
                    initialValue: moment(props.currentdate),
                    rules: [
                        { required: true, message: "*请选择时间" }
                    ]
                })(

                    <DatePicker
                        onChange={props.onChange}
                        value={State.time}
                        open={State.isopen}
                        mode="year"
                        format="YYYY"
                        onFocus={() => { State.isopen = true } }
                        onBlur={() => { State.isopen = false } }
                        onPanelChange={(v) => {
                            State.isopen = false;
                            State.time = v;

                        }} />
                )}
            </Form.Item>
        )
    } else {
        return (
            <Form.Item
                style={{ marginTop: '12px' }}
                className={styles.DatePicker_inp}
                label="当前时间"
            >
                {props.getFieldDecorator('date-picker', {
                    initialValue: moment(props.initialValue) || null,
                    // initialValue: moment(props.currentdate),
                    rules: [
                        { required: true, message: "*请选择时间" }
                    ]
                })(
                    <DatePicker onChange={props.onChange} />
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
