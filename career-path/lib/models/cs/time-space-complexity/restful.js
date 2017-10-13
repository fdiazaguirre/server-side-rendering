(function () {
  'use strict';

  /**
   * Renders article's pages.
   *
   * @param {Object} mongoose storage.
   * @return {Object} restful object.
   */
  module.exports.create = function() {
    var Article = require('./restless').createRestless();

    Article.restful = {};

    Article.restful.getDoc = function (req, res) {
      return Article.getDoc().then(function (docs) {
        res.render('main', {content: docs});
      }).catch(function (err) {
        //logger.handleError(err, '[ERROR] auction-lot/getAuctionLots', req);
        res.error(err);
      });
    };

    return Article.restful;
  };

})();