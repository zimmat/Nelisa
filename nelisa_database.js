var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
});

var sql = "INSERT INTO categories(category_id, category_name) VALUES ?";

//create a list of lists
var values = [
 [1,"Bakery"],
 [2,"Candy"],
 [3,"Canned Food"],
 [4,"Dairy"],
 [5,"Fruit"],
 [6,"Groceries"],
 [7,"Other"],
 [8,"Soft-Drinks"],
 [9,"Toiletries"]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
