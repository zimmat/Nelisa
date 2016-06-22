var handlebars = require('handlebars');
var fs = require('fs');
var makeObject = require('./makeObject');
var getSalesData = require('./getSalesData');
var getPurchases = require('./getPurchases');
var profitMap = require('./profitMap');
var makeCategories = require('./makeCategories');
var leastPopular = require('./leastPopular');
var popular = require('./popular');
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
  'Valentine Cards': 'other'};

var weekOne = makeObject('./files/week1.csv');
var productCatOne = makeCategories(weekOne,cats);
var weekOneSales = getSalesData('./files/week1.csv');
var purchasesOne = getPurchases('./files/purchases.csv',firstWeek);
var wkOnePurchaseCat = makeCategories(purchasesOne,cats);
var wkOneProfit = profitMap(weekOneSales,purchasesOne);

var source = fs.readFileSync('./views/layouts/display.handlebars', "utf8");
var template = handlebars.compile(source);
var context = popular(wkOneProfit);
var result = template(context);
fs.writeFileSync('display.html', result);
