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




app.engine('handlebars', exphbs({defaultLayout: 'display'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.render('home')
});
// create a route
app.get('/sales/:week', function (req, res) {
  var week = req.params.week;
   if(Number(week.replace("week", "")) > 52){
    return res.send("invalid week :" + week)
   }

  var weeklyData = '../files/' + week +".csv"
  var data = weeklyStats(weeklyData,'../files/purchases.csv');
 res.render('weeklyStatistics',{week:week,data:data});
});


var port = process.env.PORT || 5000;

var server = app.listen(port, function(){
  var host =server.address().address;
  var port = server.address().port;
  console.log('Node app is running on port http://%s:%s', host, port);

});

//set the port number to an existing environment variable PORT or default to 5000
// app.set('port', (port);
//start the app like this:
// app.listen(app.get('port'), function() {
// });
