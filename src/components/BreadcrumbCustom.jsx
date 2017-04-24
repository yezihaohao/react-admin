/**
 * Created by hao.cheng on 2017/4/22.
 */
import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router';

const BreadcrumbCustom = ({first, second}) => {
    first = <Breadcrumb.Item>{first}</Breadcrumb.Item> || '';
    second = <Breadcrumb.Item>{second}</Breadcrumb.Item> || '';
    return (
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item><Link to={'/#'}>首页</Link></Breadcrumb.Item>
            {first}
            {second}
        </Breadcrumb>
    )
};

export default BreadcrumbCustom;
