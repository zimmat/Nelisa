var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
});

var sql = "INSERT INTO products(product_id, product_name) VALUES ?";

//create a list of lists
var values = [
  [1,'Bread'],
  [2,'Mixed Sweets 5s'],
  [3,'Heart Chocolates'],
  [4,'Chakalaka Can'],
  [5,'Gold Dish Vegetable Curry Can'],
  [6,'Milk 1l'],
  [7,'Imasi'],
  [8,'Bananas - loose'],
  [9,'Apples - loose'],
  [10,'Top Class Soy Mince'],
  [11,'Iwisa Pap 5kg'],
  [12,'Rose (plastic)'],
  [13,'Valentine Cards'],
  [14,'Fanta 500ml'],
  [15,'Coke 500ml'],
  [16,'Cream Soda 500ml'],
  [17,'Shampoo 1 litre'],
  [18,'Soap Bar']
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
