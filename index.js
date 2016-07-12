var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Q = require('q');

var shifts = [];

/************************************/

var ShiftSchema = new mongoose.Schema({
  hours: Number,
  rate: Number
});

var Shift = mongoose.model('Shift', ShiftSchema);

var getAllShifts = Q.nbind(Shift.find, Shift);
var createShift = Q.nbind(Shift.create, Shift);

var shiftMethods = {
  allShifts: function(req, res){
    getAllShifts({})
      .then(function (shifts){
        res.send(shifts);
      });
  },
  newShift: function(req, res){
    console.log('newShift on index.js');
    var hours = req.body.hours,
        rate = req.body.rate;
    createShift({hours: hours, rate: rate})
      .then(function(){
        console.log('inside creatShift');
        return getAllShifts({});
      })
      .then(function(shifts){
        console.log('about to send' + shifts);
        console.log(mongoose);
        res.send(shifts);
      })
  }
}
var mongooseUri = process.env.MONGODB_URI || 'mongodb://localhost/tranquil-hamlet-96020';
mongoose.connect(mongooseUri);

/************************************/
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use(express.urlencoded());

app.use('/', express.static(path.resolve(__dirname + '/client')));

app.post('/shifts', function(req, res){
  // var hours = req.body.hours,
  //     rate = req.body.rate;
  // shifts.push({hours: hours, rate: rate});
  // res.send(shifts);
  shiftMethods.newShift(req, res);
});




app.listen(port);

console.log('Server now listening on port ' + port);

