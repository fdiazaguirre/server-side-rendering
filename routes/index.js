(function () {

  'use strict';
  const express = require('express');
  const router = express.Router();
  const model = require('main');

  router.get('/main', function(req, res, next) {
    res.render('main', model);
  });

  module.exports = {
    myRouter: router
  };

})();
