/**
 * Created by hao.cheng on 2017/4/25.
 */
import React, { Component } from 'react';
import { Row, Col, Card, Button, notification, Icon, Select } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
class Notifications extends Component {
    openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        });
    };
    openNotification2 = () => {
        const args = {
            message: 'Notification Title',
            description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
            duration: 0,
        };
        notification.open(args);
    };
    openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };
    openNotification3 = () => {
        const key = `open${Date.now()}`;
        const btnClick = function () {
            // to hide notification box
            notification.close(key);
        };
        const btn = (
            <Button type="primary" size="small" onClick={btnClick}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Notification Title',
            description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
            btn,
            key,
            onClose: this.close,
        });
    };
    close = () => {
        console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
    };
    openNotification4 = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        });
    };

    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="通知提醒框" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotification}>基本用法-4.5秒关闭</Button>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotification2}>取消自动关闭</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={() => this.openNotificationWithIcon('success')}>成功</Button>
                                <Button type="primary" onClick={() => this.openNotificationWithIcon('info')}>提醒</Button>
                                <Button type="primary" onClick={() => this.openNotificationWithIcon('warning')}>警告</Button>
                                <Button type="primary" onClick={() => this.openNotificationWithIcon('error')}>失败</Button>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotification3}>自定义按钮</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotification4}>自定义通知图标</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Select
                                    defaultValue="topRight"
                                    style={{ width: 120, marginRight: 10 }}
                                    onChange={(val) => {
                                        notification.config({
                                            placement: val,
                                        });
                                    }}
                                >
                                    {options.map(val => <Option key={val} value={val}>{val}</Option>)}
                                </Select>
                                <Button
                                    type="primary"
                                    onClick={this.openNotification}
                                >
                                    打开消息通知
                                </Button>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Notifications;