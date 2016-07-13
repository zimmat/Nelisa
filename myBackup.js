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
app.get('/sales/:week_name', function (req, res) {
  var week_name = req.params.week_name;
  if(Number(week_name.replace("week", "")) > 52){
    return res.send("invalid week :" + week_name)
  }

  var weeklyData = './files/' + week_name +".csv"
  var data = weeklyStats(weeklyData,'./files/purchases.csv');
 res.render('weeklyStatistics',{week_name:week_name,weeklyData} );
});
