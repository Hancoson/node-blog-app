/**
 * @Author: Guoxing.han
 * @Date: 2017-10-16 15:23:52
 * @version 0.0.1
  */
const express = require('express');
const router = express.Router();
const blogDB = require('./../models/pages');

router.get('/1', function (req, res, next) {
  const _param = req.params.param;

  blogDB.find({
    _id: '59e577a9ee26f233d5ce016a'
  }, function (err, docs) {
    console.log(docs);
    res.render('blog', {
      title: docs[0].title,
      info: docs[0].info
    });
  });
  //res.render('index', {title: '1'});
});
router.get('/2', function (req, res, next) {
  res.render('index', {title: '2'});
});

module.exports = router;
