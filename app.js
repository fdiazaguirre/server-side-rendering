'use strict';

var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , port = process.env.port || 3000
  ;

// Static content.
app.use(express.static('resources'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/welcome-page.html');
});

server.listen(port);
