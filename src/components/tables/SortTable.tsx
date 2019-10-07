/**
 * Created by hao.cheng on 2017/4/15.
 */
import React from 'react';
import { Table, Button } from 'antd';

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

type SortTableState = {
    filteredInfo: any;
    sortedInfo: any;
};
class SortTable extends React.Component<any, SortTableState> {
    constructor(props: any) {
        super(props);
        this.state = {
            filteredInfo: {},
            sortedInfo: {},
        };
    }
    handleChange = (pagination: any, filters: any, sorter: any) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };
    clearFilters = () => {
        this.setState({ filteredInfo: null });
    };
    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };
    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };
    render() {
        let { sortedInfo, filteredInfo } = this.state;
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                filteredValue: filteredInfo.name || null,
                onFilter: (value: any, record: any) => record.name.includes(value),
                sorter: (a: any, b: any) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (a: any, b: any) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                filters: [
                    { text: 'London', value: 'London' },
                    { text: 'New York', value: 'New York' },
                ],
                filteredValue: filteredInfo.address || null,
                onFilter: (value: any, record: any) => record.address.includes(value),
                sorter: (a: any, b: any) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
            },
        ];
        return (
            <div>
                <div className="table-operations">
                    <Button onClick={this.setAgeSort}>Sort age</Button>
                    <Button onClick={this.clearFilters}>Clear filters</Button>
                    <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                </div>
                <Table columns={columns} dataSource={data} onChange={this.handleChange} />
            </div>
        );
    }
}

export default SortTable;
