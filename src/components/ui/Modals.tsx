/**
 * Created by hao.cheng on 2017/4/23.
 */
import React, { Component } from 'react';
import { Row, Col, Card, Modal, Button } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
const confirm = Modal.confirm;

class S extends Component {
    state = {
        visible: false,
        ModalText2: 'Content of the modal dialog',
        visible2: false,
        loading3: false,
        visible3: false,
        modal1Visible: false,
        modal2Visible: false,
        confirmLoading2: false,
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    showModal2 = () => {
        this.setState({
            visible2: true,
        });
    };
    handleOk2 = () => {
        this.setState({
            ModalText2: 'The modal dialog will be closed after two seconds',
            confirmLoading2: true,
        });
        setTimeout(() => {
            this.setState({
                visible2: false,
                confirmLoading2: false,
            });
        }, 2000);
    };
    setModal1Visible = (modal1Visible: boolean) => {
        this.setState({ modal1Visible });
    };
    setModal2Visible = (modal2Visible: boolean) => {
        this.setState({ modal2Visible });
    };
    handleCancel2 = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible2: false,
        });
    };
    showModal3 = () => {
        this.setState({
            visible3: true,
        });
    };
    handleOk3 = () => {
        this.setState({ loading3: true });
        setTimeout(() => {
            this.setState({ loading3: false, visible3: false });
        }, 3000);
    };
    handleCancel3 = () => {
        this.setState({ visible3: false });
    };
    showConfirm4 = () => {
        confirm({
            title: 'Want to delete these items?',
            content: 'some descriptions',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    info = () => {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() {},
        });
    };
    success = () => {
        Modal.success({
            title: 'This is a success message',
            content: 'some messages...some messages...',
        });
    };
    error = () => {
        Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...',
        });
    };
    warning = () => {
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
        });
    };
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="对话框" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <p>
                                    <Button type="primary" onClick={this.showModal}>
                                        基本用法
                                    </Button>
                                    <Modal
                                        title="Basic Modal"
                                        visible={this.state.visible}
                                        onOk={this.handleOk}
                                        onCancel={this.handleCancel}
                                    >
                                        <p>some contents...</p>
                                        <p>some contents...</p>
                                        <p>some contents...</p>
                                    </Modal>
                                </p>
                                <p>
                                    <Button type="primary" onClick={this.showModal2}>
                                        异步关闭
                                    </Button>
                                    <Modal
                                        title="Title of the modal dialog"
                                        visible={this.state.visible2}
                                        onOk={this.handleOk2}
                                        confirmLoading={this.state.confirmLoading2}
                                        onCancel={this.handleCancel2}
                                    >
                                        <p>{this.state.ModalText2}</p>
                                    </Modal>
                                </p>
                                <p>
                                    <Button type="primary" onClick={this.showModal3}>
                                        自定义页脚
                                    </Button>
                                    <Modal
                                        visible={this.state.visible3}
                                        title="Title"
                                        onOk={this.handleOk3}
                                        onCancel={this.handleCancel3}
                                        footer={[
                                            <Button
                                                key="back"
                                                size="large"
                                                onClick={this.handleCancel3}
                                            >
                                                Return
                                            </Button>,
                                            <Button
                                                key="submit"
                                                type="primary"
                                                size="large"
                                                loading={this.state.loading3}
                                                onClick={this.handleOk3}
                                            >
                                                Submit
                                            </Button>,
                                        ]}
                                    >
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                    </Modal>
                                </p>
                                <p>
                                    <Button onClick={this.showConfirm4}>确认框</Button>
                                </p>
                                <p>
                                    <Button onClick={this.info}>信息提示</Button>
                                    <Button onClick={this.success}>成功</Button>
                                    <Button onClick={this.error}>失败</Button>
                                    <Button onClick={this.warning}>警告</Button>
                                </p>
                                <p>
                                    <Button
                                        type="primary"
                                        onClick={() => this.setModal1Visible(true)}
                                    >
                                        距离顶部20px
                                    </Button>
                                    <Modal
                                        title="20px to Top"
                                        style={{ top: 20 }}
                                        visible={this.state.modal1Visible}
                                        onOk={() => this.setModal1Visible(false)}
                                        onCancel={() => this.setModal1Visible(false)}
                                    >
                                        <p>some contents...</p>
                                        <p>some contents...</p>
                                        <p>some contents...</p>
                                    </Modal>
                                    <br />
                                    <br />
                                    <Button
                                        type="primary"
                                        onClick={() => this.setModal2Visible(true)}
                                    >
                                        垂直居中
                                    </Button>
                                    <Modal
                                        title="Vertically centered modal dialog"
                                        wrapClassName="vertical-center-modal"
                                        visible={this.state.modal2Visible}
                                        onOk={() => this.setModal2Visible(false)}
                                        onCancel={() => this.setModal2Visible(false)}
                                    >
                                        <p>some contents...</p>
                                        <p>some contents...</p>
                                        <p>some contents...</p>
                                    </Modal>
                                </p>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default S;
