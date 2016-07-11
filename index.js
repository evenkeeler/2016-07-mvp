var app = require('./server/server.js');


 var port = process.env.PORT || 3000;


app.get('/', function(req, res){
  res.render('./client/index.html');
});
app.listen(port);

console.log('Server now listening on port ' + port);

