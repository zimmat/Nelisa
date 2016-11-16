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
  var lines = fs.readFileSync("./files/purchases.csv", 'utf8');
  lines = lines.slice(0, -1);
  var salesData = lines.split('\n');
  var header = salesData.indexOf('Shop;Date;Item;Quantity;Cost;Total Cost');
  if (header > -1) {
    salesData.splice(header, 1);
  }
  var mapSalesByProductId = {};
  var values = [];
  salesData.forEach(function(data) {
  var myData = data.split(";");
    var shop = myData[0];
    var date = new Date(myData[1] + '2016');
    var product_name = myData[2];
    var quantity = Number(myData[3]);
    var product_id = productNameByProductId[product_name];
    var g = myData[4].replace("R", '').replace(',','.');
    var cost = Number(g).toFixed(2);
    console.log("parseFloat" + " " + cost + " " + "string" + g );
    var totalCost = parseFloat(myData[5].replace("R", ''));
values.push([shop,date,quantity, cost,product_id]);
  });

  //  console.log(values);
  var sql = "insert into purchases(shopName,purchase_date,quantity,cost,product_id) VALUES ?";
  conn.query(sql, [values], function(err) {
    if (err) throw err;
  });
  conn.end();
});
