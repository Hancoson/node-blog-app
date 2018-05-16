/**
 * @Author: Guoxing.han 
 * @Date: 2018-05-02 10:34:34 
 * @version 0.0.1 
 */
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function (req, res, next) {
  res.send('login')
});

module.exports = router;