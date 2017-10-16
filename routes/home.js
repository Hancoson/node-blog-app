var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});
router.get('/login', function (req, res, next) {
  res.render('index', {title: 'login'});
});

module.exports = router;
