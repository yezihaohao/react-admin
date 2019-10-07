/**
 * Created by 叶子 on 2017/8/1.
 */
/**
 * Created by 叶子 on 2017/7/31.
 */
import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { AuthWidget } from '../widget';

class RouterEnter extends Component {
    componentDidMount() {
        console.log('RouterEnter');
    }
    render() {
        return (
            <div>
                <BreadcrumbCustom first="权限管理" second="路由拦截" />
                <AuthWidget
                    children={(auth: any) => (
                        <Row>
                            <Col span={24}>
                                <Card bordered={false} bodyStyle={{ minHeight: 600 }}>
                                    <h2 style={{ height: 500 }} className="center">
                                        只有管理员登录才能看到该页面，否则跳转到404页面
                                    </h2>
                                </Card>
                            </Col>
                        </Row>
                    )}
                />
            </div>
        );
    }
}

export default RouterEnter;
