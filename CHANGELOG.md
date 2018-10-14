### 更新日志

#### 2017-07-08
- 依赖包版本升级
    - react@15.6.1
    - antd@2.11.2
    - webpack@2.6.1
    - 等等
#### 2017-08-01
- 引入redux系列
    - redux@3.7.2
    - redux-thunk@2.2.0
    - react-redux@5.0.5
- 增加权限管理模块
    - 使用easy-mock模拟数据模拟登录接口
    - 使用redux系列将登录用户数据传递给权限组件
    - 权限组件采用Render Callback的方式传递权限给需要受控制的组件（具体做法请查看源代码。）
    - 用户状态保存在localStorage中
    - 具体做法请运行项目查看
    - PS：以上管理权限只是一种方式，但这绝对不是唯一的方式，也不是最好的方式。如果你有更好的方式，不妨加上面的群和大家一起分享下。😄😄
- 增加路径别名
    - 使用@别名处理引入组件相对路径过长问题。
    - 缺点：编辑器不能使用快捷提示和快捷跳转到相应的文件
#### 2017-08-13
- 权限管理模块增加页面跳转权限验证
    - 点击权限管理的路由拦截，若没有访问权限则会跳转到404页面。
    - 大致实现方式(非常简单)：通过向自定义router组件传入store，登录之后可获取到redux中的权限state数据，并通过判断是否包含权限进行跳转。ps: 该demo的效果是管理员登录之后才能跳转到路由拦截页面。具体操作请拉取代码尝试。
#### 2017-08-26
- 增加响应式布局
    - 替换antd Col 组件的响应式栅格为md(具体参数用法请查看antd官方文档)
    - 初始化页面是获取当前浏览器宽度设置菜单显示类型
    - 监听window的onresize函数，设置菜单显示类型。PS：浏览器宽度存入redux中，方便组件之间传递。
![截图](https://raw.githubusercontent.com/yezihaohao/react-admin/master/src/style/imgs/mobile.gif)
#### 2017-09-13
- 依赖包版本升级
    - antd@2.13.1(目前最新版)
    
#### 2017-10-21
- 开发环境增加react-hot-loader-保持状态刷新组件(译：实时调整组件),可参考以下相关项目
    - [react-hot-loader](https://github.com/gaearon/react-hot-loader)

#### 2017-12-12
- 依赖包版本升级
    - antd@3.0.1(目前最新版)
    - react-router-dom@4.2.2
- 大改动
    - react-router切换4.x版本，切换响应的版本路由写法(具体见代码更新日志) 
    - ps: react-router 3.x的版本请查看代码分支router3.x
    
#### 2018-01-12
- 增加cssmodule的支持（css, less）
    - 建议用css预处理器，文件名为  xxx.module.less，引入相应组件即可使用。 
    
    - 具体做法参见新增模块，路由后缀：/app/cssModule。[点击访问](http://cheng_haohao.oschina.io/reactadmin/#/app/cssModule)

#### 2018-10-13
- 重大更新
    - 升级create-react-app 2.x，详情文档见[官方文档](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html)
- 升级大部分第三方库，升级版本见
- 增加自定义主题功能
    - 主题基础样式配置见[]()
    - 修改主题基础样式后执行`yarn theme 或 npm run theme`，默认主题即可生效
    - 页面上可自定义主题颜色配置(根据此可添加字体大小等其他antd的默认样式)