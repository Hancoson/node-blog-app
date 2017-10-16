/**
 * @Author: Guoxing.han
 * @Date: 2017-10-13 15:57:36
 * @version 0.0.1
  */
var home = require('./home');
var pages = require('./pages');
var admin = require('./admin');
var apis = require('./apis');

const myRoutes = (app) => {
  //home
  app.use('/', home);

  //pages
  app.use('/pages', pages);

  //admin
  app.use('/admin', admin);

  //接口
  app.use('/v1', apis);

  app.get('/aa', function (req, res) {
    res.send('aa')
  })
}

module.exports = myRoutes