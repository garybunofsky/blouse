var express = require('express');
var app = express();
var path = require('path');
var port = 8080;


app.use('/public', express.static('public'))

app.use('/', function (req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);
console.log('Express running on port ' + port);
