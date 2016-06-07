var nelisa = require('../nelisa');
var assert = require("assert");
 var weekOne = { 'Milk 1l': 39, Imasi: 30,
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

var weekTwo = { 'Milk 1l': 28,
Imasi: 36,
Bread: 28,
'Chakalaka Can': 21,
'Gold Dish Vegetable Curry Can': 27,
'Fanta 500ml': 23,
'Coke 500ml': 42,
'Cream Soda 500ml': 22,
'Iwisa Pap 5kg': 10,
'Top Class Soy Mince': 21,
'Shampoo 1 litre': 6,
'Soap Bar': 5,
'Bananas - loose': 28,
'Apples - loose': 21,
'Mixed Sweets 5s': 54,
'Heart Chocolates': 20,
'Rose (plastic)': 14,
'Valentine Cards': 14 };

var weekThree = { 'Milk 1l': 30,
Imasi: 25,
Bread: 24,
'Chakalaka Can': 17,
'Gold Dish Vegetable Curry Can': 8,
'Fanta 500ml': 14,
'Coke 500ml': 18,
'Cream Soda 500ml': 12,
'Iwisa Pap 5kg': 4,
'Top Class Soy Mince': 12,
'Shampoo 1 litre': 4,
'Soap Bar': 8,
'Bananas - loose': 17,
'Apples - loose': 25,
'Mixed Sweets 5s': 29 };

var weekFour = { 'Milk 1l': 45,
Imasi: 34,
Bread: 33,
'Chakalaka Can': 33,
'Gold Dish Vegetable Curry Can': 34,
'Fanta 500ml': 24,
'Coke 500ml': 45,
'Cream Soda 500ml': 19,
'Iwisa Pap 5kg': 16,
'Top Class Soy Mince': 43,
'Shampoo 1 litre': 13,
'Soap Bar': 25,
'Bananas - loose': 22,
'Apples - loose': 32,
'Mixed Sweets 5s': 40 };

var cats = {'Milk 1l':'Dairy',
'Imasi':'Dairy',
'Bread': 'Backery',
'Chakalaka Can': 'Canned Food',
'Gold Dish Vegetable Curry Can':'Canned Food',
'Fanta 500ml':'Soft Drinks',
'Coke 500ml':'Soft Drinks',
'Cream Soda 500ml':'Soft Drinks',
'Iwisa Pap 5kg':'grocerries',
'Top Class Soy Mince': 'grocerries',
'Shampoo 1 litre': 'toiletries',
'Soap Bar':'toiletries',
'Bananas - loose':'fruit',
'Apples - loose':'fruit',
'Mixed Sweets 5s':'Sweets',
'Heart Chocolates':'Sweets',
'Rose (plastic)':'other',
'Valentine Cards':'other'};

var categoryOne = { Dairy: 30,
Backery: 45,
'Canned Food': 17,
'Soft Drinks': 22,
grocerries: 22,
toiletries: 12,
fruit: 36,
Sweets: 49 };

var categoryTwo = { Dairy: 36,
Backery: 28,
'Canned Food': 27,
'Soft Drinks': 22,
grocerries: 21,
toiletries: 5,
fruit: 21,
Sweets: 20,
other: 14 }

var categoryThree = { Dairy: 25,
Backery: 24,
'Canned Food': 8,
'Soft Drinks': 12,
grocerries: 12,
toiletries: 8,
fruit: 25,
Sweets: 29 };

var categoryFour = {Dairy: 34,
Backery: 33,
'Canned Food': 34,
'Soft Drinks': 19,
grocerries: 43,
toiletries: 25,
fruit: 32,
Sweets: 40 };

describe("Products", function() {
  it('should return a product Names and quantity sold map for week one', function() {
    var results = nelisa.productMap('./week1.csv');
    assert.deepEqual(results,weekOne);
  });
   it('should return a product Names and quantity sold for map week two', function() {
    var results = nelisa.productMap('./week2.csv');
    assert.deepEqual(results,weekTwo);
  });
 it('should return a product Names and quantity sold for map week three', function() {
    var results = nelisa.productMap('./week3.csv');
    assert.deepEqual(results,weekThree);
  });

  it('should return a map with product Names and quantity sold for map week four', function() {
    var results = nelisa.productMap('./week4.csv');
    assert.deepEqual(results,weekFour);
  });
  it('should return the most popular Product for week one',function(){
    var results = nelisa.popular(weekOne);
    assert.deepEqual(results,['Coke 500ml']);
  });
  it('should return the most popular Product for week two',function(){
var results = nelisa.popular(weekTwo);
assert.deepEqual(results,['Mixed Sweets 5s']);
  });
  it('should return the most popular Product for week three',function(){
var results = nelisa.popular(weekThree);
assert.deepEqual(results,['Milk 1l']);
  });
  it('should return the most popular Product for week four',function(){
var results = nelisa.popular(weekFour);
assert.deepEqual(results["Milk 1l","Coke 500ml"]);
  });
  it('should return the least popular Product for week week one',function(){
    var results = nelisa.unpopular(weekOne);
    assert.equal(results,'Shampoo 1 litre');
  });
  it('should return the least popular Product for week week two',function(){
    var results = nelisa.unpopular(weekTwo);
    assert.deepEqual(results,['Soap Bar']);
  });
  it('should return the least popular Product for week week three',function(){
    var results = nelisa.unpopular(weekThree);
    assert.deepEqual(results,["Iwisa Pap 5kg","Shampoo 1 litre"]);
  });
  it('should return the least popular Product for week week four',function(){
    var results = nelisa.unpopular(weekFour);
    assert.deepEqual(results,['Shampoo 1 litre']);
  });
  it('should return a map for all categories for week one', function(){
    var results = nelisa.getCategories(weekOne,cats);
    assert.deepEqual(results,{ Dairy: 30,
  Backery: 45,
  'Canned Food': 17,
  'Soft Drinks': 22,
  grocerries: 22,
  toiletries: 12,
  fruit: 36,
  Sweets: 49 }
);

 });
 it('should return a map for all categories for week two', function(){
   var results = nelisa.getCategories(weekTwo,cats);
   assert.deepEqual(results,{ Dairy: 36,
  Backery: 28,
  'Canned Food': 27,
  'Soft Drinks': 22,
  grocerries: 21,
  toiletries: 5,
  fruit: 21,
  Sweets: 20,
  other: 14 });

});
it('should return a map for all categories for week three', function(){
  var results = nelisa.getCategories(weekThree,cats);
  assert.deepEqual(results,{ Dairy: 25,
  Backery: 24,
  'Canned Food': 8,
  'Soft Drinks': 12,
  grocerries: 12,
  toiletries: 8,
  fruit: 25,
  Sweets: 29 });
});
it('should return a map for all categories for week three', function(){
  var results = nelisa.getCategories(weekFour,cats);
  assert.deepEqual(results,{ Dairy: 34,
  Backery: 33,
  'Canned Food': 34,
  'Soft Drinks': 19,
  grocerries: 43,
  toiletries: 25,
  fruit: 32,
  Sweets: 40 });
});
it('should return most popular category for week one',function(){
  var results = nelisa.popular(categoryOne);
  assert.deepEqual(results,[ 'Sweets' ]);
});
it('should return most popular category for week two',function(){
  var results = nelisa.popular(categoryTwo);
  assert.deepEqual(results,[ 'Dairy' ]);
});
it('should return most popular category for week three',function(){
  var results = nelisa.popular(categoryThree);
  assert.deepEqual(results,["Sweets"]);
});
it('should return most popular category for week four',function(){
  var results = nelisa.popular(categoryFour);
  assert.deepEqual(results,['grocerries']);
});
it('should return least popular category for week one',function(){
  var results = nelisa.unpopular(categoryOne);
  assert.deepEqual(results,[ 'toiletries' ]);
});
it('should return least popular category for week two',function(){
  var results = nelisa.unpopular(categoryTwo);
  assert.deepEqual(results,[ 'toiletries' ]);
});
it('should return least popular category for week three',function(){
  var results = nelisa.unpopular(categoryThree);
  assert.deepEqual(results,["Canned Food","toiletries"]);
});
it('should return least popular category for week four',function(){
  var results = nelisa.unpopular(categoryFour);
  assert.deepEqual(results,[ 'Soft Drinks' ]);
});
});
