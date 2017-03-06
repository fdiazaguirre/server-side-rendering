(function () {
  'use strict';

  const _ = require('lodash');

  /**
   * Maps routes and methods.
   *
   * @param {Object} mongoose
   * @param {Object} router
   * @return {Object} original router with this module routes.
   */
  module.exports.create = function (mongoose) {
    var contentSchema = mongoose.Schema({'type': String, 'value': String}),
      articleSchema = mongoose.Schema({'author': String, 'date': {type: Date, default: Date.now }, 'title': String,
                          'content': [contentSchema], 'tags': Array}),
      article = mongoose.model('Article', articleSchema);

    return article.find({'author': 'Federico Diaz' }).exec().then(function ($articles) {
      return $articles;
    });
  };

})();