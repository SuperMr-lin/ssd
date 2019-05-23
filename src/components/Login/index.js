import React from 'react';
import {
  Form, Icon, Input, Button,
} from 'antd';
import 'antd/dist/antd.css';
import styles from './index.less';




const LoginForm = (props) => {

  return (
    <Form  className={styles.login_from} onSubmit={props.handleSubmit} >
      <Form.Item>
        {props.getFieldDecorator('userName', {
          rules: [{ required: true, message: '*请输入账号' }],
        })(
          <Input prefix={<Icon type="user" className={styles.login_icon} />} placeholder="Username" />
        )}
      </Form.Item>
      <Form.Item>
        {props.getFieldDecorator('password', {
          rules: [{ required: true, message: '*请输入密码' }],
        })(
          <Input prefix={<Icon type="lock" className={styles.login_icon} />} type="password" placeholder="Password" />
        )}
        {props.login.status === "error" && props.renderMessage('账户或密码错误')}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.login_button}>
          登录
          </Button>
      </Form.Item>
    </Form>

  );
}

export default LoginForm;