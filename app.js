var handlebars = require('handlebars');
var fs = require('fs');
var makeObject = require('./makeObject');
var getSalesData = require('./getSalesData');
var getPurchases = require('./getPurchases');
var profitMap = require('./profitMap');
var makeCategories = require('./makeCategories');
var popularProduct = require('./popularProduct');
var leastPopularProduct = require('./leastPopularProduct');
var popularCategory = require('./popularCategory');
var leastPopularCat = require('./leastPopularCat');
var mostProfitableCat = require('./mostProfitableCat');
var mostProfitableProduct = require('./mostProfitableProduct');
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
  'Mixed Sweets 5s': 'Sweets',
  'Heart Chocolates': 'Sweets',
  'Rose (plastic)': 'other',
  'Valentine Cards': 'other'
};

var weekOne = makeObject('./files/week1.csv');
var productCatOne = makeCategories(weekOne, cats);
var weekOneSales = getSalesData('./files/week1.csv');
var purchasesOne = getPurchases('./files/purchases.csv', firstWeek);
var wkOnePurchaseCat = makeCategories(purchasesOne, cats);
var wkOneProfit = profitMap(weekOneSales, purchasesOne);

var popularProduct = popularProduct(weekOne);
// console.log(popularProduct);
var leastPopularProduct = leastPopularProduct(weekOne);
// console.log(leastPopularProduct);
var mostPopularCat = popularCategory(productCatOne);
var leastPopularCat = leastPopularCat(productCatOne);
var profitableProduct = mostProfitableProduct(wkOneProfit);
var profitableCategory = mostProfitableCat(wkOnePurchaseCat);
//console.log(profitableCategory);

var source = fs.readFileSync('./views/layouts/display.handlebars', "utf8");
var template = handlebars.compile(source);
var data = {
  popular: [popularProduct,leastPopularProduct,mostPopularCat,leastPopularCat],
   profit:[profitableProduct,profitableCategory]
};
// console.log(mostPopularCat);
var result = template(data);
fs.writeFileSync('display.html', result);
