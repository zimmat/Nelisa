var assert = require("assert");

describe("Products", function() {

  it('should return a proctuct Names for week one', function() {
    var nelisa = require('../nelisa');
    var results = nelisa.productNames('./week1.csv');
    assert.deepEqual(results,[ 'Milk 1l',
  'Imasi',
  'Bread',
  'Chakalaka Can',
  'Gold Dish Vegetable Curry Can',
  'Fanta 500ml',
  'Coke 500ml',
  'Cream Soda 500ml',
  'Iwisa Pap 5kg',
  'Top Class Soy Mince',
  'Shampoo 1 litre',
  'Soap Bar',
  'Bananas - loose',
  'Apples - loose',
  'Mixed Sweets 5s' ]
);
  });
   it('should return a proctuct Names for week two', function() {
    var nelisa = require('../nelisa');
    var results = nelisa.productNames('./week2.csv');
    assert.deepEqual(results,[ 'Milk 1l',
  'Imasi',
  'Bread',
  'Chakalaka Can',
  'Gold Dish Vegetable Curry Can',
  'Fanta 500ml',
  'Coke 500ml',
  'Cream Soda 500ml',
  'Iwisa Pap 5kg',
  'Top Class Soy Mince',
  'Shampoo 1 litre',
  'Soap Bar',
  'Bananas - loose',
  'Apples - loose',
  'Mixed Sweets 5s',
  'Heart Chocolates',
  'Rose (plastic)',
  'Valentine Cards' ]);
  });
 it('should return a proctuct Names for week three', function() {
    var nelisa = require('../nelisa');
    var results = nelisa.productNames('./week3.csv');
    assert.deepEqual(results,[ 'Milk 1l',
  'Imasi',
  'Bread',
  'Chakalaka Can',
  'Gold Dish Vegetable Curry Can',
  'Fanta 500ml',
  'Coke 500ml',
  'Cream Soda 500ml',
  'Iwisa Pap 5kg',
  'Top Class Soy Mince',
  'Shampoo 1 litre',
  'Soap Bar',
  'Bananas - loose',
  'Apples - loose',
  'Mixed Sweets 5s' ]
);
  });

  it('should return a proctuct Names for week four', function() {
    var nelisa = require('../nelisa');
    var results = nelisa.productNames('./week4.csv');
    assert.deepEqual(results,[ 'Milk 1l',
  'Imasi',
  'Bread',
  'Chakalaka Can',
  'Gold Dish Vegetable Curry Can',
  'Fanta 500ml',
  'Coke 500ml',
  'Cream Soda 500ml',
  'Iwisa Pap 5kg',
  'Top Class Soy Mince',
  'Shampoo 1 litre',
  'Soap Bar',
  'Bananas - loose',
  'Apples - loose',
  'Mixed Sweets 5s' ]
);
  });
});
