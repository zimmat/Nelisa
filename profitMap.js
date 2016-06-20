module.exports = function(salesData,purchasesData){
  var profitMap = {};
  var profitable = " ";
for(salesProduct in salesData){
  var sales = salesProduct;
  for(product in purchasesData){
    var purchaseCost = product;
    if(sales == purchaseCost){
       profitMap[product] = 0;
     }
       profitMap[product] = parseFloat(salesData[salesProduct]) - parseFloat(purchasesData[product]);
}
}
// console.log(profitMap);
return profitMap;
}
