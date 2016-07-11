var app = require('server/server.js');


 var port = process.env.PORT || 3000;

app.listen(port);

app.get('/', function(req, res){
  res.render('client/index.js');
});

console.log('Server now listening on port ' + port);

