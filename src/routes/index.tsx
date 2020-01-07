/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import AllComponents from '../components';
import routesConfig, { IFMenuBase, IFMenu } from './config';
import queryString from 'query-string';
import { checkLogin } from '../utils';

type CRouterProps = {
    auth: any;
};

export default class CRouter extends Component<CRouterProps> {
    getPermits = (): any[] | null => {
        const { auth } = this.props;
        return auth ? auth.data.permissions : null;
    };

    requireAuth = (permit: any, component: React.ReactElement) => {
        const permits = this.getPermits();
        // const { auth } = store.getState().httpData;
        if (!permits || !permits.includes(permit)) return <Redirect to={'404'} />;
        return component;
    };
    requireLogin = (component: React.ReactElement, permit: any) => {
        const permits = this.getPermits();
        if (!checkLogin(permits)) {
            // 线上环境判断是否登录
            return <Redirect to={'/login'} />;
        }
        return permit ? this.requireAuth(permit, component) : component;
    };

    createRoute = (key: string) => {
        return routesConfig[key].map((r: IFMenu) => {
            const route = (r: IFMenuBase) => {
                const Component = r.component && AllComponents[r.component];
                return (
                    <Route
                        key={r.route || r.key}
                        exact
                        path={r.route || r.key}
                        render={props => {
                            const reg = /\?\S*/g;
                            // 匹配?及其以后字符串
                            const queryParams = window.location.hash.match(reg);
                            // 去除?的参数
                            const { params } = props.match;
                            Object.keys(params).forEach(key => {
                                params[key] = params[key] && params[key].replace(reg, '');
                            });
                            props.match.params = { ...params };
                            const merge = {
                                ...props,
                                query: queryParams ? queryString.parse(queryParams[0]) : {},
                            };
                            // 重新包装组件
                            const wrappedComponent = (
                                <DocumentTitle title={r.title}>
                                    <Component {...merge} />
                                </DocumentTitle>
                            );
                            return r.login
                                ? wrappedComponent
                                : this.requireLogin(wrappedComponent, r.requireAuth);
                        }}
                    />
                );
            };

            const subRoute = (r: IFMenu): any =>
                r.subs && r.subs.map((subR: IFMenu) => (subR.subs ? subRoute(subR) : route(subR)));

            return r.component ? route(r) : subRoute(r);
        });
    };

    render() {
        return (
            <Switch>
                {Object.keys(routesConfig).map(key => this.createRoute(key))}
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        );
    }
}
