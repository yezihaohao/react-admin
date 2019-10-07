/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import routes from '../routes/config';
import SiderMenu from './SiderMenu';

const { Sider } = Layout;

type SiderCustomProps = RouteComponentProps<any> & {
    popoverHide?: () => void;
    collapsed?: boolean;
};
type SiderCustomState = {
    collapsed?: boolean;
    openKey: string;
    firstHide: boolean;
    selectedKey: string;
    mode: string;
};

class SiderCustom extends Component<SiderCustomProps, SiderCustomState> {
    static getDerivedStateFromProps(props: any, state: any) {
        if (props.collapsed !== state.collapsed) {
            const state1 = SiderCustom.setMenuOpen(props);
            const state2 = SiderCustom.onCollapse(props.collapsed);
            return {
                ...state1,
                ...state2,
                firstHide: state.collapsed !== props.collapsed && props.collapsed, // 两个不等时赋值props属性值否则为false
                openKey: state.openKey || (!props.collapsed && state1.openKey),
            };
        }
        return null;
    }
    static setMenuOpen = (props: any) => {
        const { pathname } = props.location;
        return {
            openKey: pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey: pathname,
        };
    };
    static onCollapse = (collapsed: boolean) => {
        return {
            collapsed,
            // firstHide: collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        };
    };
    // state =
    constructor(props: any) {
        super(props);
        this.state = {
            mode: 'inline',
            openKey: '',
            selectedKey: '',
            firstHide: true, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
        };
    }
    componentDidMount() {
        // this.setMenuOpen(this.props);
        const state = SiderCustom.setMenuOpen(this.props);
        this.setState(state);
    }
    menuClick = (e: any) => {
        this.setState({
            selectedKey: e.key,
        });
        const { popoverHide } = this.props; // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = (v: string[]) => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        });
    };
    render() {
        const { selectedKey, openKey, firstHide, collapsed } = this.state;
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={collapsed}
                style={{ overflowY: 'auto' }}
            >
                <div className="logo" />
                <SiderMenu
                    menus={routes.menus}
                    onClick={this.menuClick}
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    openKeys={firstHide ? [] : [openKey]}
                    onOpenChange={this.openMenu}
                />
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
        );
    }
}

export default withRouter(SiderCustom);
