/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { connectAlita } from 'redux-alita';
import umbrella from 'umbrella-storage';
import queryString from 'query-string';
import AllComponents from '../components';
import routesConfig, { IFMenuBase, IFMenu } from './config';
import { checkLogin } from '../utils';

type CRouterProps = {
    auth: any;
    smenus: any;
};

type CRouterState = {};

class CRouter extends Component<CRouterProps, CRouterState> {
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

    iterteMenu = (r: IFMenu) => {
        const mergeQueryToProps = (props: any) => {
            const queryReg = /\?\S*/g;

            const matchQuery = (reg: RegExp) => {
                const queryParams = window.location.hash.match(reg);
                return queryParams ? queryParams[0] : '{}';
            };
            const removeQueryInRouter = (props: any, reg: RegExp) => {
                const { params } = props.match;
                Object.keys(params).forEach((key) => {
                    params[key] = params[key] && params[key].replace(reg, '');
                });
                props.match.params = { ...params };
            };

            props = removeQueryInRouter(props, queryReg);

            const merge = {
                ...props,
                query: queryString.parse(matchQuery(queryReg)),
            };
            return merge;
        };
        const route = (r: IFMenuBase) => {
            const Component = r.component && AllComponents[r.component];
            return (
                <Route
                    key={r.route || r.key}
                    exact
                    path={r.route || r.key}
                    render={(props: any) => {
                        // 重新包装组件
                        const wrappedComponent = (
                            <DocumentTitle title={r.title}>
                                <Component {...mergeQueryToProps(props)} />
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
    };

    createRoute = (key: string) => {
        return routesConfig[key].map(this.iterteMenu);
    };

    render() {
        const { smenus } = this.props;
        return (
            <Switch>
                {Object.keys(routesConfig).map((key) => this.createRoute(key))}
                {(smenus.data || umbrella.getLocalStorage('smenus') || []).map(this.iterteMenu)}
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        );
    }
}

export default connectAlita([{ smenus: null }])(CRouter);
