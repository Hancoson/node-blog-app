/**
 * @Author: Guoxing.han
 * @Date: 2017-10-17 11:19:15
 * @version 0.0.1
  */
const DB = require('./../services/mongodbUtil')

/**
 * 添加
 * @param {*} table_name 表名
 * @param {*} fields 数据
 * @param {*} callback 返回函数
 */
exports.add = function (table_name, fields, callback) {
  DB.save(table_name, fields, function (err, data) {
    if (err) {
      err = {
        status: 500,
        data: null,
        msg: '服务异常'
      }
      callback(err)
    }
    else {
      data = {
        status: 200,
        data: data,
        msg: '请求成功'
      }
      callback(null, data)
    }
  })
}

/**
 * 文章
 * @param {*} table_name 表名
 * @param {*} conditions 查询条件
 * @param {*} callback 返回函数
 */
exports.list = function (table_name, conditions, callback) {
  DB.find(table_name, conditions, function (err, data) {
    if (err) {
      err = {
        status: 500,
        data: null,
        msg: '服务异常'
      }
      callback(err)
    }
    else {
      data = {
        status: 200,
        data: data,
        msg: '请求成功'
      }
      callback(null, data)
    }
  })
}

/**
 * 更新文章
 * @param table_name 数据表名
 * @param conditions 更新条件 {_id: id}
 * @param new_date 更新的数据
 * @param {*} callback 返回函数
 */
exports.update = function (table_name, conditions, new_date, callback) {
  if (!new_date || !conditions) {
    if (callback) callback({ msg: 'Parameter error' });
    return;
  }
  var update_fields = {
    $set: new_date
  }
  var options = {
    multi: true
  }
  DB.update(table_name, conditions, update_fields, options, function (err, data) {
    if (err) {
      err = {
        status: 500,
        data: null,
        msg: '服务异常'
      }
      callback(err)
    }
    else {
      data = {
        status: 200,
        data: data,
        msg: '请求成功'
      }
      callback(null, data)
    }
  })
}


/**
 * 删除数据
 * @param table_name 表名
 * @param conditions 删除需要的条件 {_id: id}
 * @param callback 回调方法
 */
exports.remove = function (table_name, conditions, callback) {

  DB.remove(table_name, conditions, function (err, data) {
    if (err) {
      err = {
        status: 500,
        data: null,
        msg: '服务异常'
      }
      callback(err)
    }
    else {
      data = {
        status: 200,
        data: null,
        msg: '请求成功'
      }
      callback(null, data)
    }
  })
};