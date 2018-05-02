/**
 * @Author: Guoxing.han
 * @Date: 2017-10-17 14:21:01
 * @version 0.0.1
  */
const moment = require('moment');
const home = require('./../models/home')

exports.getGroup = function (req, res) {
  /**
   * 查询所有文章
   */
  var tableName = 'blogdbs'
  home.list(tableName, null, function (err, data) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(data)
    }
  })

};
exports.addArticles = function (req, res) {
  /**
   * 新增
   */
  var tableName = 'blogdbs'
  var addDate = { title: req.body.title, info: req.body.info, publishTime: new Date() }
  home.add(tableName, addDate, function (err, data) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(data)
    }
  })
};