var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coder123',
  database: 'nelisa'
});

var sql = "select product_name,category_id from products";

conn.query(sql, function(err, products) {
    if (err) return console.log(err);;
    console.log(products);
    conn.end();
});
