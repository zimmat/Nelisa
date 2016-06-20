module.exports =  function(path) {
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
  // console.log('products',productsMap);
  return productsMap;
};
