var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'nelisa',
password : 'nelisa',
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
