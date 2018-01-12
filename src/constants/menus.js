export const menus = [
    { key: '/app/dashboard/index', title: '首页', icon: 'mobile', },
    {
        key: '/app/ui', title: 'UI', icon: 'scan',
        sub: [
            { key: '/app/ui/buttons', title: '按钮', icon: '', },
            { key: '/app/ui/icons', title: '图标', icon: '', },
            { key: '/app/ui/spins', title: '加载中', icon: '', },
            { key: '/app/ui/modals', title: '对话框', icon: '', },
            { key: '/app/ui/notifications', title: '通知提醒框', icon: '', },
            { key: '/app/ui/tabs', title: '标签页', icon: '', },
            { key: '/app/ui/banners', title: '轮播图', icon: '', },
            { key: '/app/ui/wysiwyg', title: '富文本', icon: '', },
            { key: '/app/ui/drags', title: '拖拽', icon: '', },
            { key: '/app/ui/gallery', title: '画廊', icon: '', },
        ],
    },
    {
        key: '/app/animation', title: '动画', icon: 'rocket',
        sub: [
            { key: '/app/animation/basicAnimations', title: '基础动画', icon: '', },
            { key: '/app/animation/exampleAnimations', title: '动画案例', icon: '', },
        ],
    },
    {
        key: '/app/table', title: '表格', icon: 'copy',
        sub: [
            { key: '/app/table/basicTable', title: '基础表格', icon: '', },
            { key: '/app/table/advancedTable', title: '高级表格', icon: '', },
            { key: '/app/table/asynchronousTable', title: '异步表格', icon: '', },
        ],
    },
    {
        key: '/app/form', title: '表单', icon: 'edit',
        sub: [
            { key: '/app/form/basicForm', title: '基础表单', icon: '', },
        ],
    },
    {
        key: '/app/chart', title: '图表', icon: 'area-chart',
        sub: [
            { key: '/app/chart/echarts', title: 'echarts', icon: '', },
            { key: '/app/chart/recharts', title: 'recharts', icon: '', },
        ],
    },
    {
        key: '/sub4', title: '页面', icon: 'switcher',
        sub: [
            { key: '/login', title: '登录', icon: '', },
            { key: '/404', title: '404', icon: '', },
        ],
    },
    {
        key: '/app/auth', title: '权限管理', icon: 'safety',
        sub: [
            { key: '/app/auth/basic', title: '基础演示', icon: '', },
            { key: '/app/auth/routerEnter', title: '路由拦截', icon: '', },
        ],
    },
    {
        key: '/app/cssModule', title: 'cssModule', icon: 'star',
    },
];