exports.getFiles = function(files){
  console.log(files);
    var fs = require('fs');
    var products = [];
files.forEach(function(weekData){
  var weekFiles = readFileSync(path + + data, 'utf8');
    weekFiles = weekFiles.split('\n');
  weekFiles.forEach(function(file){
    products.push(file);
  });
});
return products;
console.log(products);
  };
