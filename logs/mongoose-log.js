/**
 * @Author: Guoxing.han
 * @Date: 2017-10-16 16:51:10
 * @version 0.0.1
 * logs
  */
const mongoose = require('mongoose');
const config = require('./../config/config')
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