'use strict';

var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , port = process.env.PORT || 3000
  ;

// Static content.
app.use(express.static('resources'));

app.set('view engine', 'pug');
app.set('views', process.cwd());

app.get('/', function (req, res) {
  res.render('welcome-page', { title: 'Hey', message: 'Welcome here!'});
});

server.listen(port);
