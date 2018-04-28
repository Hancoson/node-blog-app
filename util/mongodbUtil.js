/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-28 16:24:47 
 * @version 0.0.1
 * mongoose操作类(封装mongodb)
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('./../config/config')
const Schemas = require('./../services/Schemas')

mongoose.connect(config.mongoose, { useMongoClient: true });
const mongoConnect = mongoose.connection;
mongoConnect.on('connected', function () {
  console.log('Mongoose connected to' + config.mongoose)
});
mongoConnect.on('error', function (err) {
  console.log('Mongoose connected error' + err)
});
mongoConnect.on('disconnected', function () {
  console.log('Mongoose disconnected')
});



const DB = function () {
  this.mongoClient = {};
}

/**
 * 初始化mongoose model
 * @param table_name 表名称(集合名称)
 */
DB.prototype.getConnection = function (table_name) {
  if (!table_name) return;
  var client = this.mongoClient[table_name];
  if (!client) {
    //构建model
    client = mongoose.model(table_name, new Schema(Schemas[table_name]));
    this.mongoClient[table_name] = client;
  }
  return client;
};

/**
 * 查询数据
 * @param {*} table_name 表名
 * @param {*} conditions 查询条件
 * @param {*} callback 返回函数
 */
DB.prototype.find = function (table_name, conditions, callback) {
  var node_model = this.getConnection(table_name);
  node_model.find({}, function (err, data) {
    if (!data) {
      res.json({ code: 404, msg: "Empty" });
    } else {
      if (req.params.id === 'home') {
        res.json({ code: 200, msg: "success", data: data, count: data.length, refer: req.params });
      } else {
        res.json({ code: 404, msg: "Empty" });
      }
    }
  })
}