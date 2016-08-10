  var express = require('express'),
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    categories = require('./routes/categories'),
     products = require('./routes/products'),
     sales = require('./routes/sales'),
      purchases = require('./routes/purchases');
var app = express();

var dbOptions = {
host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
};

//setup template handlebars as the template engine
app.engine('handlebars', exphbs({defaultLayout: 'display'}));
app.set('view engine', 'handlebars');

// app.use(express.static( + '/public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

//setup the handlers
 app.get('/categories', categories.show);
 app.get('/categories/add', categories.showAdd);
 app.get('/categories/edit/:category_id', categories.get);
 app.post('/categories/update/:category_id', categories.update);
 app.post('/categories/add', categories.add);
 app.get('/categories/delete/:category_id', categories.delete);
app.get('/products/delete/:product_id', products.delete);


 app.get('/', products.show);
 app.get('/products', products.show);
 app.get('/products/edit/:product_id', products.get);
 app.post('/products/update/:product_id', products.update);
 app.get('/products/add', products.showAdd);
 app.post('/products/add', products.add);


app.get('/sales', sales.show);
app.get('/sales/add', sales.showAdd);
app.get('/sales/edit/:sales_id', sales.get);
app.post('/sales/update/:sales_id', sales.update);
app.post('/sales/add', sales.add);
 app.get('/sales/delete/:sales_id', sales.delete);


 app.get('/purchases', purchases.show);
  app.get('/purchases/add', purchases.showAdd);
  app.get('/purchases/edit/:purchase_id', purchases.get);
  app.post('/purchases/update/:purchase_id', purchases.update);
 app.post('/purchases/add', purchases.add);
app.get('/purchases/delete/:purchase_id', sales.delete);
app.use(errorHandler);

//configure the port number using and environment number
var portNumber = process.env.CRUD_PORT_NR || 3000;

//start everything up
app.listen(portNumber, function () {
    console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
});
