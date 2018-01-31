/**
 * 我的会员页面
 */
import React from 'react';

import BreadcrumbCustom from '../BreadcrumbCustom';
import {Table} from 'antd';
import {getAllMember} from '../../axios';
import {getMemberDetail} from '../../axios';
import {getMemberStatus} from '../../axios';

const columns = [
    {
        title: '会员账号',
        dataIndex: 'memId',
    },
    {
        title: '姓名',
        dataIndex: 'name',
    }, {
        title: '余额',
        dataIndex: 'money',
    }, {
        title: '手机号',
        dataIndex: 'phone',
    }];

class MyMembers extends React.Component {

    state = {
        selectedRowKeys: [],
        loading: false,
        data: [],
        detail: null,
        status: null,
    };

    componentDidMount() {
        this.start();
    }

    start = () => {
        this.setState({loading: true});
        getAllMember().then(res => {
            if (typeof(res) !== "undefined") {
                this.setState({
                    data: [...res.data.map(member => member)],
                    loading: false
                });
            } else {
                this.setState({
                    loading: false
                });
            }
        });
    };

    handleClick = (e) => {
        getMemberDetail().then(res => {
            this.setState({
                // data: [...res.map(val => {
                //     return val;
                // })],
                loading: false,
                detail: res.data,
            });
        });
    };

    handleClick2 = (e) => {
        getMemberStatus().then(
            res => {
                this.setState({
                    status: res.data,
                });
            });
    };

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    };

    render() {
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="我的会员" second="全部会员"/>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data}/>
            </div>


        );
    }
}

export default MyMembers;