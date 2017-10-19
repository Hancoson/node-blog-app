/**
 * @Author: Guoxing.han
 * @Date: 2017-10-17 14:21:01
 * @version 0.0.1
  */
const moment = require('moment');
const mongoose = require('mongoose');
const blogdbs = mongoose.model('blogdbs');
exports.getGroup = function (req, res) {
  /**
   * 查询所有文章
   */
  blogdbs
    .find({}, function (err, data) {
      if (!data) {
        res.json({code: 404, msg: "Empty"});
      } else {
        if (req.params.id === 'home') {
          res.json({code: 200, msg: "success", data: data, count: data.length, refer: req.params});
        } else {
          res.json({code: 404, msg: "Empty"});
        }
      }
    })
};
exports.postGroup = function (req, res) {
  console.log(req.body)

  /**
   * 按条件编辑
   * @param _id
   */
  /*
  blogdbs.findOne({
    _id: req.params.id
  }, function (err, data) {
    if (err) {
      res.json({code: 0, msg: "err"});
    } else {
      data.title = req.body.title
      data.info = req.body.info
      data.save();
      res.json({code: 200, msg: "success", data: data, count: data.length, refer: req.params});

    }
  });
  */
  const query = {
    _id: req.params.id
  };
  const options = {
    multi: true
  };
  blogdbs.update(query, {
    $set: {
      title: req.body.title,
      info: req.body.info
    }
  }, options, function (err, data) {
    if (err) {
      res.json({code: 0, msg: "err"});
    } else {
      res.json({code: 200, msg: "success", data: data, count: data.length, refer: req.params});
    }
  })

};
exports.addArticles = function (req, res) {
  console.log(req.body)
  /**
   * 新增
   */
  const data = new blogdbs({title: req.body.title, info: req.body.info, publishTime: new Date()});

  data.save(function (err) { // 执行保存，并查看返回情况
    if (err) {
      res.json({code: 0, msg: "err"});
    } else {
      res.json({code: 200, msg: "success", data: data, count: data.length, refer: req.params});

    }
  })

};
exports.deleArticles = function (req, res) {
  console.log(req.body)
  /**
   * 删除
   */
  var _id = req.body.id;
  /*
  blogdbs.findOne({
    _id: _id
  }, function (err, data) {
    if (err) {
      res.json({code: 0, msg: "err"});
    } else {
      data.remove();
      res.json({code: 200, msg: "dele success", data: data, count: data.length, refer: req.params});
    }
  })
*/
  blogdbs.remove({
    _id: _id
  }, function (err, data) {
    if (err) {
      res.json({code: 0, msg: "err"});
    } else {
      res.json({code: 200, msg: "dele success", data: data, count: data.length, refer: req.params});
    }
  })

};