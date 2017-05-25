(function () {
  'use strict';

  if (process.env.NODE_ENV === 'production') {
    module.exports = {
      host: process.env.host || '',
      port: process.env.PORT || 4444,
      dbURI: process.env.dbURI
    };
  } else {
    module.exports = require('./dev.json');
    process.env.NODE_ENV = 'dev';
  }

  console.log('env->' + process.env.NODE_ENV);

})();

