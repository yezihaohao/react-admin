/**
 * Created by hao.cheng on 2017/4/22.
 */
import React, { ReactNode } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

interface BreadcrumbCustomProps {
    breads?: ReactNode[];
}
const BreadcrumbCustom = (props: BreadcrumbCustomProps) => {
    const { breads } = props;
    return (
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>
                <Link to={'/app/dashboard/index'}>首页</Link>
            </Breadcrumb.Item>
            {breads?.map((bread, i) => (
                <Breadcrumb.Item key={i}>{bread}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default BreadcrumbCustom;
