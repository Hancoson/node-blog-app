/**
 * @Author: Guoxing.han
 * @Date: 2017-10-13 15:57:45
 * @version 0.0.1
  */
var express = require('express');
var URL = require('url');
var router = express.Router();

/* GET home page. */
router.get('/v', function (req, res, next) {
  let params = URL
    .parse(req.url, true)
    .query;

  console.log(params, req.params.id)

  res.send({s: 200, title: `你访问的是${req.params.id}`});
});

module.exports = router;
