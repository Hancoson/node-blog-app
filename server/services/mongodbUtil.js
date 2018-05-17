/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-28 16:24:47 
 * @version 0.0.1
 * mongoose操作类(封装mongodb)
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('./../../config/config')
const Schemas = require('./../services/Schemas')

mongoose.connect(config.mongoose);
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
  node_model.find(conditions || {}, function (err, res) {
    if (err) {
      callback(err);
    }
    else {
      callback(null, res);
    }
  })
}

/**
 * 保存数据
 * @param table_name 表名
 * @param fields 表数据
 * @param callback 回调方法
 */
DB.prototype.save = function (table_name, fields, callback) {
  if (!fields) {
    if (callback) callback({ msg: 'Field is not allowed for null' });
    return false;
  }

  var node_model = this.getConnection(table_name);
  var mongooseEntity = new node_model(fields);
  mongooseEntity.save(function (err, res) {
    if (err) {
      if (callback) callback(err);
    } else {
      if (callback) callback(null, res);
    }
  });
};


/**
 * 更新数据方法(带操作符的)
 * @param table_name 数据表名
 * @param conditions 更新条件 {_id: id}
 * @param update_fields 更新的操作符 {$set: {id: 123}}
 * @param options 参数
 * @param callback 回调方法
 */
DB.prototype.update = function (table_name, conditions, update_fields, options, callback) {
  if (!update_fields || !conditions) {
    if (callback) callback({ msg: 'Parameter error' });
    return;
  }
  var node_model = this.getConnection(table_name);
  node_model.update(conditions, update_fields, options, function (err, res) {
    if (callback) callback(err, res);
  });
};


/**
 * 删除数据
 * @param table_name 表名
 * @param conditions 删除需要的条件 {_id: id}
 * @param callback 回调方法
 */
DB.prototype.remove = function (table_name, conditions, callback) {
  var node_model = this.getConnection(table_name);
  node_model.remove(conditions, function (err, res) {
    if (err) {
      if (callback) callback(err);
    } else {
      if (callback) callback(null, res);
    }
  });
};

module.exports = new DB();