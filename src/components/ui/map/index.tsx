import React from 'react';
import Tencent from './Tencent';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../../BreadcrumbCustom';

export default () => (
    <div>
        <BreadcrumbCustom first="UI" second="地图" />
        <Row gutter={16}>
            <Col md={24}>
                <div style={{ height: 500 }}>
                    <Card bordered={false} title="腾讯地图">
                        <Tencent />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
);
