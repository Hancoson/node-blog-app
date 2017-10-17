/**
 * @Author: Guoxing.han
 * @Date: 2017-10-17 14:21:01
 * @version 0.0.1
  */
const mongoose = require('mongoose');
const blogdbs = mongoose.model('blogdbs');
exports.getGroup = function (req, res) {
  blogdbs
    .find({})
    .exec(function (err, data) {
      if (!data) {
        res.json({code: 404, msg: "Empty"});
      } else {
        if (req.params.id === 'home') {
          res.json({code: 200, msg: "success", data: data, count: data.length, refer: req.params});
        } else {
          res.json({code: 404, msg: "Empty"});
        }
      }
    });
};
exports.postGroup = function (req, res) {
  blogdbs
    .find({})
    .exec(function (err, data) {
      if (!data) {
        res.json({code: 404, msg: "Empty"});
      } else {
        if (req.params.id === 'add') {
          res.json({code: 200, msg: "success", data: data, count: data.length, refer: req.params});
        } else {
          res.json({code: 404, msg: "Empty"});
        }
      }
    });
};