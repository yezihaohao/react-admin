/**
 * Created by hao.cheng on 2017/4/25.
 */
import React, { Component } from 'react';
import { Row, Col, Card, Tabs, Icon, Radio, Button } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
const TabPane = Tabs.TabPane;

class TabsCustom extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
            mode: 'top'
        };
    }
    callback = (key) => {
        console.log(key);
    };
    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
    };
    onChange = (activeKey) => {
        this.setState({ activeKey });
    };
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    };
    render() {
        const { mode } = this.state;
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="标签页" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="基本-默认选中第一项" bordered={false}>
                                <Tabs defaultActiveKey="1" onChange={this.callback}>
                                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                                </Tabs>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card title="带图标" bordered={false}>
                                <Tabs defaultActiveKey="2" style={{height: 150}}>
                                    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                                        Tab 1
                                    </TabPane>
                                    <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                                        Tab 2
                                    </TabPane>
                                </Tabs>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card title="卡片式风格" bordered={false}>
                                <Tabs onChange={this.callback} type="card">
                                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                                </Tabs>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="禁用某项" bordered={false}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
                                    <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
                                    <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
                                </Tabs>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card title="带滚动" bordered={false}>
                                <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                                    <Radio.Button value="top">Horizontal</Radio.Button>
                                    <Radio.Button value="left">Vertical</Radio.Button>
                                </Radio.Group>
                                <Tabs
                                    defaultActiveKey="1"
                                    tabPosition={mode}
                                    style={{height: 150}}
                                >
                                    <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                                    <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                                    <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                                    <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                                    <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                                    <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                                    <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                                    <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                                    <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                                </Tabs>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card title="带删除和新增" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Button onClick={this.add}>ADD</Button>
                                </div>
                                <Tabs
                                    hideAdd
                                    onChange={this.onChange}
                                    activeKey={this.state.activeKey}
                                    type="editable-card"
                                    onEdit={this.onEdit}
                                >

                                    {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                                </Tabs>
                            </Card>
                        </div>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default TabsCustom;