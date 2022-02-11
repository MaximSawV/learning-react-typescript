import React, { useState } from 'react';
import 'antd/dist/antd.less';
import { DatePicker, Select, Space, Spin } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;

export default function SwitchablePicker() {
    const [type, setType] = useState<'date' | 'week' | 'month' | 'quarter' | 'year'>('date');
    return (
        <Space>
            <Select value={type} onChange={setType}>
                <Option value="date">Date</Option>
                <Option value="week">Week</Option>
                <Option value="month">Month</Option>
                <Option value="quarter">Quarter</Option>
                <Option value="year">Year</Option>
            </Select>
            <Spin spinning />
            <RangePicker picker ={type}/>
        </Space>
    );
}