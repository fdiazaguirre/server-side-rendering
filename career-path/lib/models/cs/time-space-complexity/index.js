(function () {
  'use strict';
  const Path = require('path');

  /**
   * Maps routes and methods.
   *
   * @param {Object} mongoose
   * @param {Object} router
   * @return {Object} original router with this module routes.
   */
  module.exports.create = function (mongoose, router) {
    var restful = require(Path.resolve(__dirname, 'restful')).create()
      ;

    function noImpl(req, res) {
      res.error({
        class: 'NOT-IMPLEMENTED'
      });
    }

    router.get('/cs/complexity', restful.getDoc);
    router.post('/cs/complexity', noImpl);
    router.put('/cs/complexity', noImpl);
    router.delete('/cs/complexity', noImpl);

    return router;
  };

})();
