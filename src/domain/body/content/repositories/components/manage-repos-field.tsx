import React from 'react';
import { Select, Space } from 'antd';
import {RepositoryDef} from './../lib/demo-repositories';

export interface RepositoryProps {
    item: RepositoryDef;
}

export default function ManageReposField() {
    const [repo, setRepo] = RepositoryProps();
    return(
        <>
            <Space>
                <Select value={type} onChange={setType}>
                    <Option value="date">Date</Option>
                    <Option value="week">Week</Option>
                    <Option value="month">Month</Option>
                    <Option value="quarter">Quarter</Option>
                    <Option value="year">Year</Option>
                </Select>
            </Space>

        </>
    );
}