module.exports = function(salesData,purchasesData){
  // console.log("sales",salesData);
  // console.log('purchase',purchasesData);

  var profitMap = {};
for(salesProduct in salesData){
  for(product in purchasesData){
    if(salesProduct == product){
  profitMap[product] = salesData[salesProduct] - purchasesData[product];
     }

}
}
// console.log("profit",profitMap);
return profitMap;
}
