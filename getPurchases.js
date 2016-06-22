module.exports = function(path,week){
  var fs = require('fs');
  var weekPurchases = [];
  var weeklyPurchases = {};

  var lines = fs.readFileSync(path, 'utf8');
  lines = lines.slice(0, -1);
  var array = lines.split('\n');
  var header = array.indexOf('Shop;Date;Item;Quantity;Cost;Total Cost');

  if (header > -1) {
    array.splice(header, 1);
    //  console.log(array);
  }
array.forEach(function(purchaseData) {
    purchaseData = purchaseData.split(';');
    week.forEach(function(date){
      if(purchaseData.indexOf(date) >-1){
        weekPurchases.push(purchaseData);

      }
    });
  });
  weekPurchases.forEach(function(sales){
    var itempurchased = sales[2];
    var totalCoast = sales[5];
    totalCoast = totalCoast.replace(/R/g,'');
    totalCoast = totalCoast.replace(",",".");
    // console.log('coooooost', totalCoast);
    if(!weeklyPurchases[itempurchased] ){
        weeklyPurchases[itempurchased] = parseFloat(totalCoast);;
    }
weeklyPurchases[itempurchased] += parseFloat(totalCoast);
  });
  // console.log('purchases',weeklyPurchases);
  return weeklyPurchases;
};
