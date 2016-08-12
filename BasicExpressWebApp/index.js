  var express = require('express'),
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    categories = require('./routes/categories'),
     products = require('./routes/products'),
     sales = require('./routes/sales'),
      purchases = require('./routes/purchases');
      makeObject = require('../makeObject');
       getSalesData = require('../getSalesData');
      getPurchases = require('../getPurchases');
      profitMap = require('../profitMap');
      makeCategories = require('../makeCategories');
      popularProduct = require('../popularProduct');
      leastPopularProduct = require('../leastPopularProduct');
      popularCategory = require('../popularCategory');
      leastPopularCat = require('../leastPopularCat');
      mostProfitableCat = require('../mostProfitableCat');
      mostProfitableProduct = require('../mostProfitableProduct');

      var firstWeek = ['01-Feb', '02-Feb', '03-Feb', '04-Feb', '05-Feb', '06-Feb', '6-Feb', '07-Feb'];
      var secondWeek = ['08-Feb', '09-Feb', '10-Feb', '11-Feb', '12-Feb', '13-Feb', '14-Feb'];
      var thirdWeek = ['15-Feb', '16-Feb', '17-Feb', '18-Feb', '19-Feb', '20-Feb', '21-Feb'];
      var fourthWeek = ['22-Feb', '23-Feb', '24-Feb', '25-Feb', '26-Feb', '28-Feb', '1-Mar'];

      var weekDate = []

      var cats = {
        'Milk 1l': 'Dairy',
        'Imasi': 'Dairy',
        'Bread': 'Bakery',
        'Chakalaka Can': 'Canned Food',
        'Gold Dish Vegetable Curry Can': 'Canned Food',
        'Fanta 500ml': 'Soft Drinks',
        'Coke 500ml': 'Soft Drinks',
        'Cream Soda 500ml': 'Soft Drinks',
        'Iwisa Pap 5kg': 'Grocerries',
        'Top Class Soy Mince': 'Grocerries',
        'Shampoo 1 litre': 'Toiletries',
        'Soap Bar': 'Toiletries',
        'Bananas - loose': 'Fruit',
        'Apples - loose': 'Fruit',
        'Mixed Sweets 5s': 'candy',
        'Heart Chocolates': 'Candy',
        'Rose (plastic)': 'other',
        'Valentine Cards': 'other'};

      var weeklyStats = function(path,purchases){
        var weekQuantity = makeObject(path);
        var weekSales = getSalesData(path);
        var weekPurchases = getPurchases(purchases, firstWeek);
        var weekQuantityCategories = makeCategories(weekQuantity,cats);
        var weekSalesCat = makeCategories(weekSales,cats);
        var weekPurchaseCat = makeCategories(weekPurchases,cats);
        var weekProfit = profitMap(weekSales,weekPurchases);
        var weekProfitCategories = profitMap(weekSalesCat,weekPurchaseCat);
        var MostpopularProduct = popularProduct(weekQuantity);
        var UnpopularProduct = leastPopularProduct(weekQuantity);
        var mostPopularCat = popularCategory(weekQuantityCategories);
        var unpopularCat = leastPopularCat(weekQuantityCategories);
        var profitableProduct = mostProfitableProduct(weekProfit);
        var profitableCategory = mostProfitableCat(weekProfitCategories);
        var data_for_template = {
          popular: [MostpopularProduct,UnpopularProduct,mostPopularCat,unpopularCat],
           profit:[profitableProduct,profitableCategory]
        };
        return data_for_template;
      }


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
app.get('/sales/:week', function (req, res) {
  var week = req.params.week;
   if(Number(week.replace("week", "")) > 52){
    return res.send("invalid week :" + week)
   }

  var weeklyData = '../files/' + week +".csv"
  var data = weeklyStats(weeklyData,'../files/purchases.csv');
 res.render('weeklyStatistics',{week:week,data:data});
});

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
app.get('/purchases/delete/:purchase_id', purchases.delete);
app.use(errorHandler);

//configure the port number using and environment number
var portNumber = process.env.CRUD_PORT_NR || 3000;

//start everything up
app.listen(portNumber, function () {
    console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
});
