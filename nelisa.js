exports.productMap = function(path) {
  var fs = require('fs');
  var productsMap = {};

  var lines = fs.readFileSync(path, 'utf8');
  lines = lines.slice(0, -1);
  var array = lines.split('\n');
  var header = array.indexOf('Day,Date,stock item,No sold,Sales Price');
  if (header > -1) {
    array.splice(header, 1);
  }

  array.forEach(function(item) {
    var productName = item.split(",")[2];
    var productsQuantity = Number(item.split(",")[3]);

    if (productsMap[productName] === undefined) {
      productsMap[productName] = productsQuantity;
    } else {
      productsMap[productName] += productsQuantity;
    }
  });
  return productsMap;
};
exports.popular = function(obj) {
  var mostPopular = [];
  var week = Object.keys(obj).map(function(key) {
    return obj[key];
  });
  var max = Math.max.apply(null, week);
  for (var product in obj) {
    if (obj[product] === max) {
      mostPopular.push(product);

    }
  }
  return mostPopular;
}
exports.unpopular = function(obj) {
  leastPopular = [];
  var week = Object.keys(obj).map(function(key) {
    return obj[key];
  });
  var min = Math.min.apply(null, week);
  for (var product in obj) {
    if (obj[product] === min) {
      leastPopular.push(product);

    }
  }
  return leastPopular;
}
exports.getCategories = function(itemsMap,catMap){
  var categoryMap = {};
for(product in itemsMap){
  var categories = catMap[product];
  var quantity = itemsMap[product];
  if(!itemsMap.hasOwnProperty(categories)){
    categoryMap[categories] = 0;
  }
        categoryMap[categories] += quantity;
}

return categoryMap;
}
exports.getPurchases = function(path){
  var fs = require('fs');
  var janData = [];

  var lines = fs.readFileSync(path, 'utf8');
  lines = lines.slice(0, -1);
  var array = lines.split('\n');
  array = array.splice(0);

  array.forEach(function(string) {
    string = string.split(';');
    console.log(string);
if(string[i] ==='Jan'){
  janData.push(i);
}
});
console.log(janData);
return janData
};
