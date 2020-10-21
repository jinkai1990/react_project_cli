import React, { Component } from 'react'
import './login.less';
import {post} from '../../utils/https';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default class login extends Component {
    constructor(props) {
        super(props)
        this.setState = {

        }
        this.onFinish =this.onFinish.bind(this);
    }
    componentDidMount() {
        // 
       
    }

    /**
     * 提交表单
     * @param {*Object} value 表单中input中的值对象
     */
    onFinish (value) {
        post('/checkLogin',{username: value.username,password:value.password}).then(res => {
           if(res.status === 200) {
               this.props.history.push('/admin')
           }
        })
       
    }

   
    render() {
        const userNameRules = [
            {required: true, message: 'Please input your Username!', },
            {max:12, message:'The username must be less than or equal to 12'},
            {min:4, message:'The user name must be at least 4'},
            {pattern:/^\w+$/, message:'The user name must be alphabetic, numeric, and underlined'},
            ]
        const passwordRules = [ 
            {
                required: true,
                message: 'Please input your Password!',
            },
            ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value) {
                    return Promise.resolve();
                  }else if(value.length > 12) {
                      console.log('sdfsdf')
                    return Promise.reject('Password must be less than or equal to 12 bits');
                  } else if(value.length < 4) {
                    return Promise.reject('Password must be greater than 4 digits');
                  } else if(!(/^\w+$/).test(value)) {
                    return Promise.reject('Password must be alphabetic, numeric, and underlined');
                  } else  {
                    return Promise.resolve();
                  
                },
              }),
            ]
        return (
            <div >
                <header className='header'>
                    <img src='https://wgscdn.babystory365.com/logo%403x.png' className='project-logo' alt='' />
                    <div>商品管理系统</div>
                </header>
                <div className='content'>
                    <div className='form-inpt'>
                        <div className='login-title'>User Login</div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        >
                        <Form.Item
                            name="username"
                            rules={userNameRules}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={passwordRules}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                           
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                          
                        </Form.Item>
                        </Form>
                    
                    </div>

                </div>
            </div>
        )
    }
}
