/**
 * 路由组件出口文件
 * yezi 2018年6月24日
 */
import React from 'react';
import BasicForm from './forms/BasicForm';
import BasicTable from './tables/BasicTables';
import AdvancedTable from './tables/AdvancedTables';
import AsynchronousTable from './tables/AsynchronousTable';
import Echarts from './charts/Echarts';
import Recharts from './charts/Recharts';
import Icons from './ui/Icons';
import Buttons from './ui/Buttons';
import Spins from './ui/Spins';
import Modals from './ui/Modals';
import Notifications from './ui/Notifications';
import Tabs from './ui/Tabs';
import Banners from './ui/banners';
import Drags from './ui/Draggable';
import Dashboard from './dashboard/Dashboard';
import Gallery from './ui/Gallery';
import BasicAnimations from './animation/BasicAnimations';
import ExampleAnimations from './animation/ExampleAnimations';
import AuthBasic from './auth/Basic';
import RouterEnter from './auth/RouterEnter';
import Wysiwyg from 'bundle-loader?lazy!./ui/Wysiwyg';  // 按需加载富文本配置
import Bundle from './widget/Bundle';
import Cssmodule from './cssmodule';
import MapUi from './ui/map';

const WysiwygBundle = (props) => (
    <Bundle load={Wysiwyg}>
        {(Component) => <Component {...props} />}
    </Bundle>
);

export default {
    BasicForm, BasicTable, AdvancedTable, AsynchronousTable,
    Echarts, Recharts, Icons, Buttons, Spins, Modals, Notifications,
    Tabs, Banners, Drags, Dashboard, Gallery, BasicAnimations,
    ExampleAnimations, AuthBasic, RouterEnter, WysiwygBundle,
    Cssmodule, MapUi
}