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
      if (!req.params.id) {
        res.render('404', {title: 404});
      } else {
        data
          .forEach(function (v, i) {
            console.log(req.params, v._id)
            if (req.params.id == v._id) {
              if (req.params.edit == 'edit') {
                res.render('admin/edit', {
                  title: data[i].title,
                  info: data[i].info
                });
              } else {
                res.render('articles', {
                  title: data[i].title,
                  info: data[i].info
                });
              }

            }
          })

      }
    });
};