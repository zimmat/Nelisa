var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
});

var sql = "INSERT INTO products(product_id, product_name,category_id) VALUES ?";

//bulk insert
var values = [
  [1,'Bread',1],
  [2,'Mixed Sweets 5s',2],
  [3,'Heart Chocolates',2],
  [4,'Chakalaka Can,',3],
  [5,'Gold Dish Vegetable Curry Can',3],
  [6,'Milk 1l',4],
  [7,'Imasi',4],
  [8,'Bananas - loose',5],
  [9,'Apples - loose',5],
  [10,'Top Class Soy Mince',6],
  [11,'Iwisa Pap 5kg',6],
  [12,'Rose (plastic)',7],
  [13,'Valentine Cards',7],
  [14,'Fanta 500ml',8],
  [15,'Coke 500ml',8],
  [16,'Cream Soda 500ml',8],
  [17,'Shampoo 1 litre',9],
  [18,'Soap Bar',9]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
