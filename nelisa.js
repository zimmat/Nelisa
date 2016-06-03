exports.productNames = function(path) {
  var fs = require('fs');
  var products = {};

  var lines = fs.readFileSync(path, 'utf8');
  lines = lines.slice(0, -1);
  var array = lines.split('\n');
  var index = array.indexOf('Day,Date,stock item,No sold,Sales Price');
  if (index > -1) {
    array.splice(index, 1);
  }

  array.forEach(function(item) {
    var productName = item.split(",")[2];
    var productsQuantity = Number(item.split(",")[3]);

    if (products[productName] === undefined) {
      products[productName] = productsQuantity;
    } else {
      products[productName] += productsQuantity;
    }
  });
   console.log(products);
  return products;
};
exports.popularProduct = function(obj) {
  var mostPopular = [];
  var week = Object.keys(obj).map(function(key) {
    return obj[key];
  });
  var max = Math.max.apply(null, week);
  for (var pro in obj) {
    if (obj[pro] === max) {
      max = pro;
      mostPopular.push(max);

    }
  }
  return mostPopular
}
exports.unpopularProduct = function(obj) {
  leastPopular = [];
  var week = Object.keys(obj).map(function(key) {
    return obj[key];
  });
  var min = Math.min.apply(null, week);
  for (var pro in obj) {
    if (obj[pro] === min) {
      min = pro;
      leastPopular.push(min);

    }
  }
  // console.log(leastPopular);
  return leastPopular;
}
