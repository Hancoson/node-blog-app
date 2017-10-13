/**
 * @Author: Guoxing.han 
 * @Date: 2017-10-13 15:57:36 
 * @version 0.0.1 
  */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
