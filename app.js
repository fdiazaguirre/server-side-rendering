'use strict';

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const config = require('./config');
const db = require('./db').create(config);


// Static content.
app.use(express.static('resources'));
app.use(express.static('vendor'));
app.use(express.static('controllers'));
app.set('view engine', 'pug');
// indent produces HTML for clarity
app.locals.pretty = true;

return require('./routes').create(db).then(function (myRouter) {
  app.use('/', myRouter);

  console.log('Staring server at => ' + config.host + ':' + config.port);

  server.listen(config.port);
});

