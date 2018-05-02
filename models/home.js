/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-02 11:01:15 
 * @version 0.0.1 
 */

const DB = require('./../services/mongodbUtil')

/**
 * 首页数据
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