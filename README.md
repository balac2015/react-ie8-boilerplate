# react-ie8-boilerplate

react@0.14.9+react-router@2.3.0+rematch+axios+webpack+antd@1.11.6+echarts@4.1

-   cd react-ie8-boilerplate
-   npm i 或 yarn
-   npm run start 在 IE8 中无法调试，Chrome 可以
-   npm run build 可在 IE8 以及 Chrome 中正常运行

React 技术栈搭建 IE8 开发环境技术栈：

-   react react@0.14.9 15 以上版本不兼容 IE
-   react-router@2.3.0 2.4 以上不支持 IE8
-   rematch 状态管理, redux 的替代者, 当然这里使用 redux 也可以, mobx@4.x 经测试在 IE8 中不可用
-   axios 网络请求库, fly.js 经测试在 IE8 中不可用
-   webpack@1.15.0
-   antd@1.11.6 UI 框架, 2 以上不支持 IE8
-   echarts@4.1 IE8 兼容基础图表, 也可以去官网定制兼容 IE8 图表

[antd@1]: https://1x.ant.design/components/collapse/
[antd ie8 相关问题]: https://github.com/xcatliu/react-ie8#cn-make-your-react-app-work-in-ie8
[react ie8 github 模板地址]: https://github.com/localSummer/react-boilerplate-ie8
