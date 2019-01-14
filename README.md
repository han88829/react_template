## 使用技术

- "react-dom": "^16.7.0",
- "react-router-dom": "^4.3.1"
- "mobx": "^5.8.0"
- "mobx-react": "^5.4.3"

## 提示
- 项目采用了scss,为统一格式,因此会忽略所有的css文件,所有的样式文件请新建*.scss;使用方法兼容css.

## 如何开始项目


* `npm i` ,`cnpm i` or `yarn` 下载依赖包
* `npm start` 开启项目并运行在3000端口
* `npm run build` 打包项目

## 项目说明

* 所有的全局路由在src下route.js中配置
* 所有菜单栏中跳转路由，须在src/component/app/index.js 中进行配置，
* 因加入的面包屑所以需要在src/store/RouteData.js中按格式添加路由信息标准格式如下：
* 
{
    name: "个人中心",   一级菜单名称，必须
    key: "user",       一级菜单key，必须，且不重复
    icon: "user",      一级菜单icon，如果一级菜单下面没有子菜单（children）无需设置，设置名称，参考https://ant.design/components/icon-cn/
    path: "/app/user", 一级菜单且没有子菜单，必须设置，否则可为空
    children: [        二级菜单，以下字段都不能为空
        {
            name: "个人",       二级菜单名称
            path: "/app/user",  二级菜单路由
            key: "user1",       二级菜单key
        }
    ]
},

## 关于项目打包

* 因为对项目体积进行了特别优化，所以打包速度会有所降低
* 打包配置文件在 config/webpack.config.js
* 打包文件输出目录 /config/path.js    appBuild: resolveApp('build'),   其中build为输出的打包文件目录，可以自行修改

## 本地开发跨域，请求代理

*  统一到package.json中进行配置
*  配置格式如下
*  "proxy": "http://nestadmin.com"  全部进行转发
*  部分转发，所有home开头的接口转发到 http://nestadmin.com/home
*  "proxy":{
*   "/home/**":{
*      "target":"http://nestadmin.com/home",
*      "changeOrigin": true
*    }
*  }

## 文件列表



├─assets     静态文件
│ ├─bg.jpg
│ ├─bgblue.jpg
│ └─logo.png
├─component  组件
│ ├─admin    菜单
│ │ ├─admin.css
│ │ └─index.js
│ ├─app      app路由
│ │ └─index.js
│ ├─login    登录
│ │ ├─index.js
│ │ └─login.css
│ ├─user
│ │ └─index.js
├─store      mobx状态书
│ ├─menuName.js
│ ├─RouteData.js
│ └─store.js
├─Bundle.js  按需加载组件
├─index.css
├─index.js   入口文件
└─Route.js   总路由

 
# 进行中
* 后期会针对在后台管理项目上的经验，加入一些自己开发中所经常用到的技术。。。
