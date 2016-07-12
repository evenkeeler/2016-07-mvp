var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;


// app.get('/', function(req, res){
//   res.render('./client/index.html');
// });

app.get('/', function(req, res){
  // app.use(express.static('index.html'));
 res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(port);

console.log('Server now listening on port ' + port);

