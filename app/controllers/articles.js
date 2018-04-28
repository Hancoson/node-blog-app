/**
 * @Author: Guoxing.han
 * @Date: 2017-10-17 14:21:01
 * @version 0.0.1
  */
const moment = require('moment');
const mongoose = require('mongoose');
const blogdbs = mongoose.model('blogdbs');

exports.getArticle = function (req, res) {
  blogdbs.find({
    _id: req.params.id
  }, function (err, data) {
    if (!data) {
      res.render('404', { title: 404 });
    } else {
      res.render('articles', {
        _id: data[0]._id,
        title: data[0].title,
        info: data[0].info,
        publishTime: moment(data[0].publishTime).format('YYYY年MM月DD日 HH:mm:ss')
      });
    }
  })
};
exports.editArticle = function (req, res) {
  blogdbs.find({
    _id: req.params.id
  }, function (err, data) {
    if (err) {
      res.render('404', { title: 404 });
    } else {
      res.render('admin/edit', {
        _id: data[0]._id,
        title: data[0].title,
        info: data[0].info
      });

    }
  })
};