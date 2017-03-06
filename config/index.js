(function () {
  'use strict';

  if (process.env.NODE_ENV === 'production') {
    module.exports = {
      host: process.env.host || '',
      port: process.env.port,
      dbURI: process.env.dbURI
    };
  } else {
    module.exports = require('./dev.json');
  }

})();

