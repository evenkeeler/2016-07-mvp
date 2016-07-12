var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var shifts = [
  { hours: 8, rate: 15},
  { hours: 11, rate: 16},
  { hours: 7, rate: 13},
  { hours: 8, rate: 13}
];


var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use(express.urlencoded());

app.use('/', express.static(path.resolve(__dirname + '/client')));

app.post('/shifts', function(req, res){
  var hours = req.body.hours,
      rate = req.body.rate;
  shifts.push({hours: hours, rate: rate});
  res.send(shifts);
});




app.listen(port);

console.log('Server now listening on port ' + port);

