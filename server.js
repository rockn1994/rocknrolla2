var express = require('express');
var request = require('request');
var app = express();

// the cors fix

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views',__dirname +'/views');
app.use(express.static('views'));

// defining the variable which are reusable for making another rest api call
var welcome = 'hommie he wants today s post';
var token='token';
var datas = {
  headers: {
        'Authorization':'Bearer '+token,
        'Content-Type':'application/json',
        'Accept':'application/json'
  },
  uri: "https://api.producthunt.com/v1/posts",
  method: "GET",
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10
};

// hitting the product hunt api via express.

app.get('/todaypost',function(req,res){
  console.log(welcome);
  request(datas, function(error, response, body) {
    res.send(body);
  });

});

app.get('/',function(req,res){
  res.render('index');
  });

// server details for the terminal
var server = app.listen(8081,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s",host,port);
})
