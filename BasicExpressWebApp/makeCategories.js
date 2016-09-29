module.exports = function(itemsMap, catMap) {
  // console.log("itemsMap", itemsMap);
  var categoryMap = {};
  for (product in itemsMap) {
    var categories = catMap[product];
    var quantity = itemsMap[product];
    if (!categoryMap.hasOwnProperty(categories)) {
      categoryMap[categories] = quantity;
    } else {
      categoryMap[categories] += quantity;
    }

  }

  // console.log("category", categoryMap);
  return categoryMap;
}
