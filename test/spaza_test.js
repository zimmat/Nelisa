var assert = require('assert');
var makeObject = require('../makeObject');
var popularProduct = require('../popularProduct');
var leastPopularProduct = require('../leastPopularProduct');
var makeCategories = require('../makeCategories');
var popularCategory = require('../popularCategory');
var leastPopularCat = require('../leastPopularCat');
var getSalesData = require('../getSalesData');
var getPurchases = require('../getPurchases');
var profitMap = require('../profitMap');
var mostProfitableCat = require('../mostProfitableCat');
var mostProfitableProduct = require('../mostProfitableProduct');



var weekOneQuantity = { 'Milk 1l': 39,
  Imasi: 30,
  Bread: 45,
  'Chakalaka Can': 23,
  'Gold Dish Vegetable Curry Can': 17,
  'Fanta 500ml': 33,
  'Coke 500ml': 54,
  'Cream Soda 500ml': 22,
  'Iwisa Pap 5kg': 17,
  'Top Class Soy Mince': 22,
  'Shampoo 1 litre': 3,
  'Soap Bar': 12,
  'Bananas - loose': 47,
  'Apples - loose': 36,
  'Mixed Sweets 5s': 49 };

  var weekOneSales = { 'Milk 1l': 390,
  Imasi: 750,
  Bread: 540,
  'Chakalaka Can': 230,
  'Gold Dish Vegetable Curry Can': 153,
  'Fanta 500ml': 214.5,
  'Coke 500ml': 351,
  'Cream Soda 500ml': 165,
  'Iwisa Pap 5kg': 510,
  'Top Class Soy Mince': 264,
  'Shampoo 1 litre': 90,
  'Soap Bar': 72,
  'Bananas - loose': 94,
  'Apples - loose': 72,
  'Mixed Sweets 5s': 120 };


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

  var weekOnePurchases = { 'Shampoo 1 litre': 60,
    'Soap Bar': 39,
    'Bananas - loose': 20,
    'Apples - loose': 300,
    'Mixed Sweets 5s': 1170,
    Bread: 314,
    Imasi: 521,
    'Chakalaka Can': 105,
    'Coke 500ml': 126,
    'Cream Soda 500ml': 81,
    'Fanta 500ml': 108,
    'Gold Dish Vegetable Curry Can': 75,
    'Iwisa Pap 5kg': 100,
    'Milk 1l': 70,
    'Top Class Soy Mince': 80 };


  // var weekOneQuantityCategories =
var firstWeek = ['01-Feb', '02-Feb', '03-Feb', '04-Feb', '05-Feb', '06-Feb', '6-Feb', '07-Feb'];
var secondWeek = ['08-Feb', '09-Feb', '10-Feb', '11-Feb', '12-Feb', '13-Feb', '14-Feb'];
var thirdWeek = ['15-Feb', '16-Feb', '17-Feb', '18-Feb', '19-Feb', '20-Feb', '21-Feb'];
var fourthWeek = ['22-Feb', '23-Feb', '24-Feb', '25-Feb', '26-Feb', '28-Feb', '1-Mar'];

var weekOneProfit = { 'Milk 1l': 320,
  Imasi: 229,
  Bread: 226,
  'Chakalaka Can': 125,
  'Gold Dish Vegetable Curry Can': 78,
  'Fanta 500ml': 106.5,
  'Coke 500ml': 225,
  'Cream Soda 500ml': 84,
  'Iwisa Pap 5kg': 410,
  'Top Class Soy Mince': 184,
  'Shampoo 1 litre': 30,
  'Soap Bar': 33,
  'Bananas - loose': 74,
  'Apples - loose': -228,
  'Mixed Sweets 5s': -1050 };

var weekOneProfitCategories = { Dairy: 549,
  Backery: 226,
  'Canned Food': 203,
  'Soft Drinks': 415.5,
  grocerries: 594,
  toiletries: 63,
  fruit: -154,
  candy: -1050 };




describe('popular', function() {
      it('should return the most popular Product', function() {
        assert.deepEqual(popularProduct(weekOneQuantity), {"description":"most popular product ","name":"Coke 500ml","quantity":54});
      });
      it('should return the least popular Product', function() {
          assert.deepEqual(leastPopularProduct(weekOneQuantity), {"description":"least popular product ","name":"Shampoo 1 litre","quantity":3}
);
        });
        it('should return the mostpopular category ', function() {
          assert.deepEqual(popularCategory(weekOneQuantityCategories), {"description":"most popular category ","name":"Soft Drinks","quantity":109});
        });
        it('should return the least popular category', function() {
            assert.deepEqual(leastPopularCat(weekOneQuantityCategories), {"description":"least popular category ","name":"toiletries","quantity":15}
);
          });
          it('should return the most profitable product for week one', function() {
            assert.deepEqual(mostProfitableProduct(weekOneProfit), {"description":"most profitable product","name":"Iwisa Pap 5kg","profit":"R410.00"});
          });
          it('should return the most profitable category for week one', function() {
            assert.deepEqual(mostProfitableCat(weekOneProfitCategories),  {"category":grocerries,"profit":"R594.00"});
          });
      });
