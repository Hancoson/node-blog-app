/**
 * @Author: Guoxing.han
 * @Date: 2017-10-16 15:23:52
 * @version 0.0.1
  */
const express = require('express');

module.exports = function (app) {
  const blogdbs = require('./../app/controllers/pages');
  app.get('/pages/get', blogdbs.getGroup);
};