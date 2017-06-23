var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
var apirouter = require('./apirouter.js');

app.use('/api', apirouter);
app.use('/static', express.static('./static'));
app.use('/views', express.static('./views'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
  res.sendFile('./index.html', {root: __dirname});
});

//***最后***错误地址重定向到根路由，不包括前端路由
app.use(function(req, res, next) {
  res.redirect('/');
});

var server = app.listen(7777, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});