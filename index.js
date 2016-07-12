var app = require('./server/server.js');
var express = require('express');
var path = require('path');

 var port = process.env.PORT || 3000;


// app.get('/', function(req, res){
//   res.render('./client/index.html');
// });

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/shifts', function(req, res){
  res.end('blah');
})

app.get

app.listen(port);

console.log('Server now listening on port ' + port);

