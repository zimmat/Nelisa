var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
});

var sql = "INSERT INTO categories( category_name) VALUES ?";

//bulk insert
var values = [
 ["Bakery"],
 ["Candy"],
 ["Canned Food"],
 ["Dairy"],
 ["Fruit"],
 ["Groceries"],
 ["Other"],
 ["Soft-Drinks"],
 ["Toiletries"]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
  });

  var productCategoryMap = {
    'Milk 1l': 'Dairy',
    'Imasi': 'Dairy',
    'Bread': 'Bakery',
    'Chakalaka Can': 'Canned Food',
    'Gold Dish Vegetable Curry Can': 'Canned Food',
    'Fanta 500ml': 'Soft-Drinks',
    'Coke 500ml': 'Soft-Drinks',
    'Cream Soda 500ml': 'Soft-Drinks',
    'Iwisa Pap 5kg': 'Groceries',
    'Top Class Soy Mince': 'Groceries',
    'Shampoo 1 litre': 'toiletries',
    'Soap Bar': 'toiletries',
    'Bananas - loose': 'Fruit ',
    'Apples - loose': 'Fruit ',
    'Mixed Sweets 5s': 'Candy',
    'Heart Chocolates': 'Candy',
    'Rose (plastic)': 'Other  ',
    'Valentine Cards': 'Other  '};
