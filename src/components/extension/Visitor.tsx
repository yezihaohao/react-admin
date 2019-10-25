/*
 * File: Visitor.tsx
 * Desc: 访客
 * File Created: 2019-10-25 22:31:37
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
import React from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Row, Col, Card } from 'antd';

const Visitor = () => {
    return (
        <>
            <BreadcrumbCustom first="visitor" />
            <Row gutter={16}>
                <Col md={24}>
                    <Card
                        title="访客模式"
                        bordered={false}
                        bodyStyle={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 500,
                        }}
                    >
                        访客模式的页面，你不需要登录即可访问的页面
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Visitor;
