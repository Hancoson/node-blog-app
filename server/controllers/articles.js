/**
 * @Author: Guoxing.han
 * @Date: 2017-10-17 14:21:01
 * @version 0.0.1
  */
const moment = require('moment')
const articles = require('./../models/articles')

exports.getArticle = function (req, res) {

  var tableName = 'blogdbs'
  articles.list(tableName, {
    _id: req.params.id
  }, function (err, data) {
    if (err) {
      res.json(err);
    }
    else {
      console.log(data)
      data = data.data
      res.json(data)
      /* res.render('articles', {
        _id: data[0]._id,
        title: data[0].title,
        info: data[0].info,
        publishTime: moment(data[0].publishTime).format('YYYY年MM月DD日 HH:mm:ss')
      }); */
    }
  })
};



exports.updateArticle = function (req, res) {
  const query = {
    _id: req.params.id
  };
  console.log(req.body)
  var tableName = 'blogdbs'
  const newDate = {
    title: req.body.title,
    info: req.body.info
  };

  articles.update(tableName, query, newDate, function (err, data) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(data)
    }
  })

};

exports.deleArticles = function (req, res) {
  const query = {
    _id: req.body.id
  };
  var tableName = 'blogdbs'

  articles.remove(tableName, query, function (err, data) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(data)
    }
  })
};