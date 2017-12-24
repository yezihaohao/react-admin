/**
 * 新增会员页面
 */
import React from 'react';

import BreadcrumbCustom from '../BreadcrumbCustom';
import {Card, Form, Input, Select, Button} from 'antd';
import {addMember} from '../../axios';

const FormItem = Form.Item;
const Option = Select.Option;

class AddMembers extends React.Component {

    state = {
        selectedRowKeys: [],
        loading: false,
        data: [],
        detail: null,
        status: null,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                addMember(values.name, values.phone, values.passwd).then(
                    res => {
                        console.log("res:" + res);
                    }
                );

            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select className="icp-selector" style={{width: '60px'}}>
                <Option value="86">+86</Option>
            </Select>
        );
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="我的会员" second="新增会员"/>
                <div className="gutter-box">
                    <Card title="注册" bordered={false}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem
                                {...formItemLayout}
                                label="会员昵称"
                                hasFeedback
                            >
                                {getFieldDecorator('name', {
                                    rules: [{required: true, message: '请输入昵称!', whitespace: true}],
                                })(
                                    <Input/>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="密码"
                                hasFeedback
                            >
                                {getFieldDecorator('passwd', {
                                    rules: [{
                                        required: true, message: '请输入密码!',
                                    }, {
                                        validator: this.checkConfirm,
                                    }],
                                })(
                                    <Input type="password"/>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="确认密码"
                                hasFeedback
                            >
                                {getFieldDecorator('confirm', {
                                    rules: [{
                                        required: true, message: '请确认密码!',
                                    }, {
                                        validator: this.checkPassword,
                                    }],
                                })(
                                    <Input type="password" onBlur={this.handleConfirmBlur}/>
                                )}
                            </FormItem>


                            <FormItem
                                {...formItemLayout}
                                label="电话号码"
                            >
                                {getFieldDecorator('phone', {
                                    rules: [{required: true, message: '请输入电话号码!'}],
                                })(
                                    <Input addonBefore={prefixSelector}/>
                                )}
                            </FormItem>

                            <FormItem {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" size="large">注册</Button>
                            </FormItem>
                        </Form>
                    </Card>
                </div>
            </div>


        );
    }
}

const AddMember = Form.create()(AddMembers);
export default AddMember;