import React, { Component } from 'react';
import { Form, Icon, Alert } from 'antd';
import { connect } from "dva";
import LoginForm from '../../components/Login';
import styles from './index.less';
import log from '../../assets/logo.png';

@connect(({ user }) => ({
    user
}))
class LoginPage extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFields((err, values) => {
            const { dispatch } = this.props;
            if (!err) {
                dispatch({
                    type: 'user/login',
                    payload: {
                        ...values
                    },
                });
            }
        });
    };
    renderMessage = content => {
        return <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />;
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { user } = this.props;
        return (
            <div className={styles.login_box}>
                <div className={styles.login_head}>
                    <img src={log} className={styles.login_img} alt="" />
                    <span>决策支持信息系统(DSS)</span>
                </div>
                <LoginForm
                    login={user}
                    handleSubmit={this.handleSubmit}
                    getFieldDecorator={getFieldDecorator}
                    renderMessage={this.renderMessage}
                />
                <div className={styles.login_footer}>
                    <span>Copyright <Icon type="copyright" /> 2019 互慧软件技术部出品</span>
                </div>
            </div>
        );
    }
}
export default Form.create()(LoginPage);