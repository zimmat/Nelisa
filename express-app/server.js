var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var handlebars = require('handlebars');
var fs = require('fs');
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

var weekOneQuantity = makeObject('../files/week1.csv');
var weekOneSales = getSalesData('../files/week1.csv');
var weekOnePurchases = getPurchases('../files/purchases.csv', firstWeek);
var weekOneQuantityCategories = makeCategories(weekOneQuantity,cats);
var weekOneSalesCat = makeCategories(weekOneSales,cats);
var weekOnePurchaseCat = makeCategories(weekOnePurchases,cats);
var weekOneProfit = profitMap(weekOneSales,weekOnePurchases);
var weekOneProfitCategories = profitMap(weekOneSalesCat,weekOnePurchaseCat);

var popularProduct = popularProduct(weekOneQuantity);
var leastPopularProduct = leastPopularProduct(weekOneQuantity);
var mostPopularCat = popularCategory(weekOneQuantityCategories);
var leastPopularCat = leastPopularCat(weekOneQuantityCategories);
var profitableProduct = mostProfitableProduct(weekOneProfit);
var profitableCategory = mostProfitableCat(weekOneProfitCategories);


app.engine('handlebars', exphbs({defaultLayout: 'display'}));
app.set('view engine', 'handlebars');

var data_for_template = {
  popular: [popularProduct,leastPopularProduct,mostPopularCat,leastPopularCat],
   profit:[profitableProduct,profitableCategory]
};

// create a route
app.get('/sales/week1', function (req, res) {
 res.render('home', data_for_template);
});
//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});
