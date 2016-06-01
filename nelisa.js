exports.productNames = function(path) {
  // console.log(path);
  var fs = require('fs');
  var data = [];

    var lines = fs.readFileSync(path, 'utf8');
  lines = lines.slice(0, -1);
    var array = lines.split('\n');
    var index = array.indexOf('Day,Date,stock item,No sold,Sales Price');
if (index > -1) {
    array.splice(index, 1);
}
console.log(index);

    array.forEach(function(item){
      var productName = item.split(",")[2];
      if (data.indexOf(productName) === -1) {
        data.push(productName);
      }
    });
    // console.log(data);
    return data

  };
