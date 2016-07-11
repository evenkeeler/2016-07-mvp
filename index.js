var app = require('./server/server.js');
var express = require('express');

 var port = process.env.PORT || 3000;


// app.get('/', function(req, res){
//   res.render('./client/index.html');
// });

app.use('/', express.static(__dirname +'/client'));

app.listen(port);

console.log('Server now listening on port ' + port);

