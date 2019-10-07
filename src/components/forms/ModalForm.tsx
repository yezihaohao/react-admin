/**
 * Created by hao.cheng on 2017/4/15.
 */
import React, { Component } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { FormProps } from 'antd/lib/form';
const FormItem = Form.Item;

type CollectionCreateFormProps = {
    visible: boolean;
    onCancel: () => void;
    onCreate: () => void;
    ref: any;
} & FormProps;

const CollectionCreateForm: any = Form.create()((props: CollectionCreateFormProps) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form!;
    return (
        <Modal
            visible={visible}
            title="创建新收藏"
            okText="创建"
            onCancel={onCancel}
            onOk={onCreate}
        >
            <Form layout="vertical">
                <FormItem label="标题">
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: '请输入收藏的标题!' }],
                    })(<Input />)}
                </FormItem>
                <FormItem label="描述">
                    {getFieldDecorator('description')(<Input type="textarea" />)}
                </FormItem>
                <FormItem
                    className="collection-create-form_last-form-item"
                    style={{ marginBottom: 0 }}
                >
                    {getFieldDecorator('modifier', {
                        initialValue: 'public',
                    })(
                        <Radio.Group>
                            <Radio value="public">公开</Radio>
                            <Radio value="private">私有</Radio>
                        </Radio.Group>
                    )}
                </FormItem>
            </Form>
        </Modal>
    );
});

class ModalForm extends Component {
    state = {
        visible: false,
    };
    form: any;
    showModal = () => {
        this.setState({ visible: true });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err: any, values: any) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };
    saveFormRef = (form: any) => {
        this.form = form;
    };
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    新建收藏
                </Button>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

export default ModalForm;
