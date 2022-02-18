import React, {useState} from 'react';
import {render} from 'react-dom';
import { Table, Button, Space, Popconfirm, Form } from 'antd';
import {Repositories, RepositoryDef} from './../lib/repositories-demo';
import RepositoryForm from './repository-form';

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
    
    const [data, setData] = useState();
    
    const addData = () => {
        render(<RepositoryForm />, document.getElementById('form-space'));
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
        <>
            <div>
                <Table
                    rowSelection={{
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={Repositories}
                    title={() => 'Your Repositories'}
                    footer={() => (
                        <Space>
                            <Button disabled={!hasSelectedRows} onClick={() => {console.log(numberOfRows+" Rows Edited")}}>
                                Edit
                            </Button>
                            <Button disabled={!hasSelectedRows} onClick={() => {console.log(numberOfRows+" Rows Deleted")}}>
                                Delete
                            </Button>
                            <Button onClick={() => addData()}>
                                Add
                            </Button>
                        </Space>
                        )}
                />
            </div>
            <span id="form-space">
                
            </span>
        </>
    );
}