(function () {
  'use strict';
  var PromiseA = require('bluebird');
  var Mongoose = require('mongoose');
  Mongoose.Promise = PromiseA;

  module.exports.create = function (config) {
    Mongoose.connect(config.dbURI);
    const db = Mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log('we\'re connected to mongoDB!');
    });

    return Mongoose;
  };

})();
