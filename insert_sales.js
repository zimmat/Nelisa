var mysql = require('mysql');
var fs = require('fs');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coder123',
  database: 'nelisa'
});

conn.query("select * from products", function(err, products) {
  if (err) return console.log(err);
  // console.log(products);
  var productNameByProductId = {};
  products.forEach(function(products) {
    var product_name = products.product_name;
    var product_id = products.product_id;
    productNameByProductId[product_name] = product_id;
  });
  var lines = fs.readFileSync("./files/week4.csv", 'utf8');
  lines = lines.slice(0, -1);
  var salesData = lines.split('\n');
  var header = salesData.indexOf('Day,Date,stock item,No sold,Sales Price');
  if (header > -1) {
    salesData.splice(header, 1);
  }
  var mapSalesByProductId = {};
  var salesValues = [];
  salesData.forEach(function(data) {
  var myData = data.split(",");
    var sales_date = new Date(myData[1]);
    var product_name = myData[2];
    var no_sold = Number(myData[3]);
    var product_id = productNameByProductId[product_name];
    var sales_price = Number(myData[4].replace("R", ''));
salesValues.push([sales_date,no_sold, sales_price, product_id]);
  });

  // console.log(salesValues);
  var sql = "insert into sales(sales_date,quantity,sales_price,product_id) VALUES ?";
  conn.query(sql, [salesValues], function(err) {
    if (err) throw err;
  });
  conn.end();
});
