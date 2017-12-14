# node-app
[![GitHub license](https://img.shields.io/github/license/Hancoson/node-app.svg)](https://github.com/Hancoson/node-app/blob/master/LICENSE)
[![Codecov branch](https://img.shields.io/codecov/c/github/codecov/example-python/master.svg)](https://github.com/Hancoson/node-app)
[![MyGet tenant](https://img.shields.io/dotnet.myget/dotnet-coreclr/dt/Microsoft.DotNet.CoreCLR.svg)](https://github.com/Hancoson/node-app)

This is a demo application that integrates node.js, express, mongoose and pm2 to develop a simple blog application.

## Requirements

* [NodeJs](http://nodejs.org) >= 6.x 
* [Express](http://expressjs.com)
* [mongoose](http://mongoosejs.com)

## Install

```sh
$ git clone git://github.com/Hancoson/node-app.git

$ yarn（npm i)
```

## Install mongodb
```sh
$ brew install mongodb
```

## Start Mongo

```sh
$ mongod
```
or
```sh
$ brew services start mongodb
```

last
```sh
$ mongo
```

## Create a datebase
```sh
$ use {nodeApp}
```


## Start App

```sh
$ npm run pm2
```
or
```sh
$ npm start
```
Then visit [http://localhost:8088/](http://localhost:8088/)

## Logs

```sh
$ npm run log
```
