/**
 * @Author: Guoxing.han
 * @Date: 2017-10-13 15:57:36
 * @version 0.0.1
  */
const home = require('./../controllers/home');
const articles = require('./../controllers/articles');
const apis = require('./../controllers/apis');
const config = require('./../../config/config')

const myRoutes = (server, app, handle) => {

  //add
  server.use('/add', function (req, res) {
    res.render('admin/add', {});
  });

  //接口 API
  server.get(`/${config.apiVersion}/:id`, apis.getGroup);
  server.post(`/${config.apiVersion}/add`, apis.addArticles);
  server.get(`/${config.apiVersion}/article/:id`, articles.getArticle);

  //pages
  //server.get('/articles/:id', articles.getArticle);
  //edit
  //server.post(`/${config.apiVersion}/edit/:id`, articles.updateArticle);
  server.post(`/${config.apiVersion}/edit/:id`, async context => {
    //const body = context.request.body
    const { req, res, params, ip } = context

    console.log(req, res)

    const result = await apis.comment(Object.assign(body, {
      ip: ip,
      id: params.id,
      ua: req.headers['user-agent']
    }), res, req.method)
    context.body = result
    context.respond = true
  });


  server.post(`/${config.apiVersion}/dele`, articles.deleArticles);


  server.get('/article/:id', (req, res) => {
    return app.render(req, res, '/article', {
      id: req.params.id
    })
  })
  server.get('/admin/edit/:id', (req, res) => {
    return app.render(req, res, '/admin/edit', {
      id: req.params.id
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
}

module.exports = myRoutes