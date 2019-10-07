/**
 * Created by 叶子 on 2017/7/31.
 */
import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import beauty from '@/style/imgs/beauty.jpg';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { AuthWidget } from '../widget';

class Basic extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first="权限管理" second="基础演示" />
                <AuthWidget
                    children={(auth: any) => (
                        <Row>
                            <Col span={24}>
                                <Card bordered={false} bodyStyle={{ minHeight: 600 }}>
                                    {!auth.uid && (
                                        <h2 style={{ height: 500 }} className="center">
                                            登录之后你将看到一张美女图
                                        </h2>
                                    )}
                                    {auth.permissions &&
                                        auth.permissions.includes('auth/authPage/visit') && (
                                            <div style={{ textAlign: 'center' }}>
                                                <img src={beauty} alt="" style={{ height: 400 }} />
                                                {(auth.permissions.includes(
                                                    'auth/authPage/edit'
                                                ) && (
                                                    <div>
                                                        <p>
                                                            看啥子美女，看点美景就行啦~
                                                            <span
                                                                role="img"
                                                                aria-label=""
                                                                aria-labelledby=""
                                                            >
                                                                😄😄
                                                            </span>
                                                        </p>
                                                        <p>管理员身份登录才能看到这两段话</p>
                                                    </div>
                                                )) || (
                                                    <div>
                                                        <p>管理员登录将看到不一样的效果</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                </Card>
                            </Col>
                        </Row>
                    )}
                />
            </div>
        );
    }
}

export default Basic;
