module.exports = function(productProfitData) {
  var mostProfitableProduct = {};
  var week = Object.keys(productProfitData).map(function(key) {
    return productProfitData[key];
  });
  var max = Math.max.apply(null, week);
  for (var product in productProfitData) {
    if (productProfitData[product] === max) {
      max = productProfitData[product];
      mostProfitableProduct = {
        description: "most profitable product",
        name: product,
        profit:(max).toFixed(2).replace('','R')
      };

    }
  }
  return mostProfitableProduct;
}
