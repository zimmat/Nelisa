var nelisa = require('../nelisa');
var assert = require("assert");
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

var categoryOne = {
  Dairy: 30,
  Backery: 45,
  'Canned Food': 17,
  'Soft Drinks': 22,
  grocerries: 22,
  toiletries: 12,
  fruit: 36,
  Sweets: 49
};

var categoryTwo = {
  Dairy: 36,
  Backery: 28,
  'Canned Food': 27,
  'Soft Drinks': 22,
  grocerries: 21,
  toiletries: 5,
  fruit: 21,
  Sweets: 20,
  other: 14
}

var categoryThree = {
  Dairy: 25,
  Backery: 24,
  'Canned Food': 8,
  'Soft Drinks': 12,
  grocerries: 12,
  toiletries: 8,
  fruit: 25,
  Sweets: 29
};

var categoryFour = {
  Dairy: 34,
  Backery: 33,
  'Canned Food': 34,
  'Soft Drinks': 19,
  grocerries: 43,
  toiletries: 25,
  fruit: 32,
  Sweets: 40
};

var firstWeek = ['01-Feb', '02-Feb', '03-Feb', '04-Feb', '05-Feb', '06-Feb', '6-Feb', '07-Feb'];
var secondWeek = ['08-Feb', '09-Feb', '10-Feb', '11-Feb', '12-Feb', '13-Feb', '14-Feb'];
var thirdWeek = ['15-Feb', '16-Feb', '17-Feb', '18-Feb', '19-Feb', '20-Feb', '21-Feb'];
var fourthWeek = ['22-Feb', '23-Feb', '24-Feb', '25-Feb', '26-Feb', '28-Feb', '1-Mar'];

var purchaseOne = {
  'Shampoo 1 litre': 60,
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
  'Top Class Soy Mince': 80
};

var purchaseTwo = {
  'Rose (plastic)': 200,
  'Milk 1l': 232,
  'Bananas - loose': 8,
  'Apples - loose': 30,
  'Mixed Sweets 5s': 600,
  Bread: 135,
  'Chakalaka Can': 105,
  'Coke 500ml': 105,
  'Gold Dish Vegetable Curry Can': 84.5,
  'Heart Chocolates': 500,
  Imasi: 510,
  'Iwisa Pap 5kg': 100,
  'Top Class Soy Mince': 160,
  'Shampoo 1 litre': 120,
  'Valentine Cards': 40,
  'Soap Bar': 15,
  'Fanta 500ml': 54
};

var purchaseThree = {
  'Chakalaka Can': 87,
  'Cream Soda 500ml': 69,
  'Fanta 500ml': 60.5,
  'Gold Dish Vegetable Curry Can': 67,
  'Iwisa Pap 5kg': 230,
  'Milk 1l': 276.5,
  'Apples - loose': 225,
  'Mixed Sweets 5s': 96,
  Bread: 225,
  'Coke 500ml': 84,
  Imasi: 425,
  'Top Class Soy Mince': 120,
  'Shampoo 1 litre': 100,
  'Soap Bar': 24,
  'Bananas - loose': 20
};

