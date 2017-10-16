/**
 * @Author: Guoxing.han
 * @Date: 2017-10-16 16:47:07
 * @version 0.0.1
 * conect database
  */
const mongoose = require('mongoose');
const config = require('./../config/config')

mongoose.connect(config.mongoose, {useMongoClient: true});

/** 创建Schema、创建Model **/
var BookSchema = new mongoose.Schema({name: String, author: String, publishTime: Date});

mongoose.model('test', BookSchema);