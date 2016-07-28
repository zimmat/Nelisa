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
  'Shampoo 1 litre': 'Toiletries',
  'Soap Bar': 'Toiletries',
  'Bananas - loose': 'Fruit',
  'Apples - loose': 'Fruit',
  'Mixed Sweets 5s': 'Candy',
  'Heart Chocolates': 'Candy',
  'Rose (plastic)': 'Other',
  'Valentine Cards': 'Other'
};
// CategoryDbIdMap - this is built on the back of a SQL query
conn.query("select * from categories ", function(err, categories) {
  if (err) return console.log(err);
  // console.log(categories);
  categoryMap = {};
  var values = [];
  categories.forEach(function(catName) {
    var category_name = catName.category_name;
    var category_id = catName.category_id;
    categoryMap[category_name] = category_id;
  });
  var mapProductByCategoryId = {};
for (product in productCategoryMap) {
for (category in categoryMap){
        var category_id = categoryMap[category];
        if(productCategoryMap[product] === category){
        mapProductByCategoryId[product] = category_id;
        values.push([product,category_id]);
     }
   }
  }
console.log(values);
  // console.log("values",mapProductByCategoryId);
  var sql = "insert into products(product_name,category_id) VALUES ?"
  conn.query(sql, [values], function(err) {
    if (err) throw err;
  });
conn.end();
});
