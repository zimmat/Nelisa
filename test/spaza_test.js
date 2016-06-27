var assert = require('assert');
var makeObject = require('../makeObject');
var popularProduct = require('../popularProduct');
var leastPopularProduct = require('../leastPopularProduct');
var makeCategories = require('../makeCategories');
var popularCategory = require('../popularCategory');
var leastPopularCat = require('../leastPopularCat');
var getSalesData = require('../getSalesData');
// var salesMap = require('../salesMap');
var getPurchases = require('../getPurchases');
var profitMap = require('../profitMap');
var mostProfitableCat = require('../mostProfitableCat');
var mostProfitableProduct = require('../mostProfitableProduct');

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
var firstWeek = ['01-Feb', '02-Feb', '03-Feb', '04-Feb', '05-Feb', '06-Feb', '6-Feb', '07-Feb'];
var secondWeek = ['08-Feb', '09-Feb', '10-Feb', '11-Feb', '12-Feb', '13-Feb', '14-Feb'];
var thirdWeek = ['15-Feb', '16-Feb', '17-Feb', '18-Feb', '19-Feb', '20-Feb', '21-Feb'];
var fourthWeek = ['22-Feb', '23-Feb', '24-Feb', '25-Feb', '26-Feb', '28-Feb', '1-Mar'];

var weekOne = makeObject('./files/week1.csv');
var productCatOne = makeCategories(weekOne,cats);
var weekOneSales = getSalesData('./files/week1.csv');
// console.log(weekOneSales);
// var salesOne = salesMap(weekOne,weekOneSales);
var purchasesOne = getPurchases('./files/purchases.csv',firstWeek);
var wkOnePurchaseCat = makeCategories(purchasesOne,cats);
var wkOneprofit = profitMap(weekOneSales,purchasesOne);
var wkOneProdprofit = mostProfitableProduct(wkOneprofit);
var wkOneMaxCatProfit = mostProfitableCat(wkOnePurchaseCat);



describe('popular', function() {
      it('should return the most popular Product for week one', function() {
        var results = popularProduct(weekOne);
        assert.deepEqual(results, { product: 'Coke 500ml', quantity: 54 });
      });
      it('should return the least popular Product for week one', function() {
          var results = leastPopularProduct(weekOne);
          assert.deepEqual(results, { product: 'Shampoo 1 litre', quantity: 3 }
);
        });
        it('should return the most popular category for week one', function() {
          var results = popularCategory(productCatOne);
          assert.deepEqual(results, { category: 'Sweets', quantity: 98 });
        });
        it('should return the least popular Product for week one', function() {
            var results = leastPopularCat(productCatOne);
            assert.deepEqual(results, { category: 'toiletries', quantity: 24 });
          });
          it('should return the most profitable product for week one', function() {
            var results = mostProfitableProduct(wkOneprofit);
            assert.deepEqual(results, {"product":"Bananas - loose","profit":"R88.00"});
          });
          it('should return the most profitable category for week one', function() {
            var results = mostProfitableCat(wkOnePurchaseCat);
            assert.deepEqual(results,  {"category":"Sweets","profit":"R3780.00"});
          });
      });
