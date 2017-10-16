/**
 * @Author: Guoxing.han
 * @Date: 2017-10-16 15:23:52
 * @version 0.0.1
  */
var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
  res.render('admin/index', {title: '1'});
});
router.get('/2', function (req, res, next) {
  res.render('admin/index', {title: '2'});
});

module.exports = router;
