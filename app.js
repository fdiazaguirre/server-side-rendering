'use strict';

var express = require('express')
  , app = express()
  , path = require('path')
  , server = require('http').createServer(app)
  , port = process.env.port || 4200
  ;

// Static content.
app.use(express.static('resources'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/welcome-page.html'));
});

server.listen(port);
