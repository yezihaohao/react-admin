/*
 * File: index.tsx
 * Desc: 环境配置
 * File Created: 2020-08-02 23:00:28
 * Author: yezi
 * ------
 * Copyright 2020 - present, yezi
 */
import React from 'react';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { Row, Col, Card, Descriptions } from 'antd';

const getEnvs = () => Object.keys(process.env).filter((key) => /^REACT_ADMIN_/i.test(key));
const Env = () => {
    const envs = getEnvs();
    console.log(process.env);
    return (
        <div>
            <BreadcrumbCustom breads={['环境变量配置']} />
            <Row gutter={16}>
                <Col md={24}>
                    <Card title="环境变量配置" bordered={false}>
                        <Descriptions>
                            {envs.map((env) => (
                                <Descriptions.Item key={env} label={env}>
                                    {process.env[env]}
                                </Descriptions.Item>
                            ))}
                        </Descriptions>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Env;
