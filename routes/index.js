/**
 * @Author: Guoxing.han
 * @Date: 2017-10-13 15:57:36
 * @version 0.0.1
  */
const home = require('./home');
const pages = require('./pages');
const admin = require('./admin');
const apis = require('./apis');

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