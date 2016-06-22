module.exports = function(itemsMap,catMap){
  var categoryMap = {};
for(product in itemsMap){
  var categories = catMap[product];
  var quantity = itemsMap[product];
  if(!itemsMap.hasOwnProperty(categories)){
    categoryMap[categories] = quantity;
  }
        categoryMap[categories] += quantity;
}
//console.log(categoryMap);
return categoryMap;
 }
