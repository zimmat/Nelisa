var assert = require('assert');
var makeObject = require('../makeObject');
var popular = require('../popular');
var leastPopular = require('../leastPopular');
var makeCategories = require('../makeCategories');
var getSalesData = require('../getSalesData');
// var salesMap = require('../salesMap');
var getPurchases = require('../getPurchases');
var profitMap = require('../profitMap');

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
// console.log('profit',wkOneprofit);



describe('popular', function() {
      it('should return the most popular Product for week one', function() {
        var results = popular(weekOne);
        assert.deepEqual(results, ['Coke 500ml']);
      });
      it('should return the least popular Product for week one', function() {
          var results = leastPopular(weekOne);
          assert.deepEqual(results, [ 'Shampoo 1 litre' ]);
        });
        it('should return the most popular category for week one', function() {
          var results = popular(productCatOne);
          assert.deepEqual(results, ["Sweets"]);
        });
        it('should return the least popular Product for week one', function() {
            var results = leastPopular(productCatOne);
            assert.deepEqual(results, ["toiletries"]);
          });
          it('should return the most profitable product for week one', function() {
            var results = popular(wkOneprofit);
            assert.deepEqual(results, ["Bananas - loose"]);
          });
          it('should return the most profitable category for week one', function() {
            var results = popular(wkOnePurchaseCat);
            assert.deepEqual(results, ["Sweets"]);
          });
      });
