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

var fruit = ['Bananas - loose','Apples - loose'];
var grocerries = ['Gold Dish Vegetable Curry Can','Top Class Soy Mince','Iwisa Pap 5kg','Chakalaka Can','Milk 1l','Bread','Imasi'];
var toletries = ['Shampoo 1 litre','Soap Bar'];
var drinks = ['Fanta 500ml','Coke 500ml','Cream Soda 500ml'];
var sweets = ['Mixed Sweets 5s','Heart Chocolates']
var other = ['Rose (plastic)','Valentine Cards'];

describe("Products", function() {
  it('should return a product Names and quantity sold for map week one', function() {
    var results = nelisa.productNames('./week1.csv');
    assert.deepEqual(results,weekOne);
  });
   it('should return a product Names and quantity sold for map week two', function() {
    var results = nelisa.productNames('./week2.csv');
    assert.deepEqual(results,weekTwo);
  });
 it('should return a product Names and quantity sold for map week three', function() {
    var results = nelisa.productNames('./week3.csv');
    assert.deepEqual(results,weekThree);
  });

  it('should return a map with product Names and quantity sold for map week four', function() {
    var results = nelisa.productNames('./week4.csv');
    assert.deepEqual(results,weekFour);
  });

  it('should return the most popular Product for week one',function(){
    var results = nelisa.popularProduct(weekOne);
    assert.deepEqual(results,['Coke 500ml']);
  });
  it('should return the most popular Product for week two',function(){
var results = nelisa.popularProduct(weekTwo);
assert.deepEqual(results,['Mixed Sweets 5s']);
  });
  it('should return the most popular Product for week three',function(){
var results = nelisa.popularProduct(weekThree);
assert.deepEqual(results,['Milk 1l']);
  });
  it('should return the most popular Product for week four',function(){
var results = nelisa.popularProduct(weekFour);
assert.deepEqual(results["Milk 1l","Coke 500ml"]);
  });
  it('should return the least popular Product for week week one',function(){
    var results = nelisa.unpopularProduct(weekOne);
    assert.equal(results,'Shampoo 1 litre');
  });
  it('should return the least popular Product for week week two',function(){
    var results = nelisa.unpopularProduct(weekTwo);
    assert.deepEqual(results,['Soap Bar']);
  });
  it('should return the least popular Product for week week three',function(){
    var results = nelisa.unpopularProduct(weekThree);
    assert.deepEqual(results,["Iwisa Pap 5kg","Shampoo 1 litre"]);
  });
  it('should return the least popular Product for week week four',function(){
    var results = nelisa.unpopularProduct(weekFour);
    assert.deepEqual(results,['Shampoo 1 litre']);
  });
  it('should return a map for all categories for week one', function(){
    var results = nelisa.categories(weekOne,fruit,grocerries,sweets,drinks,other);
    assert.deepEqual(results,weekOnee ={fruit:{'Bananas - loose': 47,
    'Apples - loose': 36,},grocerries:{'Milk 1l': 39, Imasi: 30,
   Bread: 45,
   'Chakalaka Can': 23,
   'Gold Dish Vegetable Curry Can': 17,'Iwisa Pap 5kg': 17,
   'Top Class Soy Mince': 22},drinks:{'Fanta 500ml': 33,
   'Coke 500ml': 54,
   'Cream Soda 500ml': 22}, other:{'Mixed Sweets 5s': 49}});

 });
});
