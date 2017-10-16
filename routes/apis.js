/**
 * @Author: Guoxing.han
 * @Date: 2017-10-13 15:57:45
 * @version 0.0.1
  */
var express = require('express');
var router = express.Router();
var URL = require('url');

/* GET home page. */
router.get('/api/:id', function (req, res, next) {
  console.log(req.params.id)

  res.send({s: 200, title: `你访问的是${req.params.id}`});
});
router.get('/v', function (req, res, next) {
  let params = URL
    .parse(req.url, true)
    .query;

  console.log(params, req.params.id)

  res.send({s: 200, title: `你访问的是${params.id}`});
});
router.post('/p', function (req, res, next) {

  res.send({s: 200, title: `你访问的是post`});
});

module.exports = router;
