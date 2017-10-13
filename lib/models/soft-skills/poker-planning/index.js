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

    router.get('/soft-skills/poker-planning', restful.getDoc);
    router.post('/soft-skills/poker-planning', noImpl);
    router.put('/soft-skills/poker-planning', noImpl);
    router.delete('/soft-skills/poker-planning', noImpl);

    return router;
  };

})();
