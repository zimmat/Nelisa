var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/message', function (req, res) {
    res.send('welocome to my app');
});



console.log("listening to "+ port);
app.listen(3000);
