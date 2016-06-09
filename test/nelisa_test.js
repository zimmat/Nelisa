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

var firstWeek = ['01-Feb','02-Feb','03-Feb','04-Feb','05-Feb','06-Feb','6-Feb','07-Feb'];
var secondWeek = ['08-Feb','09-Feb','10-Feb','11-Feb','12-Feb','13-Feb','14-Feb'];
var thirdWeek = ['15-Feb','16-Feb','17-Feb','18-Feb','19-Feb','20-Feb','21-Feb'];
var fourthWeek = ['22-Feb','23-Feb','24-Feb','25-Feb','26-Feb','28-Feb','1-Mar'];
describe("Products", function() {
  it('should return a product map for week one', function() {
    var results = nelisa.productMap('./week1.csv');
    assert.deepEqual(results,weekOne);
  });
   it('should return a product map week two', function() {
    var results = nelisa.productMap('./week2.csv');
    assert.deepEqual(results,weekTwo);
  });
 it('should return a product map week three', function() {
    var results = nelisa.productMap('./week3.csv');
    assert.deepEqual(results,weekThree);
  });

  it('should return a map with product map week four', function() {
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
it('should return purchases made in week one',function(){
  var results = nelisa.getPurchases('./purchases.csv',firstWeek);
  assert.deepEqual(results,[ [ 'HomeMade', '02-Feb', 'Shampoo 1 litre', '1', 'R20,00', 'R20,00' ],
  [ 'HomeMade', '02-Feb', 'Soap Bar', '3', 'R3,00', 'R9,00' ],
  [ 'Epping Market',
    '03-Feb',
    'Bananas - loose',
    '12',
    'R1,00',
    'R12,00' ],
  [ 'Epping Market',
    '03-Feb',
    'Apples - loose',
    '100',
    'R1,50',
    'R150,00' ],
  [ 'Epping Market',
    '03-Feb',
    'Mixed Sweets 5s','240','R3,00','R720,00' ],
  [ 'HomeMade', '04-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00' ],
  [ 'HomeMade', '04-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00' ],
  [ 'Joe Spaza Shop', '04-Feb', 'Bread', '4', 'R11,00', 'R44,00' ],
  [ 'Joe Spaza Shop', '04-Feb', 'Imasi', '4', 'R24,00', 'R96,00' ],
  [ 'Epping Market','06-Feb','Bananas - loose','8','R1,00','R8,00' ],
  [ 'Epping Market','06-Feb','Apples - loose','100','R1,50','R150,00' ],
  [ 'Epping Market','06-Feb','Mixed Sweets 5s','150','R3,00','R450,00' ],
  [ 'HomeMade', '06-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00' ],
  [ 'Makro', '6-Feb', 'Bread', '30', 'R9,00', 'R270,00' ],
  [ 'Makro', '6-Feb', 'Chakalaka Can', '15', 'R7,00', 'R105,00' ],
  [ 'Makro', '6-Feb', 'Coke 500ml', '36', 'R3,50', 'R126,00' ],
  [ 'Makro', '6-Feb', 'Cream Soda 500ml', '18', 'R4,50', 'R81,00' ],
  [ 'Makro', '6-Feb', 'Fanta 500ml', '24', 'R4,50', 'R108,00' ],
  [ 'Makro','6-Feb','Gold Dish Vegetable Curry Can','15','R5,00','R75,00' ],
  [ 'Makro', '6-Feb', 'Imasi', '25', 'R17,00', 'R425,00' ],
  [ 'Makro', '6-Feb', 'Iwisa Pap 5kg', '5', 'R20,00', 'R100,00' ],
  [ 'Makro', '6-Feb', 'Milk 1l', '10', 'R7,00', 'R70,00' ],
  [ 'Makro', '6-Feb', 'Top Class Soy Mince', '10', 'R8,00', 'R80,00' ] ]);
});
it('should return purchases made in week two',function(){
  var results = nelisa.getPurchases('./purchases.csv',secondWeek);
  assert.deepEqual(results,[ [ 'ChinaTown',
    '09-Feb',
    'Rose (plastic)',
    '20',
    'R10,00',
    'R200,00' ],
  [ 'Joe Spaza Shop', '09-Feb', 'Milk 1l', '3', 'R9,50', 'R28,50' ],
  [ 'Epping Market',
    '10-Feb',
    'Bananas - loose',
    '4',
    'R1,00',
    'R4,00' ],
  [ 'Epping Market',
    '10-Feb',
    'Apples - loose',
    '20',
    'R1,50',
    'R30,00' ],
  [ 'Epping Market',
    '10-Feb',
    'Mixed Sweets 5s',
    '150',
    'R3,00',
    'R450,00' ],
  [ 'Makro', '10-Feb', 'Bread', '10', 'R9,00', 'R90,00' ],
  [ 'Makro', '10-Feb', 'Chakalaka Can', '15', 'R7,00', 'R105,00' ],
  [ 'Makro', '10-Feb', 'Coke 500ml', '18', 'R3,50', 'R63,00' ],
  [ 'Makro',
    '10-Feb',
    'Gold Dish Vegetable Curry Can',
    '5',
    'R5,00',
    'R25,00' ],
  [ 'Makro', '10-Feb', 'Heart Chocolates', '20', 'R25,00', 'R500,00' ],
  [ 'Makro', '10-Feb', 'Imasi', '10', 'R17,00', 'R170,00' ],
  [ 'Makro', '10-Feb', 'Iwisa Pap 5kg', '5', 'R20,00', 'R100,00' ],
  [ 'Makro', '10-Feb', 'Milk 1l', '10', 'R7,00', 'R70,00' ],
  [ 'Makro',
    '10-Feb',
    'Top Class Soy Mince',
    '15',
    'R8,00',
    'R120,00' ],
  [ 'HomeMade', '11-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00' ],
  [ 'HomeMade', '11-Feb', 'Valentine Cards', '20', 'R2,00', 'R40,00' ],
  [ 'Joe Spaza Shop', '12-Feb', 'Milk 1l', '3', 'R9,50', 'R28,50' ],
  [ 'Epping Market',
    '13-Feb',
    'Bananas - loose',
    '4',
    'R1,00',
    'R4,00' ],
  [ 'Epping Market',
    '13-Feb',
    'Mixed Sweets 5s',
    '50',
    'R3,00',
    'R150,00' ],
  [ 'HomeMade', '13-Feb', 'Shampoo 1 litre', '3', 'R20,00', 'R60,00' ],
  [ 'HomeMade', '13-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00' ],
  [ 'Joe Spaza Shop',
    '13-Feb',
    'Gold Dish Vegetable Curry Can',
    '5',
    'R8,50',
    'R42,50' ],
  [ 'Makro', '13-Feb', 'Bread', '5', 'R9,00', 'R45,00' ],
  [ 'Makro', '13-Feb', 'Coke 500ml', '12', 'R3,50', 'R42,00' ],
  [ 'Makro', '13-Feb', 'Fanta 500ml', '12', 'R4,50', 'R54,00' ],
  [ 'Makro', '13-Feb', 'Imasi', '20', 'R17,00', 'R340,00' ],
  [ 'Makro', '13-Feb', 'Milk 1l', '15', 'R7,00', 'R105,00' ],
  [ 'Makro', '13-Feb', 'Top Class Soy Mince', '5', 'R8,00', 'R40,00' ],
  [ 'HomeMade', '14-Feb', 'Shampoo 1 litre', '1', 'R20,00', 'R20,00' ],
  [ 'Joe Spaza Shop',
    '14-Feb',
    'Gold Dish Vegetable Curry Can',
    '2',
    'R8,50',
    'R17,00' ] ]);
});
it('should return purchases made in week three',function(){
  var results = nelisa.getPurchases('./purchases.csv',thirdWeek);
  assert.deepEqual(results,[ [ 'Joe Spaza Shop',
    '16-Feb',
    'Chakalaka Can',
    '2',
    'R8,50',
    'R17,00' ],
  [ 'Joe Spaza Shop',
    '16-Feb',
    'Cream Soda 500ml',
    '2',
    'R7,50',
    'R15,00' ],
  [ 'Joe Spaza Shop', '16-Feb', 'Fanta 500ml', '1', 'R6,50', 'R6,50' ],
  [ 'Joe Spaza Shop',
    '16-Feb',
    'Gold Dish Vegetable Curry Can',
    '2',
    'R8,50',
    'R17,00' ],
  [ 'Joe Spaza Shop',
    '16-Feb',
    'Iwisa Pap 5kg',
    '1',
    'R30,00',
    'R30,00' ],
  [ 'Joe Spaza Shop', '16-Feb', 'Milk 1l', '6', 'R9,50', 'R57,00' ],
  [ 'Epping Market',
    '17-Feb',
    'Apples - loose',
    '60',
    'R1,50',
    'R90,00' ],
  [ 'Epping Market',
    '17-Feb',
    'Mixed Sweets 5s',
    '12',
    'R3,00',
    'R36,00' ],
  [ 'Makro', '17-Feb', 'Bread', '15', 'R9,00', 'R135,00' ],
  [ 'Makro', '17-Feb', 'Chakalaka Can', '10', 'R7,00', 'R70,00' ],
  [ 'Makro', '17-Feb', 'Coke 500ml', '24', 'R3,50', 'R84,00' ],
  [ 'Makro', '17-Feb', 'Cream Soda 500ml', '12', 'R4,50', 'R54,00' ],
  [ 'Makro', '17-Feb', 'Fanta 500ml', '12', 'R4,50', 'R54,00' ],
  [ 'Makro',
    '17-Feb',
    'Gold Dish Vegetable Curry Can',
    '10',
    'R5,00',
    'R50,00' ],
  [ 'Makro', '17-Feb', 'Imasi', '15', 'R17,00', 'R255,00' ],
  [ 'Makro', '17-Feb', 'Iwisa Pap 5kg', '5', 'R20,00', 'R100,00' ],
  [ 'Makro', '17-Feb', 'Milk 1l', '15', 'R7,00', 'R105,00' ],
  [ 'Makro', '17-Feb', 'Top Class Soy Mince', '5', 'R8,00', 'R40,00' ],
  [ 'HomeMade', '18-Feb', 'Shampoo 1 litre', '1', 'R20,00', 'R20,00' ],
  [ 'HomeMade', '18-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00' ],
  [ 'HomeMade', '19-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00' ],
  [ 'Joe Spaza Shop', '19-Feb', 'Milk 1l', '1', 'R9,50', 'R9,50' ],
  [ 'Epping Market',
    '20-Feb',
    'Bananas - loose',
    '20',
    'R1,00',
    'R20,00' ],
  [ 'Epping Market',
    '20-Feb',
    'Apples - loose',
    '90',
    'R1,50',
    'R135,00' ],
  [ 'Epping Market',
    '20-Feb',
    'Mixed Sweets 5s',
    '20',
    'R3,00',
    'R60,00' ],
  [ 'HomeMade', '20-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00' ],
  [ 'HomeMade', '20-Feb', 'Soap Bar', '3', 'R3,00', 'R9,00' ],
  [ 'Makro', '20-Feb', 'Bread', '10', 'R9,00', 'R90,00' ],
  [ 'Makro', '20-Feb', 'Imasi', '10', 'R17,00', 'R170,00' ],
  [ 'Makro', '20-Feb', 'Iwisa Pap 5kg', '5', 'R20,00', 'R100,00' ],
  [ 'Makro', '20-Feb', 'Milk 1l', '15', 'R7,00', 'R105,00' ],
  [ 'Makro',
    '20-Feb',
    'Top Class Soy Mince',
    '10',
    'R8,00',
    'R80,00' ] ]);
});
it('should return purchases made in week four',function(){
  var results = nelisa.getPurchases('./purchases.csv',fourthWeek);
  assert.deepEqual(results,[ [ 'Joe Spaza Shop',
    '23-Feb',
    'Chakalaka Can',
    '3',
    'R9,00',
    'R27,00' ],
  [ 'Epping Market',
    '24-Feb',
    'Bananas - loose',
    '10',
    'R1,00',
    'R10,00' ],
  [ 'Epping Market',
    '24-Feb',
    'Apples - loose',
    '90',
    'R1,50',
    'R135,00' ],
  [ 'Epping Market',
    '24-Feb',
    'Mixed Sweets 5s',
    '8',
    'R3,00',
    'R24,00' ],
  [ 'Makro', '24-Feb', 'Bread', '15', 'R9,00', 'R135,00' ],
  [ 'Makro', '24-Feb', 'Chakalaka Can', '10', 'R7,00', 'R70,00' ],
  [ 'Makro', '24-Feb', 'Coke 500ml', '18', 'R3,50', 'R63,00' ],
  [ 'Makro', '24-Feb', 'Cream Soda 500ml', '6', 'R4,50', 'R27,00' ],
  [ 'Makro', '24-Feb', 'Fanta 500ml', '6', 'R4,50', 'R27,00' ],
  [ 'Makro',
    '24-Feb',
    'Gold Dish Vegetable Curry Can',
    '10',
    'R5,00',
    'R50,00' ],
  [ 'Makro', '24-Feb', 'Imasi', '15', 'R17,00', 'R255,00' ],
  [ 'Makro', '24-Feb', 'Milk 1l', '20', 'R7,00', 'R140,00' ],
  [ 'Makro',
    '24-Feb',
    'Top Class Soy Mince',
    '15',
    'R8,00',
    'R120,00' ],
  [ 'HomeMade', '25-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00' ],
  [ 'HomeMade', '26-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00' ],
  [ 'HomeMade', '26-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00' ],
  [ 'Joe Spaza Shop', '26-Feb', 'Bread', '1', 'R11,00', 'R11,00' ],
  [ 'Joe Spaza Shop',
    '26-Feb',
    'Fanta 500ml',
    '2',
    'R6,50',
    'R13,00' ],
  [ 'Joe Spaza Shop',
    '26-Feb',
    'Gold Dish Vegetable Curry Can',
    '1',
    'R8,50',
    'R8,50' ],
  [ 'Joe Spaza Shop',
    '26-Feb',
    'Iwisa Pap 5kg',
    '1',
    'R30,00',
    'R30,00' ],
  [ 'HomeMade', '28-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00' ],
  [ 'HomeMade', '28-Feb', 'Soap Bar', '3', 'R3,00', 'R9,00' ],
  [ 'Joe Spaza Shop',
    '28-Feb',
    'Chakalaka Can',
    '3',
    'R8,50',
    'R25,50' ],
  [ 'Joe Spaza Shop',
    '28-Feb',
    'Gold Dish Vegetable Curry Can',
    '2',
    'R8,50',
    'R17,00' ],
  [ 'Joe Spaza Shop',
    '28-Feb',
    'Top Class Soy Mince',
    '5',
    'R11,00',
    'R55,00' ] ]);
});
});
