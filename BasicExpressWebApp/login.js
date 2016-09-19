var express = require('express');
var   exphbs  = require('express-handlebars');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'display'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));


app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sess;

app.get('/signin',function(req,res){
sess = req.session;
//Session set when user Request our app via URL
if(sess.email) {
/*
* This line check Session existence.
* If it existed will do some action.
*/
    res.redirect('/products');
}
else {
    res.render('/signin');
}
});

app.post('/signin',function(req,res){
  sess = req.session;
//In this we are assigning email to sess.email variable.
//email comes from HTML page.
  sess.email=req.body.email;
  res.end('done');
});

app.get('/products',function(req,res){
  sess = req.session;
if(sess.email) {
res.write('<h1>Hello '+sess.email+'</h1>');
res.end('<a href="+">Logout</a>');
} else {
    res.write(' <h1>Please login first.</h1>');
    res.end('<a href="+">Login</a>');
}
});

app.get('/logout',function(req,res){
req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/signin');
  }
});

});
app.listen(4000,function(){
console.log("App Started on PORT 4000");
});
