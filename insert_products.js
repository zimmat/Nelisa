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
    console.log(categories);
    categoryMap = {};
categories.forEach(function(catName){
  var category_name = catName.category_name;
  var category_id = catName.category_id;
 categoryMap[category_name] = category_id;
});
console.log(categoryMap);

  // var productNameByCatId = {};
  // for (var product in productCategoryMap) {
  //   var product_name = product;
  //   for (var id in categories) {
  //     var category_name = [id];
  //     //if (!productNameByCatId[product_name].hasOwnProperty(category_name)) {
  //       productNameByCatId[product_name] = categories[id];
  //     //}
  //   }
  // };
  // console.log(productNameByCatId);

  conn.end();
});



//   return categoryMap;
// }
//
// {
//   'Dairy' : 9
// }
//
//
// // loop through
//
//
//
//
//   var sql ="INSERT INTO products(product_name) VALUES ?";
//
//   //bulk insert
//   var values= [];
//
//
//
//
// conn.query(sql, [values], function(err) {
//     if (err) throw err;
//     conn.end();
// });
