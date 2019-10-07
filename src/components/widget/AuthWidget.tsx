/**
 * Created by 叶子 on 2017/7/31.
 */
import { Component } from 'react';
import { connectAlita } from 'redux-alita';

type AuthWidgetProps = {
    auth: any;
    children: (param: any) => React.ReactElement;
};

class AuthWidget extends Component<AuthWidgetProps> {
    render() {
        const { auth = {} } = this.props;
        return this.props.children(auth.data || {});
    }
}

export default connectAlita(['auth'])(AuthWidget);
