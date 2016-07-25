var mysql = require('mysql');
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

});

conn.query("select * from products", function(err, products) {
  if (err) return console.log(err);
  // console.log(products);

  var productNameByProductId = {};
  products.forEach(function(item) {
    var product_name = item.product_name;
    var product_id = item.product_id;
    productNameByProductId[product_name] = product_id;
    //   categories.forEach(function(catName){
    //
  });
  //  console.log(productNameByProductId);


  conn.end();
});
