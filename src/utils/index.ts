/**
 * Created by hao.cheng on 2017/4/28.
 */
import queryString from 'query-string';
/**
 * 获取URL参数
 */
export function parseQuery() {
    return queryString.parseUrl(window.location.href).query;
}

/**
 * 校验是否登录
 * @param permits
 */
export const checkLogin = (permits: any): boolean =>
    (process.env.NODE_ENV === 'production' && !!permits) || process.env.NODE_ENV === 'development';
