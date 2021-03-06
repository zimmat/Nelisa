module.exports = function(path) {
  var fs = require('fs');
  var sales = {};

  var lines = fs.readFileSync(path, 'utf8');
  lines = lines.slice(0, -1);
  var array = lines.split('\n');
  var header = array.indexOf('Day,Date,stock item,No sold,Sales Price');
  if (header > -1) {
    array.splice(header, 1);
  }

  array.forEach(function(item) {
    var productName = item.split(",")[2];
    var productQuantity = item.split(",")[3];
    var productPrice = item.split(",")[4];
productPrice = productPrice.replace('R','');
    if (sales[productName] === undefined) {
      sales[productName] = (Number(productQuantity) * Number(productPrice ));
    }
    else {
      sales[productName] += Number(productQuantity) * Number(productPrice );
    }
  });
 // console.log('week one salesMap',sales);
  return sales;
};
