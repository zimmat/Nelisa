var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
});

var sql = "select * from categories";
var sqlOne = "select category_id,product_name from products";
var sqlTwo = "select product_id,product_name from products";


//map category name by category id
conn.query(sql, function(err, categories) {
    if (err) return console.log(err);;
    console.log(categories);
  });
    conn.query(sqlOne, function(err, products) {
        if (err) return console.log(err);;
        console.log(products);
      });
      conn.query(sqlTwo, function(err, products) {
          if (err) return console.log(err);;
          console.log(products);
    conn.end();
});
