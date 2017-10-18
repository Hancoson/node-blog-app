/**
 * @Author: Guoxing.han
 * @Date: 2017-10-13 15:57:36
 * @version 0.0.1
  */
const admin = require('./admin');

const home = require('./home');
const articles = require('./../app/controllers/articles');
const apis = require('./../app/controllers/apis');

const myRoutes = (app) => {
  //home
  app.use('/', home);

  //pages
  app.get('/articles/:id', articles.getArticle);
  //edit
  app.get('/articles/:edit/:id', articles.editArticle);
  //add
  app.use('/add', function (req, res) {
    res.render('admin/add', {});
  });

  //admin
  app.use('/admin', admin);

  //接口
  app.get('/v1/:id', apis.getGroup);
  app.post('/v1/edit/:id', apis.postGroup);
  app.post('/v1/add', apis.addArticles);
  app.post('/v1/dele', apis.deleArticles);

  app.get('/aa', function (req, res) {
    res.send('aa')
  })
}

module.exports = myRoutes