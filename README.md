# node-app
[![GitHub license](https://img.shields.io/github/license/Hancoson/node-blog-app.svg)](https://github.com/Hancoson/node-app/blob/master/LICENSE)
[![Codecov branch](https://img.shields.io/codecov/c/github/codecov/example-python/master.svg)](https://github.com/Hancoson/node-blog-app)
[![MyGet tenant](https://img.shields.io/dotnet.myget/dotnet-coreclr/dt/Microsoft.DotNet.CoreCLR.svg)](https://github.com/Hancoson/node-blog-app)

This is a demo application that integrates node.js, express, mongoose React and Nextjs to develop a simple blog application.

## 介绍

该项目通过使用 Nextjs 技术，实现了 React 同构方案。采用 Nodejs 搭建服务，结合 Mongoose 数据库，实现了一个简单的博客系统。
也可以参考项目 [v1.0 版本通过 Ejs 模版](https://github.com/Hancoson/node-blog-app/tree/ejs-tpl)的实现，[相关文章>>](http://www.vsoui.com/2017/10/19/node-blog-demo/)。

### 技术实现

- [x] Node > 8.x
- [x] Express
- [x] mongoose
- [x] react > 16.x
- [x] Nextjs
- [x] sass
- [x] isomorphic-unfetch

### 目录结构

```sh
├─server # 服务
│  ├─controllers # 控制器
│  ├─dto  #
│  ├─models # 模型
│  ├─routes  # 路由
│  └─service
├─pages # 页面
│  ├─…… #
│  └─index.js # 主页面
├─compontents # 组件
│  └─#……
├─config # 配置文件
│  └─#……
├─assets # 静态资源
│  └─#……
├─build # 发布目录
│  └─ #……
├─next.config.js # next配置文件
├─package.json
├─postcss.config.js # postcss配置
├─server.js # 服务入口文件
└─.babelrc
```

## 如何使用

主要针对我当前的项目>> [node-blog-app](https://github.com/Hancoson/node-blog-app) 来说说使用方法：

### Install

```sh
git clone https://github.com/Hancoson/node-blog-app.git
# and
yarn
```

### Install mongodb

```sh
brew install mongodb
```

### Start Mongo

```sh
mongod
# or
brew services start mongodb
```

最后执行：

```sh
mongo
```

### Create a datebase

```sh
use {nodeApp}
```

### Start App

```sh
npm run dev #(start dev)

npm run build #(构建)

npm start #(启动项目)
```