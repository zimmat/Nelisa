module.exports = function(quantityMap,priceMap){
  var salesMade = {};
  for(item in quantityMap){
    var itemOne = item;
    for(item2 in quantityMap){
    var itemTwo = item2;
    if(itemOne == itemTwo){
      salesMade[item] = 0
    }
    salesMade[item] = quantityMap[item] * priceMap[item2];
  }
  }
  // console.log(salesMade);
  return salesMade;
}
