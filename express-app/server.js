var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var handlebars = require('handlebars');
var makeObject = require('../makeObject');
var getSalesData = require('../getSalesData');
var getPurchases = require('../getPurchases');
var profitMap = require('../profitMap');
var makeCategories = require('../makeCategories');
var popularProduct = require('../popularProduct');
var leastPopularProduct = require('../leastPopularProduct');
var popularCategory = require('../popularCategory');
var leastPopularCat = require('../leastPopularCat');
var mostProfitableCat = require('../mostProfitableCat');
var mostProfitableProduct = require('../mostProfitableProduct');
var firstWeek = ['01-Feb', '02-Feb', '03-Feb', '04-Feb', '05-Feb', '06-Feb', '6-Feb', '07-Feb'];
var cats = {
  'Milk 1l': 'Dairy',
  'Imasi': 'Dairy',
  'Bread': 'Backery',
  'Chakalaka Can': 'Canned Food',
  'Gold Dish Vegetable Curry Can': 'Canned Food',
  'Fanta 500ml': 'Soft Drinks',
  'Coke 500ml': 'Soft Drinks',
  'Cream Soda 500ml': 'Soft Drinks',
  'Iwisa Pap 5kg': 'grocerries',
  'Top Class Soy Mince': 'grocerries',
  'Shampoo 1 litre': 'toiletries',
  'Soap Bar': 'toiletries',
  'Bananas - loose': 'fruit',
  'Apples - loose': 'fruit',
  'Mixed Sweets 5s': 'candy',
  'Heart Chocolates': 'Candy',
  'Rose (plastic)': 'other',
  'Valentine Cards': 'other'};

var weeklyStats = function(path,purchases){
  var weekOneQuantity = makeObject(path);
  var weekOneSales = getSalesData(path);
  var weekOnePurchases = getPurchases(purchases, firstWeek);
  var weekOneQuantityCategories = makeCategories(weekOneQuantity,cats);
  var weekOneSalesCat = makeCategories(weekOneSales,cats);
  var weekOnePurchaseCat = makeCategories(weekOnePurchases,cats);
  var weekOneProfit = profitMap(weekOneSales,weekOnePurchases);
  var weekOneProfitCategories = profitMap(weekOneSalesCat,weekOnePurchaseCat);
  var MostpopularProduct = popularProduct(weekOneQuantity);
  var UnpopularProduct = leastPopularProduct(weekOneQuantity);
  var mostPopularCat = popularCategory(weekOneQuantityCategories);
  var unpopularCat = leastPopularCat(weekOneQuantityCategories);
  var profitableProduct = mostProfitableProduct(weekOneProfit);
  var profitableCategory = mostProfitableCat(weekOneProfitCategories);
  var data_for_template = {
    popular: [MostpopularProduct,UnpopularProduct,mostPopularCat,unpopularCat],
     profit:[profitableProduct,profitableCategory]
  };
  return data_for_template;
}

// var week1 = weeklyStats('../files/week1.csv', '../files/purchases.csv',firstWeek);


app.engine('handlebars', exphbs({defaultLayout: 'display'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.render('home')
});
// create a route
app.get('/sales/:week', function (req, res) {
  var week = req.params.week;
  var weeklyData = '../files/' + week +".csv"
  var data = weeklyStats(weeklyData,'../files/purchases.csv');
 res.render('weeklyStatistics', data );
});

//set the port number to an existing environment variable PORT or default to 5000
app.set('port', (process.env.PORT || 5000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
