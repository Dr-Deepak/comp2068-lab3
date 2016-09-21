//link to connect to start our Server
var connect = require('connect');
var app = connect();

var  Method = function(req, res, next){
  // get variables from query and store them in local variables
  var qs = require('url').parse(req.url,true).query;
  var methods = qs.method;
  var x = qs.x;
  var y = qs.y;
  var total = 0.00;
  var mChar ="";

  if(methods=="add"){
  total= x + y;
    mChar = "+";
  }else if (methods=="subtract") {
    total = x-y;
    mChar = "-";
  }else if (methods=="multiply") {
    total = x*y;
    mChar = "x";
  }else if (methods=="divide") {
    total = x/y;
    mChar = "/";
  }
res.end(x+' '+mChar+' '+y+' = '+total)
};

app.use('/lab3',Method);
app.listen(3000);
