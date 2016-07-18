var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
});

var sql = "INSERT INTO Categories(id, description) VALUES ?";

//create a list of lists
var values = [
 [1,"Bakery"],
 [2,"Candy"],
 [3,"Canned Food"],
 [4,"Dairy"],
 [5,"Fruit"],
 [6,"Toiletries"],
 [7,"Groceries"],
 [8,"Other"],
 [9,"Soft-Drinks"]
];

conn.query(sql, [values], function(err) {
    if (err) throw err;
    conn.end();
});
