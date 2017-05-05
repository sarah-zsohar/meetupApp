var http = require('http')
var express = require('express');
var bodyParser = require('body-parser');
var pug = require('pug');
var app = express();
var port = process.env.PORT || 8080;




app.set('views', __dirname + '/views');
app.set('view engine', "pug");
app.engine('pug', require('pug').__express);

app.get('/', function(request, response) {
  response.render('landing', {

  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('server is listening on ' + port)
})
