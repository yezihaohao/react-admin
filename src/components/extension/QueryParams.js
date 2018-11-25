/*
 * File: QueryParams.js
 * Desc: query参数demo
 * File Created: 2018-11-25 23:18:09
 * Author: chenghao
 * Copyright 2018 - present, chenghao
 */
import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';

class QueryParams extends Component {
    render() {
        const { query } = this.props;
        return (
            <div>
                <BreadcrumbCustom first="queryParams" />
                <Row gutter={16}>
                    <Col md={24}>
                        <Card title="query参数Demo" bordered={false}>
                            <div>参数1： {query.param1}</div>
                            <div>参数2： {query.param2}</div>
                            <div>其他参数： {query.others || <a href="#/app/extension/queryParams?others=nothing">点击查看</a>}</div>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default QueryParams;