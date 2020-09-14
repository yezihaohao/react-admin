/**
 * Created by hao.cheng on 2017/4/23.
 */
import React from 'react';
import { Row, Col, Card, Button, Radio, Menu, Dropdown } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { RadioChangeEvent } from 'antd/lib/radio';
import { ButtonSize } from 'antd/lib/button';
import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

type ButtonsState = {
    size: ButtonSize;
    loading: boolean;
    iconLoading: boolean;
};
class Buttons extends React.Component<any, ButtonsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            size: 'middle',
            loading: false,
            iconLoading: false,
        };
    }

    handleSizeChange = (e: RadioChangeEvent) => {
        this.setState({ size: e.target.value });
    };
    handleMenuClick = (e: any) => {
        console.log('click', e);
    };
    enterLoading = () => {
        this.setState({ loading: true });
    };
    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };
    render() {
        const size = this.state.size;
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom breads={['UI', '按钮']} />
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary">Primary</Button>
                                <Button>Default</Button>
                                <Button type="dashed">Dashed</Button>
                                <Button danger>Danger</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" shape="circle" icon="search" />
                                <Button type="primary" icon="search">
                                    Search
                                </Button>
                                <Button shape="circle" icon="search" />
                                <Button icon="search">Search</Button>
                                <br />
                                <Button shape="circle" icon="search" />
                                <Button icon="search">Search</Button>
                                <Button type="dashed" shape="circle" icon="search" />
                                <Button type="dashed" icon="search">
                                    Search
                                </Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Radio.Group value={size} onChange={this.handleSizeChange}>
                                    <Radio.Button value="large">Large</Radio.Button>
                                    <Radio.Button value="middle">Middle</Radio.Button>
                                    <Radio.Button value="small">Small</Radio.Button>
                                </Radio.Group>
                                <br />
                                <br />
                                <Button type="primary" shape="circle" icon="download" size={size} />
                                <Button type="primary" icon="download" size={size}>
                                    Download
                                </Button>
                                <Button type="primary" size={size}>
                                    Normal
                                </Button>
                                <br />
                                <Button.Group size={size}>
                                    <Button type="primary">
                                        <LeftOutlined />
                                        Backward
                                    </Button>
                                    <Button type="primary">
                                        Forward
                                        <RightOutlined />
                                    </Button>
                                </Button.Group>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary">primary</Button>
                                <Button>secondary</Button>
                                <Dropdown overlay={menu}>
                                    <Button>
                                        more <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" loading>
                                    Loading
                                </Button>
                                <Button type="primary" size="small" loading>
                                    Loading
                                </Button>
                                <br />
                                <Button
                                    type="primary"
                                    loading={this.state.loading}
                                    onClick={this.enterLoading}
                                >
                                    Click me!
                                </Button>
                                <Button
                                    type="primary"
                                    icon="poweroff"
                                    loading={this.state.iconLoading}
                                    onClick={this.enterIconLoading}
                                >
                                    Click me!
                                </Button>
                                <br />
                                <Button shape="circle" loading />
                                <Button type="primary" shape="circle" loading />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <style>{`
                    .button-demo .ant-btn {
                        margin-right: 8px;
                        margin-bottom: 12px;
                    }
                `}</style>
            </div>
        );
    }
}

export default Buttons;
