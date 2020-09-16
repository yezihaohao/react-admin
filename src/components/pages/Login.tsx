/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Button, Form, Input } from 'antd';
import { PwaInstaller } from '../widget';
import { connectAlita } from 'redux-alita';
import { RouteComponentProps } from 'react-router';
import { FormProps } from 'antd/lib/form';
import umbrella from 'umbrella-storage';
import { GithubOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

const FormItem = Form.Item;
type LoginProps = {
    setAlitaState: (param: any) => void;
    auth: any;
} & RouteComponentProps &
    FormProps;
class Login extends React.Component<LoginProps> {
    componentDidMount() {
        const { setAlitaState } = this.props;
        setAlitaState({ stateName: 'auth', data: null });
    }
    componentDidUpdate(prevProps: LoginProps) {
        // React 16.3+弃用componentWillReceiveProps
        const { auth: nextAuth = {}, history } = this.props;
        // const { history } = this.props;
        if (nextAuth.data && nextAuth.data.uid) {
            // 判断是否登陆
            umbrella.setLocalStorage('user', nextAuth.data);
            history.push('/');
        }
    }
    handleSubmit = (values: any) => {
        if (this.checkUser(values)) {
            this.props.setAlitaState({ funcName: values.userName, stateName: 'auth' });
        }
    };
    checkUser = (values: any) => {
        const users = [
            ['admin', 'admin'],
            ['guest', 'guest'],
        ];
        return users.some((user) => user[0] === values.userName && user[1] === values.password);
    };
    gitHub = () => {
        window.location.href =
            'https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin';
    };
    render() {
        return (
            <div className="login">
                <div className="login-form">
                    <div className="login-logo">
                        <span>React Admin</span>
                        <PwaInstaller />
                    </div>
                    <Form onFinish={this.handleSubmit} style={{ maxWidth: '300px' }}>
                        <FormItem
                            name="userName"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input
                                prefix={<UserOutlined size={13} />}
                                placeholder="管理员输入admin, 游客输入guest"
                            />
                        </FormItem>
                        <FormItem
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input
                                prefix={<LockOutlined size={13} />}
                                type="password"
                                placeholder="管理员输入admin, 游客输入guest"
                            />
                        </FormItem>
                        <FormItem>
                            <span className="login-form-forgot" style={{ float: 'right' }}>
                                忘记密码
                            </span>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                style={{ width: '100%' }}
                            >
                                登录
                            </Button>
                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>或 现在就去注册!</span>
                                <span onClick={this.gitHub}>
                                    <GithubOutlined />
                                    (第三方登录)
                                </span>
                            </p>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default connectAlita(['auth'])(Login);
