import React, {useState} from 'react';
import { Form, Input, Button, Divider, Checkbox, AutoComplete  } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined  } from '@ant-design/icons';
import {css} from "@emotion/css";
import {Promise} from "q";

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

    const [password, setPassword] = useState("");
    const [conf_password, setconf_Password] = useState("");

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
                        {whitespace: true, message: 'Please enter a valid username!'},
                        { pattern: /^[a-zA-Z0-9_.]+$/, message: 'Username can only include letters, numbers and "/_."!'}
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
                        { min: 8, message: "Password has to be at least 8 characters long!"},
                        { pattern: /^[a-zA-Z0-9_.]+$/, message: 'Password can only include letters, numbers and "/_."!'}
                    ]}
                    tooltip={{ title: 'At least 8 characters. Numbers, letters and special characters: "/_."', icon: <InfoCircleOutlined /> }}
                    hasFeedback
                >
                    <Input.Password className={css`width: 300px`} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item
                    label="Confirm password"
                    name="confirm_password"
                    rules={[
                        { required: true, message: 'Please confirm your password!'},
                        ]}
                    hasFeedback
                >
                    <Input.Password className={css`width: 300px`} onChange={(e) => setconf_Password(e.target.value)}/>
                </Form.Item>
                <Form.Item
                    rules={[
                        { required: true, message:'You need to agree with our Terms and Conditions'},
                    ]}
                >
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