var purchaseFour = {
  'Chakalaka Can': 122.5,
  'Bananas - loose': 10,
  'Apples - loose': 135,
  'Mixed Sweets 5s': 24,
  Bread: 146,
  'Coke 500ml': 63,
  'Cream Soda 500ml': 27,
  'Fanta 500ml': 40,
  'Gold Dish Vegetable Curry Can': 75.5,
  Imasi: 255,
  'Milk 1l': 140,
  'Top Class Soy Mince': 175,
  'Soap Bar': 39,
  'Shampoo 1 litre': 80,
  'Iwisa Pap 5kg': 30
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


describe("Categories", function() {
  it('should return a map for all categories for week one', function() {
    var results = nelisa.getCategories(weekOne, cats);
    assert.deepEqual(results,categoryOne);
  });
  it('should return a map for all categories for week two', function() {
    var results = nelisa.getCategories(weekTwo, cats);
    assert.deepEqual(results, categoryTwo);
  });
  it('should return a map for all categories for week three', function() {
    var results = nelisa.getCategories(weekThree, cats);
    assert.deepEqual(results,categoryThree);
  });
  it('should return a map for all categories for week three', function() {
    var results = nelisa.getCategories(weekFour, cats);
    assert.deepEqual(results,categoryFour);
  });
  it('should return most popular category for week one', function() {
    var results = nelisa.popularCategory(categoryOne);
    assert.deepEqual(results, ['Sweets']);
  });
  it('should return most popular category for week two', function() {
    var results = nelisa.popularCategory(categoryTwo);
    assert.deepEqual(results, ['Dairy']);
  });
  it('should return most popular category for week three', function() {
    var results = nelisa.popularCategory(categoryThree);
    assert.deepEqual(results, ["Sweets"]);
  });
  it('should return most popular category for week four', function() {
    var results = nelisa.popularCategory(categoryFour);
    assert.deepEqual(results, ['grocerries']);
  });
  it('should return least popular category for week one', function() {
    var results = nelisa.unpopularCategory(categoryOne);
    assert.deepEqual(results, ['toiletries']);
  });
  it('should return least popular category for week two', function() {
    var results = nelisa.unpopularCategory(categoryTwo);
    assert.deepEqual(results, ['toiletries']);
  });
  it('should return least popular category for week three', function() {
    var results = nelisa.unpopularCategory(categoryThree);
    assert.deepEqual(results, ["Canned Food", "toiletries"]);
  });
  it('should return least popular category for week four', function() {
    var results = nelisa.unpopularCategory(categoryFour);
    assert.deepEqual(results, ['Soft Drinks']);
  });
  it('should return purchases made in week one', function() {
    var results = nelisa.getPurchases('./purchases.csv', firstWeek);
    assert.deepEqual(results, purchaseOne);
  });
  it('should return purchases made in week two', function() {
    var results = nelisa.getPurchases('./purchases.csv', secondWeek);
    assert.deepEqual(results, purchaseTwo);
  });
  it('should return purchases made in week three', function() {
    var results = nelisa.getPurchases('./purchases.csv', thirdWeek);
    assert.deepEqual(results, purchaseThree);
  });
  it('should return purchases made in week four', function() {
    var results = nelisa.getPurchases('./purchases.csv', fourthWeek);
    assert.deepEqual(results, purchaseFour);
  });
  it('should return the most profitable product of week one', function() {
    var results = nelisa.mostProfitable(purchaseOne,salesOne);
    assert.deepEqual(results, ["Mixed Sweets 5s"]);
  });
  it('should return the most profitable product of week two', function() {
    var results = nelisa.mostProfitable(purchaseTwo,salesTwo);
    assert.deepEqual(results, ["Mixed Sweets 5s"]);
  });
  it('should return the most profitable product of week thee', function() {
    var results = nelisa.mostProfitable(purchaseThree,salesThree);
    assert.deepEqual(results, ["Imasi"]);
  });
  it('should return the most profitable product of week four', function() {
    var results = nelisa.mostProfitable(purchaseFour,salesFour);
    assert.deepEqual(results, ["Imasi"]);
  });
  it('should group categories for week one', function() {
    var results = nelisa.getCategories(weekOneSales, cats);
    assert.deepEqual(results, {
      "toiletries": 39,
      "fruit": 300,
      "Sweets": 1170,
      "Backery": 314,
      "Dairy": 70,
      "Canned Food": 75,
      "Soft Drinks": 108,
      "grocerries": 80
    });
  });
    it('should group categories for week two', function() {
      var results = nelisa.getCategories(weekTwoSales, cats);
      assert.deepEqual(results, { other: 40,
  Dairy: 510,
  fruit: 30,
  Sweets: 500,
  Backery: 135,
  'Canned Food': 84.5,
  'Soft Drinks': 54,
  grocerries: 160,
  toiletries: 15 });
  });
  it('should group categories for week three', function() {
    var results = nelisa.getCategories(weekThreeSales, cats);
    assert.deepEqual(results, { 'Canned Food': 67,
  'Soft Drinks': 84,
  grocerries: 120,
  Dairy: 425,
  fruit: 20,
  Sweets: 96,
  Backery: 225,
  toiletries: 24 });
  });
  it('should group categories for week four', function() {
    var results = nelisa.getCategories(weekFourSales, cats);
    assert.deepEqual(results, { 'Canned Food': 75.5,
  fruit: 135,
  Sweets: 24,
  Backery: 146,
  'Soft Drinks': 40,
  Dairy: 140,
  grocerries: 30,
  toiletries: 80 });
  });
  it('should return the most profitable category for week one',function(){
    var results = nelisa.profitable({
      "toiletries": 39,
      "fruit": 300,
      "Sweets": 1170,
      "Backery": 314,
      "Dairy": 70,
      "Canned Food": 75,
      "Soft Drinks": 108,
      "grocerries": 80
    });
    assert.deepEqual(results,['Sweets']);
  })
  it('should return the most profitable category for week two',function(){
    var results = nelisa.profitable({ other: 40,
Dairy: 510,
fruit: 30,
Sweets: 500,
Backery: 135,
'Canned Food': 84.5,
'Soft Drinks': 54,
grocerries: 160,
toiletries: 15 });
    assert.deepEqual(results,['Dairy']);
  })
  it('should return the most profitable category for week three',function(){
    var results = nelisa.profitable({ 'Canned Food': 67,
  'Soft Drinks': 84,
  grocerries: 120,
  Dairy: 425,
  fruit: 20,
  Sweets: 96,
  Backery: 225,
  toiletries: 24 });
    assert.deepEqual(results,['Dairy']);
  })
  it('should return the most profitable category for week four',function(){
    var results = nelisa.profitable({ 'Canned Food': 75.5,
  fruit: 135,
  Sweets: 24,
  Backery: 146,
  'Soft Drinks': 40,
  Dairy: 140,
  grocerries: 30,
  toiletries: 80 });
    assert.deepEqual(results,['Backery']);
  })
 });
