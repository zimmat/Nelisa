var mysql = require('mysql');
var fs = require('fs');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coder123',
  database: 'nelisa'
});


var productCategoryMap = {
  'Milk 1l': 'Dairy',
  'Imasi': 'Dairy',
  'Bread': 'Bakery',
  'Chakalaka Can': 'Canned Food',
  'Gold Dish Vegetable Curry Can': 'Canned Food',
  'Fanta 500ml': 'Soft-Drinks',
  'Coke 500ml': 'Soft-Drinks',
  'Cream Soda 500ml': 'Soft-Drinks',
  'Iwisa Pap 5kg': 'Groceries',
  'Top Class Soy Mince': 'Groceries',
  'Shampoo 1 litre': 'toiletries',
  'Soap Bar': 'toiletries',
  'Bananas - loose': 'Fruit ',
  'Apples - loose': 'Fruit ',
  'Mixed Sweets 5s': 'Candy',
  'Heart Chocolates': 'Candy',
  'Rose (plastic)': 'Other  ',
  'Valentine Cards': 'Other  '
};


// CategoryDbIdMap - this is built on the back of a SQL query
conn.query("select * from categories ", function(err, categories) {
  if (err) return console.log(err);
  categoryMap = {};
  // var values = [];
  categories.forEach(function(catName) {
    var category_name = catName.category_name;
    var category_id = catName.category_id;
    categoryMap[category_name] = category_id;
  });
  var mapProductByCategoryId = {};
  for (productName in productCategoryMap) {
      for (categoryName in categoryMap) {
      if (productCategoryMap[productName] === categoryName) {
        mapProductByCategoryId[productName] = categoryMap[categoryName];
        // values.push(productName,categoryMap[categoryName])
      }
    }
  }

  // console.log(mapProductByCategoryId);
  var sql = "insert into products(product_name,category_id) VALUES ?"
var values = [[ 'Milk 1l',4],
  ['Imasi',4],
  ['Bread',1],
  ['Chakalaka Can',3],
  ['Gold Dish Vegetable Curry Can',3],
  ['Fanta 500ml',8],
  ['Coke 500ml',8],
  ['Cream Soda 500ml',8],
  ['Iwisa Pap 5kg',6],
  ['Top Class Soy Mince',6],
  ['Mixed Sweets 5s',2],
  ['Heart Chocolates', 2] ]
  conn.query(sql,[values],function(err){
      //  console.log(values);
    if (err) throw err;
  });



var lines = fs.readFileSync("./files/week1.csv", 'utf8');
lines = lines.slice(0, -1);
var salesData = lines.split('\n');
var header = salesData.indexOf('Day,Date,stock item,No sold,Sales Price');
if (header > -1) {
  salesData.splice(header, 1);
}
// console.log(salesData);

conn.query("select * from products", function(err, products) {
  if (err) return console.log(err);
  // console.log(products);

  var productNameByProductId = {};
  products.forEach(function(item) {
product_id = item.product_id;
    salesData.forEach(function(sales){
    var product = sales.split(",")[2];
    if(item.product_name === product){
      productNameByProductId[product] = product_id;
    }
  });

    //   categories.forEach(function(catName){
    //
   });
   console.log(productNameByProductId);


  conn.end();
});
