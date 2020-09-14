import React, { useState, useEffect } from 'react';
import { Layout, notification } from 'antd';
import umbrella from 'umbrella-storage';
import { useAlita } from 'redux-alita';
import Routes from './routes';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { ThemePicker, Copyright } from './components/widget';
import { checkLogin } from './utils';
import { fetchMenu } from './service';
import classNames from 'classnames';
import { SmileOutlined } from '@ant-design/icons';

const { Content, Footer } = Layout;

type AppProps = {};

function checkIsMobile() {
    const clientWidth = window.innerWidth;
    return clientWidth <= 992;
}

let _resizeThrottled = false;
function resizeListener(handler: (isMobile: boolean) => void) {
    const delay = 250;
    if (!_resizeThrottled) {
        _resizeThrottled = true;
        const timer = setTimeout(() => {
            handler(checkIsMobile());
            _resizeThrottled = false;
            clearTimeout(timer);
        }, delay);
    }
}
function handleResize(handler: (isMobile: boolean) => void) {
    window.addEventListener('resize', resizeListener.bind(null, handler));
}

function openFNotification() {
    const openNotification = () => {
        notification.open({
            message: '博主-yezihaohao',
            description: (
                <div>
                    <p>
                        GitHub地址：
                        <a
                            href="https://github.com/yezihaohao"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/yezihaohao
                        </a>
                    </p>
                    <p>
                        博客地址：
                        <a
                            href="https://yezihaohao.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://yezihaohao.github.io/
                        </a>
                    </p>
                </div>
            ),
            icon: <SmileOutlined style={{ color: 'red' }} />,
            duration: 0,
        });
        umbrella.setLocalStorage('hideBlog', true);
    };
    const storageFirst = umbrella.getLocalStorage('hideBlog');
    if (!storageFirst) {
        openNotification();
    }
}

/**
 * 获取服务端异步菜单
 * @param handler 执行回调
 */
function fetchSmenu(handler: any) {
    const setAlitaMenu = (menus: any) => {
        handler(menus);
        // this.props.setAlitaState({ stateName: 'smenus', data: menus });
    };
    setAlitaMenu(umbrella.getLocalStorage('smenus') || []);
    fetchMenu().then((smenus) => {
        setAlitaMenu(smenus);
        umbrella.setLocalStorage('smenus', smenus);
    });
}

const App = (props: AppProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [auth, responsive, setAlita] = useAlita(
        { auth: { permissions: null } },
        { responsive: { isMobile: false } },
        { light: true }
    );

    useEffect(() => {
        let user = umbrella.getLocalStorage('user');
        user && setAlita('auth', user);
        setAlita('responsive', { isMobile: checkIsMobile() });

        handleResize((isMobile: boolean) => setAlita('responsive', { isMobile }));
        openFNotification();
        fetchSmenu((smenus: any[]) => setAlita('smenus', smenus));
    }, [setAlita]);

    function toggle() {
        setCollapsed(!collapsed);
    }
    return (
        <Layout>
            {!responsive.isMobile && checkLogin(auth.permissions) && (
                <SiderCustom collapsed={collapsed} />
            )}
            <ThemePicker />
            <Layout
                className={classNames('app_layout', { 'app_layout-mobile': responsive.isMobile })}
            >
                <HeaderCustom toggle={toggle} collapsed={collapsed} user={auth || {}} />
                <Content className="app_layout_content">
                    <Routes auth={auth} />
                </Content>
                <Footer className="app_layout_foot">
                    <Copyright />
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;
