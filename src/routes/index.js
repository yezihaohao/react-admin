/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllComponents from '../components';
import routesConfig from './config';
import queryString from 'query-string';

export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        // const { auth } = store.getState().httpData;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    requireLogin = (component, permission) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        if (process.env.NODE_ENV === 'production' && !permissions) { // 线上环境判断是否登录
            return <Redirect to={'/login'} />;
        }
        return permission ? this.requireAuth(permission, component) : component;
    };
    render() {
        return (
            <Switch>
                {
                    Object.keys(routesConfig).map(key => 
                        routesConfig[key].map(r => {
                            const route = r => {
                                const Component = AllComponents[r.component];
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
                                            const merge = { ...props, query: queryParams ? queryString.parse(queryParams[0]) : {} };
                                            return r.login 
                                                ? <Component {...merge} />
                                                : this.requireLogin(<Component {...merge} />, r.auth)
                                        }}
                                    />
                                )
                            }
                            return r.component ? route(r) : r.subs.map(r => route(r));
                        })
                    )
                }

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}