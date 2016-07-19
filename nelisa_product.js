var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
user     : 'root',
password : 'coder123',
database : 'nelisa'
});

var sql = "select products.product_name,categories.category_id";

//map category name by category id
conn.query(sql, function(err, products) {
    if (err) return console.log(err);;
    console.log(products);
    conn.end();
});

// SELECT Customers.CustomerName, Orders.OrderID
// FROM Customers
// INNER JOIN Orders
// ON Customers.CustomerID=Orders.CustomerID
// ORDER BY Customers.CustomerName;
