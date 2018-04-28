/**
 * @Author: Guoxing.han
 * @Date: 2017-10-16 16:47:07
 * @version 0.0.1
 * conect database
  */
const mongoose = require('mongoose');
const config = require('./../config/config')
mongoose.connect(config.mongoose, { useMongoClient: true });
const db = mongoose.connection;
db.on('connected', function () {
  console.log('Mongoose connected to' + config.mongoose)
});
db.on('error', function (err) {
  console.log('Mongoose connected error' + err)
});
db.on('disconnected', function () {
  console.log('Mongoose disconnected')
});


require('./articles');

