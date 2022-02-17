import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined } from '@ant-design/icons';
import {css} from "@emotion/css";
import Draggable from 'react-draggable';

export default function Registration() {

    const validateForm = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return(
        <div>
            <h1>Registration</h1>
            <Divider />
            <Form className={css`width: fit-content`} onFinish={validateForm}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!'},
                        {min: 3, message: 'Username cannot be less than 3 characters'},
                        {max: 24, message: 'Username cannot be more than 24 characters'},
                    ]}
                >
                    <Input className={css`width: 300px; align-self: end`} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email-address!'}]}
                >
                    <Input className={css`width: 300px`} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="plain_password"
                    rules={[{ required: true, message: 'Please create a password!'}]}
                    tooltip={{ title: 'It can contain: 0-9; Aa-Zz; -._?!ß', icon: <InfoCircleOutlined /> }}
                >
                    <Input.Password className={css`width: 300px`} />
                </Form.Item>
                <Form.Item
                    label="Confirm password"
                    name="confirm_password"
                    rules={[{ required: true, message: 'Please confirm your password!'}]}
                >
                    <Input.Password className={css`width: 300px`} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Draggable>
                <div>Hi</div>
            </Draggable>
        </div>
    );
}