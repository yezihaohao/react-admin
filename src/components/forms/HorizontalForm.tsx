/**
 * Created by hao.cheng on 2017/4/15.
 */
import React, { Component } from 'react';

import { Form, Icon, Input, Button } from 'antd';
import { FormProps } from 'antd/lib/form';
const FormItem = Form.Item;

function hasErrors(fieldsError: any) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

type HorizontalLoginFormProps = {} & FormProps;

class HorizontalLoginForm extends Component<HorizontalLoginFormProps> {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form!.validateFields();
    }
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.form!.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const {
            getFieldDecorator,
            getFieldsError,
            getFieldError,
            isFieldTouched,
        } = this.props.form!;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                            placeholder="用户名"
                        />
                    )}
                </FormItem>
                <FormItem validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                            type="password"
                            placeholder="密码"
                        />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(HorizontalLoginForm);
