var products = require('../products');
var assert = require('assert');
var weekOne = {
  'Milk 1l': 39,
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
  'Mixed Sweets 5s': 49
};

var weekTwo = {
  'Milk 1l': 28,
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
  'Valentine Cards': 14
};

var weekThree = {
  'Milk 1l': 30,
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
  'Mixed Sweets 5s': 29
};

var weekFour = {
  'Milk 1l': 45,
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
  'Mixed Sweets 5s': 40
};
var salesOne = { 'Milk 1l': 60,
  Imasi: 150,
  Bread: 72,
  'Chakalaka Can': 60,
  'Gold Dish Vegetable Curry Can': 54,
  'Fanta 500ml': 39,
  'Coke 500ml': 39,
  'Cream Soda 500ml': 45,
  'Iwisa Pap 5kg': 180,
  'Top Class Soy Mince': 72,
  'Shampoo 1 litre': 180,
  'Soap Bar': 36,
  'Bananas - loose': 12,
  'Apples - loose': 12,
  'Mixed Sweets 5s': 16 };
  var salesTwo = { 'Milk 1l': 60,
  Imasi: 150,
  Bread: 72,
  'Chakalaka Can': 60,
  'Gold Dish Vegetable Curry Can': 54,
  'Fanta 500ml': 39,
  'Coke 500ml': 39,
  'Cream Soda 500ml': 45,
  'Iwisa Pap 5kg': 180,
  'Top Class Soy Mince': 72,
  'Shampoo 1 litre': 180,
  'Soap Bar': 36,
  'Bananas - loose': 12,
  'Apples - loose': 12,
  'Mixed Sweets 5s': 16,
  'Heart Chocolates': 140,
  'Rose (plastic)': 60,
  'Valentine Cards': 8 };

  var salesThree = { 'Milk 1l': 60,
  Imasi: 150,
  Bread: 72,
  'Chakalaka Can': 60,
  'Gold Dish Vegetable Curry Can': 54,
  'Fanta 500ml': 39,
  'Coke 500ml': 39,
  'Cream Soda 500ml': 45,
  'Iwisa Pap 5kg': 180,
  'Top Class Soy Mince': 72,
  'Shampoo 1 litre': 180,
  'Soap Bar': 36,
  'Bananas - loose': 12,
  'Apples - loose': 12,
  'Mixed Sweets 5s': 16 };
  var salesFour = { 'Milk 1l': 70,
  Imasi: 175,
  Bread: 84,
  'Chakalaka Can': 70,
  'Gold Dish Vegetable Curry Can': 63,
  'Fanta 500ml': 45.5,
  'Coke 500ml': 45.5,
  'Cream Soda 500ml': 52.5,
  'Iwisa Pap 5kg': 210,
  'Top Class Soy Mince': 84,
  'Shampoo 1 litre': 210,
  'Soap Bar': 42,
  'Bananas - loose': 14,
  'Apples - loose': 14,
  'Mixed Sweets 5s': 19 };

describe("Products", function() {
  it('should return a product map for week one', function() {
    var results = products.productMap('./week1.csv');
    assert.deepEqual(results, weekOne);
  });
  it('should return a product map week two', function() {
    var results = products.productMap('./week2.csv');
    assert.deepEqual(results, weekTwo);
  });
  it('should return a product map week three', function() {
    var results = products.productMap('./week3.csv');
    assert.deepEqual(results, weekThree);
  });

  it('should return a map with product map week four', function() {
    var results = products.productMap('./week4.csv');
    assert.deepEqual(results, weekFour);
  });
  it('should return a sales map for week one', function() {
    var results = products.salesMap('./week1.csv');
    assert.deepEqual(results, salesOne);
  });
  it('should return a sales map week two', function() {
    var results = products.salesMap('./week2.csv');
    assert.deepEqual(results, salesTwo);
  });
  it('should return a sales map week three', function() {
    var results = products.salesMap('./week3.csv');
    assert.deepEqual(results, salesThree);
  });
  it('should return a sales map for  week four', function() {
    var results = products.salesMap('./week4.csv');
    assert.deepEqual(results, salesFour);
  });
  it('should return the most popular Product for week one', function() {
    var results = products.popular(weekOne);
    assert.deepEqual(results, ['Coke 500ml']);
  });
  it('should return the most popular Product for week two', function() {
    var results = products.popular(weekTwo);
    assert.deepEqual(results, ['Mixed Sweets 5s']);
  });
  it('should return the most popular Product for week three', function() {
    var results = products.popular(weekThree);
    assert.deepEqual(results, ['Milk 1l']);
  });
  it('should return the most popular Product for week four', function() {
    var results = products.popular(weekFour);
    assert.deepEqual(results["Milk 1l", "Coke 500ml"]);
  });
  it('should return the least popular Product for week week one', function() {
    var results = products.unpopular(weekOne);
    assert.equal(results, 'Shampoo 1 litre');
  });
  it('should return the least popular Product for week week two', function() {
    var results = products.unpopular(weekTwo);
    assert.deepEqual(results, ['Soap Bar']);
  });
  it('should return the least popular Product for week week three', function() {
    var results = products.unpopular(weekThree);
    assert.deepEqual(results, ["Iwisa Pap 5kg", "Shampoo 1 litre"]);
  });
  it('should return the least popular Product for week week four', function() {
    var results = products.unpopular(weekFour);
    assert.deepEqual(results, ['Shampoo 1 litre']);
  });
});
