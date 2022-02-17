import React, {useState} from 'react';
import { Form, Input, Button, Divider, Checkbox, AutoComplete  } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined  } from '@ant-design/icons';
import {css} from "@emotion/css";

export default function Registration() {

    const { Option } = AutoComplete;

    const [result, setResult] = useState<string[]>([]);
    const handleSearch = (value: string) => {
        let res: string[] = [];
        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            res = ['gmail.com', 'web.de', 'yahoo.com'].map(domain => `${value}@${domain}`);
        }
        setResult(res);
    };

    return(
        <div>
            <h1>Registration</h1>
            <Divider />
            <Form className={css`width: fit-content`} autoComplete='off' labelCol={{ span: 8 }}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        { required: true, message: 'Please enter a username!'},
                        {min: 3, message: 'username cannot be less than 3 characters'},
                        {max: 24, message: 'username cannot be more than 24 characters'},
                        {whitespace: true, message: 'Please enter a valid username!'}
                    ]}
                    hasFeedback
                >
                    <Input className={css`width: 300px;`} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please enter a email!'},
                        {type:'email', message: 'Please enter a valid email!'}
                    ]}
                    hasFeedback
                >
                    <AutoComplete className={css`width: 300px;`} onSearch={handleSearch}>
                        {result.map((email: string) => (
                            <Option key={email} value={email}>
                                {email}
                            </Option>
                        ))}
                    </AutoComplete>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="plain_password"
                    rules={[
                        { required: true, message: 'Please create a password!'},
                    ]}
                    tooltip={{ title: 'It can contain: 0-9; Aa-Zz; -._?!ß', icon: <InfoCircleOutlined /> }}
                    hasFeedback
                >
                    <Input.Password className={css`width: 300px`} />
                </Form.Item>
                <Form.Item
                    label="Confirm password"
                    name="confirm_password"
                    rules={[
                        { required: true, message: 'Please confirm your password!'}
                        ]}
                    hasFeedback
                >
                    <Input.Password className={css`width: 300px`} />
                </Form.Item>
                <Form.Item>
                    <Checkbox> Agree to <a href="#">Term and Conditions</a></Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}