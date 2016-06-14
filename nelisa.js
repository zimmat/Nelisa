exports.popularCategory = function(salesData) {
  var mostPopular = [];
  var week = Object.keys(salesData).map(function(key) {
    return salesData[key];
  });
  var max = Math.max.apply(null, week);
  for (var product in salesData) {
    if (salesData[product] === max) {
      mostPopular.push(product);

    }
  }
  return mostPopular;
}

exports.unpopularCategory = function(obj) {
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
console.log(categoryMap);
return categoryMap;
 }
exports.getPurchases = function(path,week){
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
        weeklyPurchases[itempurchased] = 0;
    }
weeklyPurchases[itempurchased] += parseFloat(totalCoast);
  });
  // console.log(weeklyPurchases);
  return weeklyPurchases;
};

exports.mostProfitable = function(purchasesData,salesData){
  var maxProfit = [];
  for(product in purchasesData){
    var purchasePrice = purchasesData[product];
    console.log(purchasePrice);
    var salesPrice = salesMap[product];
    // console.log(salesPrice);
    if(!itemsMap.hasOwnProperty(categories)){
      // categoryMap[categories] = 0;
    }
          // categoryMap[categories] += q
  return maxProfit;
}
}
