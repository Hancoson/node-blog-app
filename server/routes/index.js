/**
 * @Author: Guoxing.han
 * @Date: 2017-10-13 15:57:36
 * @version 0.0.1
  */
const home = require('./../controllers/home');
const articles = require('./../controllers/articles');
const apis = require('./../controllers/apis');

const myRoutes = (app, handle) => {

  app.get('/a', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  app.get('/b', (req, res) => {
    console.log(1111)
    return app.render(req, res, '/a', req.query)
  })

  app.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })

  //home
  app.use('/', home);

  //add
  app.use('/add', function (req, res) {
    res.render('admin/add', {});
  });

  //接口 API
  app.get('/v1/:id', apis.getGroup);
  app.post('/v1/add', apis.addArticles);

  //pages
  app.get('/articles/:id', articles.getArticle);
  //edit
  app.get('/articles/:edit/:id', articles.editArticle);
  app.post('/v1/edit/:id', articles.updateArticle);


  app.post('/v1/dele', articles.deleArticles);

  app.get('*', (req, res) => {
    return handle(req, res)
  })
}

module.exports = myRoutes