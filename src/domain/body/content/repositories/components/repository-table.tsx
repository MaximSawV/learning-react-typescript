import React, {useState} from 'react';
import { Table, Button, Space } from 'antd';
import {Repositories, RepositoryDef} from './../lib/repositories-demo';

export default function RepositoryTable() {

    const [hasSelectedRows, setHasSelectedRows] = useState(false);
    const [numberOfRows, setNumberOfRows] = useState(0);

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: RepositoryDef[]) => {
            setHasSelectedRows((selectedRowKeys.length > 0));
            setNumberOfRows(selectedRowKeys.length);
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };


    const columns = [
        {
            title: 'Belongs to',
            dataIndex: 'belongsTo',
            key: 'belongsTo',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Current Wealth',
            dataIndex: 'currentWealth',
            key: 'currentWealth',
            sorter: (a:RepositoryDef, b:RepositoryDef) => a.currentWealth - b.currentWealth,
        },
        {
            title: 'Created on',
            dataIndex: 'createdOn',
            key: 'createdOn',
        },
    ];

    return(
        <div>
            <Table
                rowSelection={{
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={Repositories}
            />
            <Space>
                <Button disabled={!hasSelectedRows} onClick={() => {console.log(numberOfRows+" Rows Edited")}}>
                    Edit
                </Button>
                <Button disabled={!hasSelectedRows} onClick={() => {console.log(numberOfRows+" Rows Deleted")}}>
                    Delete
                </Button>
            </Space>
        </div>
    );
}