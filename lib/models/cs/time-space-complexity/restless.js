(function () {
  'use strict';
  const PATH = require('path'),
    Article = require(PATH.resolve(__dirname, '..', '..','article'));

  /**
   * Access to the DB and hide implementation details.
   *
   * @param {Object} mongoose storage.
   * @return {Object} domain that contains the implementation details and exposed interface for restful.
   */
  module.exports.createRestless = function () {
    Article.getDoc = function () {
      return Article.find({ _id: '57abbe65f36d2840aa66a737'}).exec().then(function (docs) {
        return docs[0];// Return only the 1st doc
      });
    };

    return Article;
  };


})();