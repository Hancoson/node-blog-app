/**
 * @Author: Guoxing.han
 * @Date: 2017-10-17 11:19:15
 * @version 0.0.1
  */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var _blogSchema = new Schema({
  title: {
    type: 'String'
  },
  info: {
    type: 'String'
  },
  publishTime: Date
});

module.exports = mongoose.model("blogdbs", _blogSchema);