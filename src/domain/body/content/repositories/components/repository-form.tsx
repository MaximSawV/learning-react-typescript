import React, {useState} from 'react';
import { Form, Input, Button, Divider, Checkbox, AutoComplete  } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined  } from '@ant-design/icons';
import {css} from "@emotion/css";
import {Promise} from "q";

export default function RepositoryForm() {

    const returnValues = () => {

    };

    return (
          <>
              <Form className={css`width: 20%`} autoComplete='off' labelCol={{ span: 10}} id="repo-form" onFinish={returnValues}>
                  <Form.Item
                      label="Belongs to"
                      name="username"
                      rules={[
                          { required: true, message: 'Please enter a username!'},
                          {min: 3, message: 'username cannot be less than 3 characters'},
                          {max: 24, message: 'username cannot be more than 24 characters'},
                          {whitespace: true, message: 'Please enter a valid username!'},
                          { pattern: /^[a-zA-Z0-9_.]+$/, message: 'Username can only include letters, numbers and "/_."!'}
                      ]}
                  >
                      <Input />
                  </Form.Item>
                  <Form.Item
                      label="Title"
                      name="title"
                      rules={[
                          { required: true, message: 'Please enter a title!'},
                          {min: 3, message: 'title cannot be less than 3 characters'},
                          {max: 500, message: 'title cannot be more than 500 characters'},
                          {whitespace: true, message: 'Please enter a title username!'},
                      ]}
                  >
                      <Input />
                  </Form.Item>
                  <Form.Item
                      label="Starting Wealth"
                      name="current_wealth"
                      rules={[
                          { required: true, message: 'Please enter a number'},
                          { pattern: /^[0-9,.]+$/, message: 'Pleas enter a proper number'},
                          {whitespace: true, message: 'Please enter a number!'},
                      ]}
                  >
                      <Input />
                  </Form.Item>
                  <Button type="primary" htmlType="submit">
                      Save
                  </Button>
              </Form>
          </>
    );
}