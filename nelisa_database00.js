var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
});

var sql = "INSERT INTO products(id, description,categoryid) VALUES ?";

//create a list of lists
var values = [
  [1,'Milk 1l',"Dairy"],
  [2,'Imasi',"Dairy"],
  [3,'Bread',"Bakery"],
  [4,'Chakalaka Can',"Canned Food"]
  [5,'Gold Dish Vegetable Curry Can',"Canned Food"],
  [6,'Fanta 500ml',"Soft-Drinks"],
  [7,'Coke 500ml',"Soft-Drinks"],
  [8,'Cream Soda 500ml',"Soft-Drinks"],
  [9,'Iwisa Pap 5kg',"Groceries"],
  [10,'Top Class Soy Mince',"Canned Food"],
  [11,'Shampoo 1 litre',"Toiletries"],
  [12,'Soap Bar',"Toiletries"],
  [13,'Bananas - loose',"Fruit"],
  [14,'Apples - loose',"Fruit"],
  [15,'Mixed Sweets 5s',"Candy"],
  [16,'Heart Chocolates',"Candy"],
  [17,'Rose (plastic)',"Other"],
  [18,'Valentine Cards',"Other"]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
