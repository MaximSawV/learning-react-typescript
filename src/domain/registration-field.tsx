import React from 'react';
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined } from '@ant-design/icons';
import {css} from "@emotion/css";

export default function Registration() {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        validateUsername(values["username"])
    };

    const validateUsername = (username: string) => {
        if (username.length >= 3 && username.length < 25)
        {
            console.log('Username is Valid');
        } else {
            console.warn('Username is not Valid');
        }
    };

    return(
        <div>
            <h1>Registration</h1>
            <Divider />
            <Form className={css`width: fit-content`} onFinish={onFinish}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!'}]}
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
        </div>
    );
}